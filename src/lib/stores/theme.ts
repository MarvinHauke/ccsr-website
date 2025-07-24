import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'tr909' | 'tr808';

// Theme store
function createThemeStore() {
	// Default to TR-909 (light theme)
	const { subscribe, set, update } = writable<Theme>('tr909');

	// Load theme from localStorage on client
	if (browser) {
		const stored = localStorage.getItem('irregular-theme') as Theme;
		if (stored && (stored === 'tr909' || stored === 'tr808')) {
			set(stored);
		}
	}

	return {
		subscribe,
		setTheme: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('irregular-theme', theme);
				document.documentElement.setAttribute('data-theme', theme === 'tr808' ? 'tr808' : '');
			}
			set(theme);
		},
		toggle: () => {
			update(current => {
				const newTheme = current === 'tr909' ? 'tr808' : 'tr909';
				if (browser) {
					localStorage.setItem('irregular-theme', newTheme);
					document.documentElement.setAttribute('data-theme', newTheme === 'tr808' ? 'tr808' : '');
				}
				return newTheme;
			});
		}
	};
}

export const theme = createThemeStore();
