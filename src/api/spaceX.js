import { apiGet } from "../utils"

export function getAllDataAPI(data) {
    return apiGet('/v3/launches?', data);
}