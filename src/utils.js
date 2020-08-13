import axios from "axios";
import { apiUrl } from "./constant";
import qs from "querystring";


export function generateUrl(path) {
  if (path.includes("http")) {
    return path;
  }
  return apiUrl + path;
}

export function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
  config = {}
) {
  return new Promise((res, rej) => {
    headers = {
      // ...getHeaders(),
      ...headers,
    };
    if (method === "get" || method === "delete") {
      data = {
        ...requestOptions,
        params: { ...data },
        paramsSerializer: function (params) {
          return qs.stringify(params);
        },
        headers,
      };
    }

    let updatedData = data instanceof FormData ? data : { ...data };

    axios[method](endPoint, updatedData, { headers, ...config })
      .then((result) => {
        let { data } = result;
        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message &&
          err.response.data.message === "Wrong number of segments"
        ) {
          logOut();
          window.location.href = "/";
          return;
        }
        return rej(err);
      });
  });
}

export function apiPost(endPoint, data, headers = {}, config = {}) {
  return apiReq(generateUrl(endPoint), data, "post", headers, {}, config);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(generateUrl(endPoint), data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "put", headers);
}



export function multiPartData(data) {
  let multiPart = new FormData();

  for (let prop in data) {
    multiPart.append(prop, data[prop]);
  }

  return multiPart;
}

export function logOut(userType) {
  return new Promise((res, rej) => {
    localStorage.removeItem(userType);
    res(true);
  });
}


export function countArray(val, totalItems) {
  let arr = [...Array(totalItems)].map((_, i) => { return i + val })
  return arr || []
}