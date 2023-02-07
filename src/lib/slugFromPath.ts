export const slugFromPath = (path: string) => {
	const match = path.match(/([\w-]+)\/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
	if (match === 'posts') {
		return path.match(/([\w-]+)\/([\w-]+)\.(svelte\.md|md|svx)/i)?.[2];
	} else {
		const path_name = path.match(/([\w-]+)\/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1];
		const file_name = path.match(/([\w-]+)\/([\w-]+)\.(svelte\.md|md|svx)/i)?.[2];
		return `${path_name}/${file_name}`;
	}
};
