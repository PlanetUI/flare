import { db_get_user } from '$lib/server/db';
import { slugFromPath } from '$lib/slugFromPath';
import type { PageServerLoad } from './$types';

const MAX_POSTS = 10;

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	let user;
	let is_premium = false;
	if (session) {
		user = await db_get_user({ name: session?.user?.name, email: session.user?.email });
		user?.is_premium_user ? (is_premium = true) : (is_premium = false);
	}
	let publishedPosts: App.BlogPost[] = [];

	if (is_premium) {
		const modules = import.meta.glob(`/src/posts/**/*.{md,svx,svelte.md}`);

		const postPromises = Object.entries(modules).map(([path, resolver]) =>
			resolver().then(
				(post) =>
					({
						slug: slugFromPath(path),
						...(post as unknown as App.MdsvexFile).metadata
					} as App.BlogPost)
			)
		);

		const posts = await Promise.all(postPromises);
		publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

		publishedPosts.sort((a, b) => (new Date(a.published_at) > new Date(b.published_at) ? -1 : 1));
	}

	return { posts: publishedPosts };
};
