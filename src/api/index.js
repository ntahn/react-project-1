import axios from "axios";

const instance = axios.create({
	baseURL: "https://movie0706.cybersoft.edu.vn/api",
});

// const defaultOptions = {
//     baseURL: <CHANGE-TO-URL>,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

// Create instance
// let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
	// const token = localStorage.getItem("token");
	if (localStorage.getItem("UserAdmin")) {
		const token = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default instance;
