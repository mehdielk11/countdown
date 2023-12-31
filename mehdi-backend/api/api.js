import express from 'express';
import {
    createCountDown,
    deleteCountDown,
    updateCountDown,
    getCountDowns,
    getCountDown,
} from '../controllers/countdowns.js';
import {
    getUser,
    deleteUser,
    updateUser,
    createUser,
    loginUser,
} from '../controllers/users.js';

import { verifyUser } from './middleware.js';

const router = express.Router();

router
    .route('/countdowns/:id')
    .get(verifyUser, getCountDown)
    .post(verifyUser, createCountDown)
    .delete(verifyUser, deleteCountDown)
    .put(verifyUser, updateCountDown);

router.route('/countdowns').get(verifyUser, getCountDowns).post(verifyUser, createCountDown);
router.route('/user/login').post(loginUser);
router.route('/user/signup').post(createUser);
router
    .route('/user/:id')
    .get(verifyUser, getUser)
    .delete(verifyUser, deleteUser)
    .put(verifyUser, updateUser)
    .post(verifyUser, createUser);


export default router;