import axios from "axios";

export default axios.create({
    baseURL: "192.168.1.22:4000/v1",
})