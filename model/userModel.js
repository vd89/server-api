/** @format */

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	phone: {
		type: Number,
	},
});

export default model('User', UserSchema, 'userdata');
