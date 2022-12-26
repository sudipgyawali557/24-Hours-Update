import React, { Key, useState, useEffect } from "react";
import { get, isEmpty, omit } from "lodash";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { convertCamelcaseToWords } from "../utils/camelCaseToWords";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
// import Pagination from "../Pagination";
import ViewDetail from "./view_details";
import { openModal, openSlidePane } from "../../helpers";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Pagination from "../Pagination";

// interface paginationProps {
//     pagination: any;
//     setPagination: Function;
// }
interface TableProps {
    columns: any;
    view: Function;
    handleEdit: Function;
    handleDelete: Function;
    action: Function;
    onDelete: Function;
    handlePagination: Function;
    views: Function;
    report: Function;
    insight: Function;
    omitHeaders: Array<Key>;
    data: Array<Object>;
    type: any;
    // pagination: paginationProps;
}
const Index: any = (props: TableProps) => {
    // console.log(props, "propsusertable");
    const [datas, setDatas] = useState(false);
    useEffect(() => {
        setDatas(true);
    }, []);
    // debugger;
    // console.log(props.data, "test");
    // const displayData = (item: any, cols: any, index: any) => {
    //     return <td>{get(item, cols.key, "-")}</td>;
    // };
    const getCaps = (head: String, field: any) => {
        if (head) return convertCamelcaseToWords(head);
        return field.toUpperCase();
    };
    const openDetail = (data: any) => {
        openModal(ViewDetail, data);
    };
    let columns =
        props.data && Object.keys(omit(props.data[0], props.omitHeaders));
    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 bg-white border border-gray-200">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr className="font-extrabold shadow-md">
                        <th className="px-6 py-2">S.N</th>
                        {props.data &&
                            props.data.length !== 0 &&
                            columns.map((key: String, index) => (
                                <th className="font-bold" key={index}>
                                    {getCaps(key, null)}
                                </th>
                            ))}
                        {!props.action && <th className="">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    <>
                        {props.data &&
                        props.data &&
                        datas &&
                        props.data.length === 0 &&
                        isEmpty(props.data) ? (
                            <span className="text-center font-semibold">
                                No Data found!!
                            </span>
                        ) : (
                            props.data.map((row: any, index: number) => (
                                <>
                                    {/* {console.log(row, "rows")} */}
                                    <tr
                                        className="table_row"
                                        key={row["id"] + index}
                                    >
                                        <td
                                            key={"index"}
                                            scope="row"
                                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {index + 1}
                                        </td>
                                        {columns.map((col: any) => {
                                            return (
                                                <td
                                                    key={row["id"]}
                                                    scope="row"
                                                    className=" py-3 font-medium text-gray-900 whitespace-nowrap"
                                                >
                                                    {col === "fullname" &&
                                                    props.action ? (
                                                        <>
                                                            <Link
                                                                href={
                                                                    "/profile"
                                                                }
                                                            >
                                                                <td className=" font-medium text-gray-900 whitespace-nowrap text_shadow">
                                                                    {row[col]}
                                                                </td>
                                                            </Link>
                                                        </>
                                                    ) : col === "profileUrl" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className={`h-5 w-5`}
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            onClick={() =>
                                                                openDetail(
                                                                    row[
                                                                        "profileUrl"
                                                                    ]
                                                                )
                                                            }
                                                        >
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    ) : col === "ssss" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "ssAddress.city"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : col === "file" ||
                                                      col === "attachment" ? (
                                                        <a
                                                            href={`${row[col]}`}
                                                            download={row[col]}
                                                        >
                                                            {row[col] !==
                                                            null ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-7 w-7"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                "-"
                                                            )}
                                                        </a>
                                                    ) : col === "sssss" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "sssAddress.city"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : col === "userRoles" ||
                                                      col === "users" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "userRoles[0].role.role"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : col === "sss" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "sAddress.city"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : col ===
                                                      "userAddress" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "userAddress.city"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : col === "test" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "Address.city"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : col ===
                                                      "userContacts" ? (
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        {get(
                                                                            row,
                                                                            "userContacts[0].value"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    ) : row[col] ? (
                                                        row[col]
                                                    ) : (
                                                        "-"
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td
                                            key={"action"}
                                            scope="row"
                                            className="py-2 font-medium text-gray-900 whitespace-nowrap flex justify-start items-center text-start"
                                        >
                                            {props.view && (
                                                <Link
                                                    href={`/projects-details`}
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
                                            {props.views && (
                                                <Link
                                                    href={`/profile/${row["id"]}?roles=${row?.userRoles?.[0]?.role?.role}`}
                                                >
                                                    <span
                                                        className={`${
                                                            props.views
                                                                ? "text-sky-600 text-xs pl-8 cursor-pointer"
                                                                : ""
                                                        }`}
                                                    >
                                                        <VisibilityIcon fontSize="small" />
                                                    </span>
                                                </Link>
                                            )}
                                            {props.handleEdit && (
                                                <BorderColorOutlinedIcon
                                                    fontSize="small"
                                                    className={`mr-2 text-amber-500 cursor-pointer text-md`}
                                                    onClick={() =>
                                                        props.handleEdit(row)
                                                    }
                                                />
                                            )}
                                            {!props.handleDelete && (
                                                <DeleteForeverRoundedIcon
                                                    fontSize="small"
                                                    className={`text-red-700 cursor-pointer`}
                                                    onClick={() =>
                                                        props.onDelete(
                                                            row["id"]
                                                        )
                                                    }
                                                />
                                            )}
                                            {props.insight && (
                                                <Link href={`/project-insight`}>
                                                    <span
                                                        className={`${
                                                            props.insight
                                                                ? "text-sky-600 text-xs pl-8 cursor-pointer"
                                                                : ""
                                                        }`}
                                                    >
                                                        <VisibilityIcon fontSize="small" />
                                                    </span>
                                                </Link>
                                            )}
                                            {props.report && (
                                                <Link href={`/report-details`}>
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
                                        </td>
                                    </tr>
                                </>
                            ))
                        )}
                    </>
                </tbody>
            </table>
            {!props.handlePagination && <Pagination {...props} />}
        </div>
    );
};

export default Index;
