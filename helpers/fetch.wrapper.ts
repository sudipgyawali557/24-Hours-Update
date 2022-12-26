// import { authService } from "../service";
import jwtDecode from "jwt-decode";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiBaseUrl}/auth`;

const publicUrls = [
    baseUrl + "/login",
    baseUrl + "/revoke-token",
    baseUrl + "/register/administration",
    baseUrl + "/check-admin",
];
export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
    upload,
    uploadFiles,
};

async function get(url: string, token?: any) {
    // let authToken = await authHeader(token);
    const requestOptions = {
        method: "GET",
        headers: { Authorization: "Bearer " },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

async function post(url: string, body: any, token?: any) {
    // let authToken = await authHeader(token);

    const requestOptions = {
        method: "POST",
        headers: {},
        body: JSON.stringify(body),
    };
    if (!publicUrls.includes(url)) {
        requestOptions.headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer `,
        };
    } else {
        requestOptions.headers = { "Content-Type": "application/json" };
    }
    return fetch(url, requestOptions).then(handleResponse);
}

async function put(url: string, body: any, token?: any) {
    // let authToken = await authHeader(token);

    const requestOptions = {
        method: "PUT",
        headers: {
            Authorization: `Bearer `,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

async function upload(url: string, body: any, token?: any) {
    // let authToken = await authHeader(token);

    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer `,
        },
        body: body,
    };
    return fetch(url, requestOptions).then(handleResponse);
}

async function uploadFiles(urls: string, body: any, token?: any) {
    // let authToken = await authHeader(token);

    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer `,
        },
        body: body,
    };
    return fetch(urls, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url: string, token?: any) {
    // let authToken = await authHeader(token);

    const requestOptions = {
        method: "DELETE",
        headers: { Authorization: `Bearer ` },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

async function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error =
                ((data && data.message) ?? data.errors) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

// async function authHeader(token?: any) {
//     let accessToken = authService.accessTokenValue || token?.accessToken;
//     if (accessToken && !isTokenExpired(accessToken)) {
//         return accessToken;
//     }
//     const refreshToken = authService.refreshTokenValue || token?.refreshToken;
//     if (refreshToken && !isTokenExpired(refreshToken)) {
//         accessToken = await authService.revokeToken(refreshToken);
//         return accessToken;
//     }

//     // return auth header with jwt if user is logged in and request is to the api url
//     return null;
// }

function isTokenExpired(accessToken?: string | null): boolean {
    if (!accessToken) {
        return true;
    }

    const date = getTokenExpirationDate(accessToken);
    if (!date) {
        return false;
    }
    return !(date.valueOf() > new Date().valueOf());
}

function getTokenExpirationDate(accessToken: string): Date | null {
    const decoded: any = jwtDecode(accessToken);

    if (decoded.exp === undefined) {
        return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
}
