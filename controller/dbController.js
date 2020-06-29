/** @format */

import config from '../config/config.js';
import mongoose from 'mongoose';

const { connect } = mongoose;
export default async () => {
	try {
		const { mongoURI } = config;
		const option = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		};
		await connect(mongoURI, option);
		console.log(`Database connected to Server ... 🌵 🌵`);
	} catch (error) {
		console.log('error', error);
	}
};
