import axios from "axios";

const BASE_URL = "https://randomuser.me/api/";

async function getUsers()  {
    const response = await axios.get(`${BASE_URL}`);

    return response.data;

}

export const api = {
    getUsers,
};

