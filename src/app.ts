/** @format */

import express, { Application } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';

import { User } from './resolvers';

export default class Server {
	private app: Application = express();
	private server = new ApolloServer({
		schema: buildSchemaSync({
			resolvers: [User],
		}),
	});

	constructor() {
		this.middlewares();
		this.setting();
		this.listen();
	}

	private middlewares(): void {
		this.app.use('/public', express.static(__dirname + '/public'));
	}

	private async setting(): Promise<void> {
		this.app.set('port', process.env.APP_PORT || 4894);
		this.app.use(cors({ origin: '*' }));
		await this.server.start();
		this.server.applyMiddleware({ app: this.app });
	}

	private listen(): void {
		this.app.listen(this.app.get('port'), (): void => {
			console.log(
				`Server is running on http://localhost:${this.app.get('port')}${
					this.server.graphqlPath
				} `
			);
		});
	}
}
