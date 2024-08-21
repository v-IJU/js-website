import axios from "axios";

export default axios.create({
    baseURL:"https://forkify-api.herokuapp.com/api/v2/"
})