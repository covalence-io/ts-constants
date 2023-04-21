import express, { Application, Request, Response, NextFunction } from 'express';
import parser from 'body-parser';
import url from 'url';
import { resolve } from 'path';
import api from './api.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default function configure(app: Application) {
    app
        .get('/', (req, res, next) => {
            res.sendFile(resolve(__dirname, '../index.html'));
        })
        .use(express.static('public'))
        .use(parser.json())
        .use('/api', api())
        .use('/error', (req, res, next) => {
            next(new Error('Other Error'));
        })
        .use((req, res, next) => {
            next(new Error('Not Found'));
        })
        .use((error: Error, req: Request, res: Response, next: NextFunction) => {
            switch (error.message) {
                case 'Not Found':
                    res.sendFile(resolve(__dirname, '../notfound.html'));
                    return;
            }

            res.sendFile(resolve(__dirname, '../error.html'));
        });
}