import axios from "axios";

const BASE_URL = "https://randomuser.me/api/";

async function getUsers(results: number = 1, page: number = 1)  {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            results,
            page
        }
    });

    return response.data;

}
async function getUserByUUID(uuid: string) {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            uuid: uuid
        }
    });

    return response.data.results[0];
}


export const api = {
    getUsers,
    getUserByUUID
};

