import { Router } from 'express';

import { readJSON } from '../utils/readJSON.js';
const notifications = readJSON('../../notifications.json');

export const notificationsRouter = Router();

notificationsRouter.get('/', (req, res) => {
    return res.json({
        'code': 'F100',
        'message': 'Se obtuvieron notificaciones',
        'data': notifications
    })
})