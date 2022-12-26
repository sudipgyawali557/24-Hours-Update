import { fetchWrapper } from "../../helpers";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const categoryService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    upload,
};

let baseUrl = `${publicRuntimeConfig.apiBaseUrl}/category`;

function getAll(pagination?, search?) {
    // debugger
    let url =
        baseUrl +
        `?take=${pagination.TAKE}&skip=${pagination.SKIP}&order=${
            pagination.sort
        }&field=${"id"}&`;

    for (var key in search) {
        url += `${key}=${search[key]}&`;
    }

    return fetchWrapper.get(url);
}

function getById(id: number, token?: any) {
    return fetchWrapper.get(`${baseUrl}/${id}`, token);
}

function create(params: any) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id: number, params: any) {
    return fetchWrapper.put(`${baseUrl}/${id}/update`, params);
}

function upload(data: FormData) {
    return fetchWrapper.upload(
        `${publicRuntimeConfig.apiBaseUrl}/fileUpload/upload`,
        data
    );
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: number) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
