import { register } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	const session = await event.locals.getSession();
	if (!session) {
		throw redirect(307, '/auth');
	} else {
		await register({ name: session?.user?.name, email: session.user?.email });
	}
	return {};
}) satisfies LayoutServerLoad;
