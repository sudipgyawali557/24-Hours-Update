import React, { Key } from "react";
import { get, isEmpty, omit } from "lodash";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { convertCamelcaseToWords } from "../utils/camelCaseToWords";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Pagination from "../Pagination";
import { useGetFetchQuery } from "../../helpers/useFetchQuery";
import { User } from "../../models/user/user";
import CloseIcon from "@mui/icons-material/Close";
import { projectService } from "../../service";
import { customToast, openModal } from "../../helpers";
import { Project } from "../../models/project/project";
import RejectedModal from "./rejectedmodal/rejected-modal";
import { Projects } from "../../models/projects/projects";
import DeleteIcon from "@mui/icons-material/Delete";
interface paginationProps {
    pagination: any;
    setPagination: Function;
}
interface dataType {
    user: User;
}
interface TableProps {
    columns: any;
    view: Function;
    projectview: Function;
    handleEdit: Function;
    action: Function;
    handlePagination: Function;
    views: Function;
    report: Function;
    value: string;
    name: string;
    onDelete: Function;
    share: string;
    insight: Function;
    userRole: string;
    omitHeaders: Array<Key>;
    data: Array<Object>;
    pagination: paginationProps;
    updateOnCreate: Function;
}

const Index: any = (props: TableProps) => {
    const data: dataType | any = useGetFetchQuery("user");
    // console.log(data, "datatesting");
    const transferId = data?.user?.id;
    // console.log(transferId, "tid");

    console.log(props, "data");
    const displayData = (item: any, cols: any, index: any) => {
        return <td>{get(item, cols.key, "-")}</td>;
    };
    const handleApprove = (_id: number) => {
        let body = {
            verificationStatus: "APPROVED",
            project: {
                id: _id,
            },
            transferredTo: {
                id: transferId,
            },
        };
        projectService.create(body).then((data) => {
            // console.log(data, "testdata");
            props.updateOnCreate(data.data);
            customToast.success("Project Approved");
            // console.log(data.data, "datascreate");
        });
    };
    const openDetail = (_id: number) => {
        openModal(RejectedModal, _id, props);
    };
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 bg-white">
                    <thead className="text-xs text-gray-700 uppercase bg-gradient-to-l from-sky-500 via-sky-600 to-sky-700">
                        <tr className="font-extrabold text-white">
                            <th className="px-6 py-4">S.N</th>
                            {props.columns.map((col: any, index: Number) => (
                                <th
                                    className="px-6 py-4 font-bold"
                                    key={col.label}
                                >
                                    {col.label}
                                </th>
                            ))}

                            {props.name == "epname" ? (
                                <th>Transferred To</th>
                            ) : (
                                ""
                            )}
                            {props.share == "share" ? <th>Share</th> : ""}
                            {!props.action && (
                                <th className="px-6 py-3">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {props.data && props.data.length === 0 ? (
                                <tr>
                                    <td className="text-center font-semibold">
                                        No data found!!
                                    </td>
                                </tr>
                            ) : (
                                props?.data?.map((item: any, index) => (
                                    <>
                                        {/* {console.log(item, "testitem")} */}
                                        <tr className="table_row" key={index}>
                                            <td
                                                key={"index"}
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                {index + 1}
                                            </td>
                                            {props.columns.map(
                                                (cols: any, index: any) => (
                                                    <td
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                                        key={index}
                                                    >
                                                        {displayData(
                                                            item,
                                                            cols,
                                                            index
                                                        )}
                                                    </td>
                                                )
                                            )}
                                            {props.name === "epname" && (
                                                <td
                                                    className="py-4 font-medium text-gray-900 whitespace-nowrap"
                                                    key={index}
                                                >
                                                    {item
                                                        ?.projectVerificationStatus?.[0]
                                                        ?.transferredTo
                                                        ?.firstName +
                                                        " " +
                                                        item
                                                            ?.projectVerificationStatus?.[0]
                                                            ?.transferredTo
                                                            ?.lastName}
                                                </td>
                                            )}
                                            {props.share === "share" && (
                                                <td
                                                    className="py-4 font-medium text-gray-900 whitespace-nowrap"
                                                    key={index}
                                                >
                                                    {(
                                                        (item?.funding /
                                                            item?.project
                                                                ?.requiredFunding) *
                                                        100
                                                    ).toFixed(2)}
                                                    %
                                                </td>
                                            )}

                                            <td
                                                key={"action"}
                                                scope="row"
                                                className="py-4 font-medium text-gray-900 whitespace-nowrap flex justify-start items-center text-start"
                                            >
                                                {props.value === "PENDING"
                                                    ? props.view && (
                                                          <Link
                                                              href={`/project/${item.id}?transfer=${props.value}`}
                                                          >
                                                              <span
                                                                  className={`${
                                                                      props.view
                                                                          ? "text-sky-600 text-xs pl-8 cursor-pointer"
                                                                          : ""
                                                                  }`}
                                                              >
                                                                  <VisibilityIcon fontSize="small" />
                                                              </span>
                                                          </Link>
                                                      )
                                                    : props.view && (
                                                          <Link
                                                              href={`/project/${item.id}`}
                                                          >
                                                              <span
                                                                  className={`${
                                                                      props.view
                                                                          ? "text-sky-600 text-xs pl-8 cursor-pointer"
                                                                          : ""
                                                                  }`}
                                                              >
                                                                  <VisibilityIcon fontSize="small" />
                                                              </span>
                                                          </Link>
                                                      )}
                                                {props.projectview && (
                                                    <Link
                                                        href={`/project/${item?.id}?report=report`}
                                                    >
                                                        <span
                                                            className={`${
                                                                props.projectview
                                                                    ? "text-sky-600 text-xs pl-8 cursor-pointer"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <VisibilityIcon fontSize="small" />
                                                        </span>
                                                    </Link>
                                                )}
                                                {props.projectview && (
                                                    <span
                                                        className={`${
                                                            props.projectview
                                                                ? "text-red-600 text-xs pl-2 cursor-pointer"
                                                                : ""
                                                        }`}
                                                    >
                                                        <DeleteIcon
                                                            fontSize="small"
                                                            onClick={() =>
                                                                props.onDelete(
                                                                    item?.id
                                                                )
                                                            }
                                                        />
                                                    </span>
                                                )}
                                                {props.report && (
                                                    <Link
                                                        href={`/post/${item?.id}`}
                                                    >
                                                        <span
                                                            className={`${
                                                                props.report
                                                                    ? "text-sky-600 text-xs pl-8 cursor-pointer"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <VisibilityIcon fontSize="small" />
                                                        </span>
                                                    </Link>
                                                )}
                                                {props.userRole ===
                                                    "EXECUTIVE_PRODUCER" && (
                                                    <span
                                                        className={`${
                                                            props.view
                                                                ? "text-green-600 text-2xl px-2 font-bold cursor-pointer"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleApprove(
                                                                item["id"]
                                                            )
                                                        }
                                                    >
                                                        <i className="bx bx-check"></i>
                                                    </span>
                                                )}
                                                {props.userRole ===
                                                    "EXECUTIVE_PRODUCER" && (
                                                    <span
                                                        className={`${
                                                            props.view
                                                                ? "text-red-600 text-xs cursor-pointer"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            openDetail(
                                                                item["id"]
                                                            )
                                                        }
                                                    >
                                                        <CloseIcon />
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    </>
                                ))
                            )}
                        </>
                    </tbody>
                </table>
            </div>
            {!props.handlePagination && <Pagination {...props} />}
        </>
    );
};

export default Index;
