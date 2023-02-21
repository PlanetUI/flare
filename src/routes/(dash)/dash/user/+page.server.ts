import type { PageServerLoad, Actions } from './$types';
import { db_get_user, db_update_user } from '$lib/server/db';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	let user;
	if (session) {
		user = await db_get_user({ name: session?.user?.name, email: session.user?.email });
		return {
			user: {
				name: user?.name,
				email: user?.email,
				discord: user?.discord,
				github: user?.github,
				is_premium_user: user?.is_premium_user
			}
		};
	}
};

export const actions: Actions = {
	update: async ({ request, locals }) => {
		const session = await locals.getSession();
		const form = await request.formData();
		const name = form.get('name');
		const email = session?.user?.email;
		const discord = form.get('discord');
		const github = form.get('github');
		await db_update_user({ email: email, name: name, discord: discord, github: github });
		return {
			status: 200
		};
	}
};
