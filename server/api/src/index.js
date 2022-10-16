import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import userController from './controllers/userController.js';
import adminController from './controllers/adminController.js';
import communityController from './controllers/communityController.js';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT ?? 5050;
const origin = process.env.ORIGIN ?? 'http://localhost:3000';

app.use(cors());
app.use(express.json());
app.use('/storage/users', express.static('storage/users'));
app.use('/storage/communities', express.static('storage/communities'));
app.use(userController);
app.use(adminController);
app.use(communityController);

const io = new Server(server, {
	cors: {
		origin: origin,
		methods: ['GET', 'POST'],
	},
});

io.on('connection', socket => {
	console.log(socket.id);
});

app.listen(port, () => console.log(`Server listening on ${port}`));
