import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        
        baseURL: "https://amp-node-api.herokuapp.com/",
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;
