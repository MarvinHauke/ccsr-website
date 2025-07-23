<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

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

<div class="min-h-screen bg-gray-50">
	<!-- Navigation -->
	<nav class="border-b border-gray-200 bg-white shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<!-- Logo/Brand -->
				<div class="flex items-center">
					<a href="/" class="flex items-center space-x-3">
						<div class="font-mono text-xl font-bold text-primary-700">
							Circuit Care & Synth Repair
						</div>
						<div
							class="hidden rounded bg-secondary-100 px-2 py-1 font-mono text-xs text-secondary-600 lg:block"
						>
							CCSR
						</div>
					</a>
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden items-center space-x-8 md:flex">
					{#each navigation as item}
						<a
							href={item.href}
							class="px-3 py-2 font-mono text-sm font-medium text-secondary-600 transition-colors hover:text-primary-700
                     {currentPath === item.href
								? 'border-b-2 border-primary-700 text-primary-700'
								: ''}"
						>
							{item.name}
						</a>
					{/each}
				</div>

				<!-- Mobile menu button -->
				<div class="flex items-center md:hidden">
					<button
						onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
						class="p-2 text-secondary-600 hover:text-primary-700"
						aria-label="Toggle menu"
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
				<div class="border-t border-gray-200 py-2 md:hidden">
					{#each navigation as item}
						<a
							href={item.href}
							class="block px-4 py-2 text-secondary-600 transition-colors hover:bg-gray-50 hover:text-primary-700
                     {currentPath === item.href ? 'bg-primary-50 text-primary-700' : ''}"
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
	<footer class="mt-12 border-t border-gray-200 bg-white">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="text-center">
				<div class="mb-2 font-mono text-lg font-bold text-primary-700">
					Circuit Care & Synth Repair
				</div>
				<p class="font-mono text-sm text-secondary-600">
					Professionelle Synthesizer & DJ Equipment Reparaturen
				</p>
				<p class="mt-2 font-mono text-xs text-secondary-500">
					© 2025 Circuit Care & Synth Repair. Alle Rechte vorbehalten.
				</p>
			</div>
		</div>
	</footer>
</div>
