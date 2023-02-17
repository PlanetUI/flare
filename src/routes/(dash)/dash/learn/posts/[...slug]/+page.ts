import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/posts/**/*.{md,svx,svelte.md}`);
	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			const post = await match.resolver?.();
			if (!post || !post.metadata.published) {
				throw error(404);
			}
			return {
				component: post.default,
				frontmatter: post.metadata
			};
		}
	}
};
