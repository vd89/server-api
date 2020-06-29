/** @format */

import express from 'express';

import dbController from './controller/dbController.js';
import userRoute from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use('/', userRoute);

dbController();
app.listen(8085, () => {
	console.log(`Server is running at port 8085....`);
});
