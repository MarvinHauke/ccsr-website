<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { onMount } from 'svelte';

	let mobileMenuOpen = $state(false);

	// Initialize theme on mount
	onMount(() => {
		const currentTheme = $theme;
		if (currentTheme === 'tr808') {
			document.documentElement.setAttribute('data-theme', 'tr808');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	});

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Services', href: '/services' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'About', href: '/about' }
	];

	// Reactive current path
	let currentPath = $derived($page.url.pathname);

	// Close mobile menu when route changes
	$effect(() => {
		currentPath; // track the dependency
		mobileMenuOpen = false;
	});

	// Slot props for children
	let { children } = $props();
</script>

<div class="min-h-screen themed-bg">
	<!-- Navigation -->
	<nav class="border-b themed-surface shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<!-- Logo/Brand -->
				<div class="flex items-center">
					<a href="/" class="flex items-start space-x-4">
						<div class="flex flex-col">
							<div class="font-mono text-3xl font-bold leading-tight flex">
								<span class="logo-i" style="color: var(--accent-color); margin-right: 2px;">I</span>
								<span style="color: var(--accent-color);">rregular</span>
							</div>
							<div
								class="hidden font-mono text-xs opacity-80 lg:block"
								style="color: var(--text-muted); margin-top: -2px; margin-left: 18px;"
							>
								Electronic Music Equipment Service
							</div>
						</div>
					</a>
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden items-center space-x-8 md:flex">
					{#each navigation as item}
						<a
							href={item.href}
							style="color: {currentPath === item.href ? 'var(--accent-color)' : 'var(--text-muted)'}; 
								   border-bottom: {currentPath === item.href ? '2px solid var(--accent-color)' : 'none'};"
							class="px-3 py-2 font-mono text-sm font-medium transition-colors"
							onmouseenter={(e) => e.target.style.color = 'var(--accent-color)'}
							onmouseleave={(e) => e.target.style.color = currentPath === item.href ? 'var(--accent-color)' : 'var(--text-muted)'}
						>
							{item.name}
						</a>
					{/each}
					<ThemeToggle />
				</div>

				<!-- Mobile menu and theme toggle -->
				<div class="flex items-center space-x-3 md:hidden">
					<ThemeToggle />
					<button
						onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
						style="color: var(--text-muted);"
						class="p-2 transition-colors"
						aria-label="Toggle menu"
						onmouseenter={(e) => e.target.style.color = 'var(--accent-color)'}
						onmouseleave={(e) => e.target.style.color = 'var(--text-muted)'}
					>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{#if mobileMenuOpen}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							{:else}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							{/if}
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<div class="border-t py-2 md:hidden" style="border-color: var(--border-color);">
					{#each navigation as item}
						<a
							href={item.href}
							class="block px-4 py-2 transition-colors"
							style="color: {currentPath === item.href ? 'var(--accent-color)' : 'var(--text-muted)'}; 
								   background: {currentPath === item.href ? 'var(--button-bg)' : 'transparent'};"
							onmouseenter={(e) => {
								e.target.style.color = 'var(--accent-color)';
								e.target.style.background = 'var(--button-bg)';
							}}
							onmouseleave={(e) => {
								e.target.style.color = currentPath === item.href ? 'var(--accent-color)' : 'var(--text-muted)';
								e.target.style.background = currentPath === item.href ? 'var(--button-bg)' : 'transparent';
							}}
						>
							{item.name}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</nav>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="mt-12 border-t themed-surface">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="text-center">
				<div class="footer-logo mb-2 font-mono text-xl font-bold" style="color: var(--accent-color);">
					Irregular
				</div>
				<p class="font-mono text-sm" style="color: var(--text-muted);">
					Electronic Music Equipment Service & Development
				</p>
				<p class="mt-2 font-mono text-xs" style="color: var(--text-muted); opacity: 0.7;">
					© 2025 Irregular. Alle Rechte vorbehalten.
				</p>
			</div>
		</div>
	</footer>
</div>
