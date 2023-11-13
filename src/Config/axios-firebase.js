import axios from 'axios';

const instance = axios.create ({
    baseURL: "https://myblog-88f52-default-rtdb.europe-west1.firebasedatabase.app/"
})

export default instance;