/** @format */

import 'reflect-metadata';
import { config } from 'dotenv';

config({ path: '.env' });

import App from './app';

import './database';

const main = (): void => {
	new App();
};

main();
