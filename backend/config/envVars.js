import dotenv from "dotenv";
dotenv.config();

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET || "mazhar",
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
	TMBD_TOKEN: process.env.TMBD_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFkMDE5MzRlMGRhYjRiNzI2NmI1ZTE0OTU3YjBkNyIsIm5iZiI6MTczMjY5MjYzOC45NzY2MjIzLCJzdWIiOiI2NzQ0MmUzMmNjMWQ2OTk4NmJkOWQxYTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AUmeQj5KQ3nC7Jq6g-OlmXG02rTgHsbAI-gapm8PJ6k',
};
