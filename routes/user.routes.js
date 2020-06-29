/** @format */

import express from 'express';

import User from '../model/userModel.js';

const { Router } = express;

const router = Router();

router.post('/create', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(200).json({ Msg: 'New User Saved to the database ' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ ErrMsg: 'There is an err in the server' });
	}
});

export default router;
