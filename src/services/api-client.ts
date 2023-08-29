import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dee7781b53004f299b7e03e10c67e196'
    }
})