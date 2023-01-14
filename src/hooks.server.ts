import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { GOOGLE_ID, GOOGLE_SECRET, SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect, type Handle } from '@sveltejs/kit';

const authorization: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/dash')) {
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
		secret: SECRET,
		providers: [Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })]
	}),
	authorization
);
