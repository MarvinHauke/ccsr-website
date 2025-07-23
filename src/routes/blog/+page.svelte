<script lang="ts">
	const blogPosts = [
		{
			title: 'Moog Ladder Filter: Reparatur und Kalibrierung',
			excerpt:
				'Detaillierte Anleitung zur Reparatur des klassischen Moog 24dB/Oct Tiefpassfilters. Häufige Probleme und Lösungsansätze.',
			date: '2025-01-15',
			category: 'Synthesizer',
			readTime: '8 min',
			tags: ['Moog', 'Filter', 'Analog'],
			status: 'published'
		},
		{
			title: 'Pioneer DJM Series: Crossfader Wartung',
			excerpt:
				'Professionelle Wartung und Austausch von Pioneer DJM Crossfadern. Tipps für längere Lebensdauer.',
			date: '2025-01-10',
			category: 'DJ Equipment',
			readTime: '5 min',
			tags: ['Pioneer', 'Mixer', 'Wartung'],
			status: 'published'
		},
		{
			title: 'Roland TR-808: Trigger Circuit Analyse',
			excerpt:
				'Troubleshooting der Trigger-Schaltung der legendären TR-808. Timing-Probleme diagnostizieren und beheben.',
			date: '2025-01-05',
			category: 'Drum Machines',
			readTime: '12 min',
			tags: ['Roland', 'TR-808', 'Digital'],
			status: 'published'
		},
		{
			title: 'Vintage Capacitor Replacement Guide',
			excerpt:
				'Welche Kondensatoren in Vintage-Synthesizern ausgetauscht werden sollten und warum. ESR-Messungen und mehr.',
			date: '2024-12-28',
			category: 'Komponenten',
			readTime: '10 min',
			tags: ['Vintage', 'Kondensatoren', 'Wartung'],
			status: 'published'
		},
		{
			title: 'Oscillator Drift: Ursachen und Lösungen',
			excerpt:
				'Warum driften VCOs und wie man das Problem dauerhaft löst. Temperaturkompensation und Kalibrierung.',
			date: '2024-12-20',
			category: 'Synthesizer',
			readTime: '15 min',
			tags: ['VCO', 'Kalibrierung', 'Analog'],
			status: 'draft'
		},
		{
			title: 'MIDI Interface Reparatur: Opto-Isolatoren',
			excerpt:
				'Häufige MIDI-Probleme durch defekte Opto-Isolatoren. Diagnose und Reparatur von MIDI-Schnittstellen.',
			date: '2024-12-15',
			category: 'Digital',
			readTime: '7 min',
			tags: ['MIDI', 'Digital', 'Interface'],
			status: 'draft'
		}
	];

	const categories = [
		'Alle',
		'Synthesizer',
		'DJ Equipment',
		'Drum Machines',
		'Komponenten',
		'Digital'
	];
	let selectedCategory = $state('Alle');

	let filteredPosts = $derived(
		selectedCategory === 'Alle'
			? blogPosts.filter((post) => post.status === 'published')
			: blogPosts.filter(
					(post) => post.category === selectedCategory && post.status === 'published'
				)
	);

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('de-DE', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Technical Blog - Circuit Care & Synth Repair | Synthesizer & DJ Equipment Wissen</title>
	<meta
		name="description"
		content="Technische Artikel über Synthesizer-Reparatur, DJ-Equipment Wartung und elektronische Musikgeräte."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-secondary-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-4 font-mono text-4xl font-bold md:text-5xl">Technical Blog</h1>
			<div class="code-block mx-auto max-w-2xl">
				<div class="font-mono text-sm text-green-400">
					// Technisches Wissen über Synthesizer & DJ Equipment
				</div>
				<div class="mt-1 font-mono text-xs text-accent-400">
					Posts: {blogPosts.filter((p) => p.status === 'published').length} published | {blogPosts.filter(
						(p) => p.status === 'draft'
					).length} in development
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Category Filter -->
<section class="border-secondary-200 border-b bg-white py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap justify-center gap-4">
			{#each categories as category}
				<button
					onclick={() => (selectedCategory = category)}
					class="rounded-full px-4 py-2 font-mono text-sm transition-all duration-200
                 {selectedCategory === category
						? 'bg-primary-600 text-white'
						: 'hover:bg-secondary-200 bg-secondary-100 text-secondary-700'}"
				>
					{category}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Blog Posts -->
<section class="bg-secondary-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post}
				<article class="service-card group cursor-pointer">
					<div class="mb-4 flex items-center justify-between">
						<span
							class="bg-primary-100 rounded-full px-3 py-1 font-mono text-xs font-medium text-primary-700"
						>
							{post.category}
						</span>
						<span class="font-mono text-xs text-secondary-500">
							{post.readTime}
						</span>
					</div>

					<h2
						class="mb-3 font-mono text-xl font-bold text-secondary-900 transition-colors group-hover:text-primary-700"
					>
						{post.title}
					</h2>

					<p class="mb-4 text-sm leading-relaxed text-secondary-600">
						{post.excerpt}
					</p>

					<div class="mb-4 flex flex-wrap gap-2">
						{#each post.tags as tag}
							<span class="bg-secondary-200 rounded px-2 py-1 font-mono text-xs text-secondary-700">
								{tag}
							</span>
						{/each}
					</div>

					<div class="flex items-center justify-between font-mono text-xs text-secondary-500">
						<time datetime={post.date}>
							{formatDate(post.date)}
						</time>
						<span class="text-primary-600 group-hover:text-primary-700"> Artikel lesen → </span>
					</div>
				</article>
			{/each}
		</div>

		{#if filteredPosts.length === 0}
			<div class="py-12 text-center">
				<div class="mb-4 text-4xl">🔧</div>
				<h3 class="mb-2 font-mono text-xl font-bold text-secondary-900">
					Keine Artikel in dieser Kategorie
				</h3>
				<p class="text-secondary-600">
					Wählen Sie eine andere Kategorie oder schauen Sie später wieder vorbei.
				</p>
			</div>
		{/if}
	</div>
</section>

<!-- Newsletter Signup -->
<section class="bg-primary-700 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-mono text-3xl font-bold">Technical Updates</h2>
		<p class="mx-auto mb-8 max-w-2xl text-blue-100">
			Bleiben Sie auf dem Laufenden über neue Reparatur-Guides, technische Artikel und
			Equipment-Updates.
		</p>

		<div class="mx-auto max-w-md rounded-lg bg-white p-6">
			<div class="mb-4 font-mono text-sm text-secondary-900">
				// Newsletter Feature - Coming Soon
			</div>
			<div class="text-xs text-secondary-600">
				Email-Updates über neue technische Artikel und Reparatur-Guides
			</div>
		</div>
	</div>
</section>
