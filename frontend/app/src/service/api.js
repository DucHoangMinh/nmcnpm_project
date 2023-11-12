import axios from "axios";
const dataToken = JSON.parse(localStorage.getItem('tokenData'))
const headers = {
    'Content-Type': 'application/json',
    'Authorization': dataToken.tokenType || '' +' '+dataToken.token||''
}
const api = {
    post : async (url, body) => {
        return await axios.post('http://localhost:8080/api/' + url, body, {headers: headers})
    }
}
export default api