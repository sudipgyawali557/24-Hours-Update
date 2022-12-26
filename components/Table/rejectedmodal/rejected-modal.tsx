import { useRouter } from "next/router";
import React from "react";
import { customToast } from "../../../helpers/customToast";
import { useGetFetchQuery } from "../../../helpers/useFetchQuery";
import { Project } from "../../../models/project/project";
import { Projects } from "../../../models/projects/projects";
import { User } from "../../../models/user/user";
import { projectService } from "../../../service";
interface dataType {
    user: User;
}
export default function RejectedModal(props: any) {
    // console.log(props, "pripsrehetc");
    const data: dataType | any = useGetFetchQuery("user");
    // console.log(data, "datas");
    const transferId = data?.user?.id;
    // console.log(transferId, "tid");
    const [reason, setReason] = React.useState("");
    const router = useRouter();

    const submitHandler = () => {
        let body = {
            verificationStatus: "REJECTED",
            rejectedReason: reason,
            project: {
                id: props.items,
            },
            transferredTo: {
                id: transferId,
            },
        };
        projectService.create(body).then((data) => {
            props.callback();
            props.additionalProps.updateOnCreate(data.data);
            customToast.success("Rejected Successfully.");
        });
    };

    return (
        <div className="card m-3">
            <div className="card-body">
                <div className="text-gray-700 pt-1">
                    <label className=" mb-1" htmlFor="reason">
                        Reason to reject:
                    </label>
                    <textarea
                        className={`w-full focus:outline-none px-3 py-1 text-base placeholder-gray-600 border border-gray-300 rounded-lg focus:shadow-outline`}
                        id="reason"
                        rows={4}
                        value={reason}
                        onChange={(e: any) => setReason(e.target.value)}
                    />

                    <div className="flex justify-end">
                        <button
                            className="bg-blue-700 hover:bg-blue-900 transition ease-in-out duration-200 text-white rounded px-4 py-2 text-sm font-semibold"
                            onClick={() => submitHandler()}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
