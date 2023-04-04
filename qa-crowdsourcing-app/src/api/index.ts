import axios from "axios";

/**
 * Module imports an instance of Axios
 * that accesses the api root by default
 */
const isProd = true;

const url = isProd
	? "https://gameqa-is.herokuapp.com"
	: "http://localhost:5000";

export default axios.create({
	baseURL: url,
	withCredentials: true,
});
