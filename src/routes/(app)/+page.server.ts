import type { PageServerLoad } from './$types';
import { db_count_premium_users, db_count_users } from '$lib/server/db';

export const load: PageServerLoad = async (event) => {
	return {
		users: await db_count_users(),
		premium_users: await db_count_premium_users()
	};
};
