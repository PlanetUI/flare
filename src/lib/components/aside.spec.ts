import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Aside from '$lib/components/aside.svelte';
describe('Aside', () => {
	it('should render', () => {
		render(Aside);
		expect(screen.getByText('Aside')).toBeInTheDocument();
	});
});
