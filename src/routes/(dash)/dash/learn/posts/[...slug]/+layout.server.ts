import type { LayoutServerLoad } from './$types';
import { db_get_user } from '$lib/server/db';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();
	let user;
	let is_premium_user = false;
	if (session) {
		user = await db_get_user({ name: session?.user?.name, email: session.user?.email });
		if (user?.is_premium_user) is_premium_user = true;
	}
	return { is_premium_user: is_premium_user };
};
