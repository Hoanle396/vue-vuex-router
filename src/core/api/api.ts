import axios from 'axios';

const APIUrl = process.env.API_URL;
export default {
    getHeaders() {
        let token = window.localStorage.getItem('token');
        if (token == null) {
            return {'Access-Control-Allow-Origin': '*'};
        }
        return { Authorization: 'Bearer ' + token ,'Access-Control-Allow-Origin': '*'}
    },
    get(url:string): any {
        return axios.get(APIUrl + url, { headers: this.getHeaders() })
    },
    post(url: string, data: any):any {
        return axios.post(APIUrl + url, data, { headers: this.getHeaders() })
    },
    delete(url: string, id: string) : any {
        return axios.delete(APIUrl + url+"/"+id, { headers: this.getHeaders() })
    },
    put(url: string, data: any):any {
        return axios.put(APIUrl + url, data, { headers: this.getHeaders() })
    }
}