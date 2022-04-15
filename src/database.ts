import mongoose from "mongoose";

const URL: string = process.env.DB_SERVER || `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose
	.connect(URL)
	.then((db: any) => console.log("DB is connected"))
	.catch((err: any) => console.log(err));
