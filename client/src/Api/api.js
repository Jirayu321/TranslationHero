import axios from "axios";

const url = "http://localhost:5001/login";

export const fetchData = () => axios.get(url);
