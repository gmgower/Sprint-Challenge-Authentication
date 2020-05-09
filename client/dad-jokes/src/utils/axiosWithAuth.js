//! deals with passing token to server endpoints
import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL:"http://localhost:3300",
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    });
}