import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {db_get_user} from '$lib/server/db';

export const GET: RequestHandler = async ({locals}) => {
    const session = await locals.getSession();
    if (!session) {
        return json({});
    }
    const user = await db_get_user({ email: session.user?.email });
	return json({
        name: user?.name,
        email: user?.email,
        discord: user?.discord,
        github: user?.github
    });
};
