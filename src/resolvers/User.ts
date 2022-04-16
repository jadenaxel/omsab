/** @format */

import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import { resolve } from 'path';

import { User, Usuario } from '../models';

@Resolver()
class UserResolver {
	@Query(() => [User])
	async getUser() {
		return await Usuario.find();
	}

	@Query(() => User)
	async getUserById(@Arg('id') id: string) {
		return await Usuario.findById(id);
	}

	@Mutation(() => User)
	async addUser(
		@Arg('name') name: string,
		@Arg('lastname') lastname: string,
		@Arg('email') email: string,
		@Arg('password') password: string
	) {
		const user = new Usuario();
		user.name = name;
		user.lastname = lastname;
		user.email = email;
		user.password = password;
		user.profile = '/public/default.jpg';
		return await user.save();
	}
}

export default UserResolver;
