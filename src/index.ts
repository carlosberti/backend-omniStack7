import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import * as http from 'http'
import io from 'socket.io';
import './database';

const app = express();

const server = http.createServer(app);

app.use((req: Request, _response: Response, next: NextFunction) => {
    //@ts-ignore
    req.io = io(server);

    next();
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(routes);

server.listen(3333, () => console.log('Listening on localhost:3333'));