import axios from "axios";
const api = {
    post : async (url, body) => {
        let data = await axios.post('http://localhost:8080/api/' + url, body)
        return data.data
    }
}
export default api