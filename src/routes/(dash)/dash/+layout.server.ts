import { db_get_user } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	const session = await event.locals.getSession();
	if (!session) {
		throw redirect(307, '/auth');
	} else {
		await db_get_user({ name: session?.user?.name, email: session.user?.email });
	}
	return {};
}) satisfies LayoutServerLoad;
