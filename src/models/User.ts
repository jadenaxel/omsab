/** @format */

import { prop, getModelForClass } from '@typegoose/typegoose';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class User {
	@Field(() => String)
	@prop({ required: true })
	name: string;

	@Field(() => String)
	@prop({ required: true })
	lastname: string;

	@Field(() => String)
	@prop({ required: true })
	email: string;

	@Field(() => String)
	@prop({ required: true })
	password: string;
}

export default getModelForClass(User);
