import axios from "axios";

const ApiAxios = axios.create({ 
    baseURL: 'https://stage-variables.azion.com/api',
    headers: { Authorization: 'token azion6b2b822ae303a3fd97cbd98499a012d54ae' }
    }
)

export default ApiAxios;