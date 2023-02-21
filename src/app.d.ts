// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user: {
			name?: string;
			email: string;
			image?: string;
			discord?: string;
			github?: string;
		}
	}
	// interface PageData {}
	// interface Platform {}

	interface MdsvexFile {
		default: import('svelte/internal').SvelteComponent;
		metadata: Record<string, string>;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface BlogPost {
		slug: string;
		title: string;
		thumbnail: string;
		author: string;
		description: string;
		published: boolean;
		published_at: string;
		updated_at: string;
		is_premium: boolean;
	}
}
