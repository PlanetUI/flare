import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${''}`);
	throw redirect(307, '/');
};
