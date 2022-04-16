/** @format */

import { prop, getModelForClass } from '@typegoose/typegoose';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class User {
	@Field()
	_id: string;

	@Field(() => String)
	@prop({ required: true })
	name: string;

	@Field(() => String)
	@prop({ required: true })
	lastname: string;

	@Field(() => String)
	@prop({ unique: true, required: true })
	email: string;

	@Field(() => String)
	@prop({ required: true })
	password: string;

	@Field(() => String)
	@prop({ required: true })
	profile: string;

	@Field(() => String)
	@prop({ type: String, default: '' })
	province: string;

	@Field(() => String)
	@prop({ type: String, default: '' })
	city: string;
}

export default getModelForClass(User);
