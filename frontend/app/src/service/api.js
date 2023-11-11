import axios from "axios";
let dataToken = JSON.parse(localStorage.getItem('tokenData'))
let headers = {
    'Content-Type': 'application/json',
    'Authorization': dataToken.tokenType+' '+dataToken.token
}
const api = {
    post : async (url, body) => {
        return await axios.post('http://localhost:8080/api/' + url, body, {headers: headers})
    }
}
export default api