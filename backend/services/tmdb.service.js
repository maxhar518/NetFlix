import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	try {
		const options = {
			headers: {
				accept: "application/json",
				Authorization: "Bearer " + ENV_VARS.TMBD_TOKEN,
			},
		};
	
		const response = await axios.get(url, options);
	
		if (response.status !== 200) {
			throw new Error("Failed to fetch data from TMDB" + response.statusText);
		}
	
		return response.data;
	
	} catch (error) {
		console.log("Error in tmbd.services"+error)
	}
};
