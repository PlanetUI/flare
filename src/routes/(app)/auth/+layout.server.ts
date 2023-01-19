import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
	const session = await event.locals.getSession();
	if (session) {
		throw redirect(307, '/dash');
	}
	return {};
}) satisfies LayoutServerLoad;
