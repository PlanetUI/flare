import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { env } from '$env/dynamic/private';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { db_insert_user } from '$lib/server/db';

const authorization: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/dash/')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(307, '/auth');
		}
	}

	const result = await resolve(event);
	return result;
};

export const handle: Handle = sequence(
	SvelteKitAuth({
		secret: env.AUTH_SECRET || 'secret',
		trustHost: true,
		providers: [Google({ clientId: env.GOOGLE_ID || '', clientSecret: env.GOOGLE_SECRET || '' })],
		callbacks: {}
	}),
	authorization
);
