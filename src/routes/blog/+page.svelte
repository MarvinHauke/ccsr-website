<script lang="ts">
	const blogPosts = [
		{
			title: 'Moog Ladder Filter: Reparatur und Kalibrierung',
			excerpt: 'Detaillierte Anleitung zur Reparatur des klassischen Moog 24dB/Oct Tiefpassfilters. Häufige Probleme und Lösungsansätze.',
			date: '2025-01-15',
			category: 'Synthesizer',
			readTime: '8 min',
			tags: ['Moog', 'Filter', 'Analog'],
			status: 'published',
			slug: 'moog-ladder-filter-repair'
		},
		{
			title: 'Pioneer DJM Series: Crossfader Wartung',
			excerpt: 'Professionelle Wartung und Austausch von Pioneer DJM Crossfadern. Tipps für längere Lebensdauer.',
			date: '2025-01-10',
			category: 'DJ Equipment',
			readTime: '5 min',
			tags: ['Pioneer', 'Mixer', 'Wartung'],
			status: 'published',
			slug: 'pioneer-djm-crossfader-wartung'
		},
		{
			title: 'Roland TR-808: Trigger Circuit Analyse',
			excerpt: 'Troubleshooting der Trigger-Schaltung der legendären TR-808. Timing-Probleme diagnostizieren und beheben.',
			date: '2025-01-05',
			category: 'Drum Machines',
			readTime: '12 min',
			tags: ['Roland', 'TR-808', 'Digital'],
			status: 'published',
			slug: 'roland-tr808-trigger-circuit'
		},
		{
			title: 'Vintage Capacitor Replacement Guide',
			excerpt: 'Welche Kondensatoren in Vintage-Synthesizern ausgetauscht werden sollten und warum. ESR-Messungen und mehr.',
			date: '2024-12-28',
			category: 'Komponenten',
			readTime: '10 min',
			tags: ['Vintage', 'Kondensatoren', 'Wartung'],
			status: 'published',
			slug: 'vintage-capacitor-replacement'
		},
		{
			title: 'Oscillator Drift: Ursachen und Lösungen',
			excerpt: 'Warum driften VCOs und wie man das Problem dauerhaft löst. Temperaturkompensation und Kalibrierung.',
			date: '2024-12-20',
			category: 'Synthesizer',
			readTime: '15 min',
			tags: ['VCO', 'Kalibrierung', 'Analog'],
			status: 'draft',
			slug: 'oscillator-drift-solutions'
		},
		{
			title: 'MIDI Interface Reparatur: Opto-Isolatoren',
			excerpt: 'Häufige MIDI-Probleme durch defekte Opto-Isolatoren. Diagnose und Reparatur von MIDI-Schnittstellen.',
			date: '2024-12-15',
			category: 'Digital',
			readTime: '7 min',
			tags: ['MIDI', 'Digital', 'Interface'],
			status: 'draft',
			slug: 'midi-interface-reparatur'
		}
	];

	const categories = ['Alle', 'Synthesizer', 'DJ Equipment', 'Drum Machines', 'Komponenten', 'Digital'];
	let selectedCategory = $state('Alle');
	
	let filteredPosts = $derived(
		selectedCategory === 'Alle' 
			? blogPosts.filter(post => post.status === 'published')
			: blogPosts.filter(post => post.category === selectedCategory && post.status === 'published')
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
	<title>Technical Blog - Irregular | Synthesizer & DJ Equipment Wissen</title>
	<meta name="description" content="Technische Artikel über Synthesizer-Reparatur, DJ-Equipment Wartung und elektronische Musikgeräte." />
</svelte:head>

<!-- Header -->
<section class="bg-secondary-900 text-white py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-mono font-bold text-primary-400 mb-4">
				Technical Blog
			</h1>
			<div class="code-block max-w-2xl mx-auto">
				<div class="text-green-400 font-mono text-sm">
					// Technisches Wissen über Synthesizer & DJ Equipment
				</div>
				<div class="text-accent-400 font-mono text-xs mt-1">
					Posts: {blogPosts.filter(p => p.status === 'published').length} published | {blogPosts.filter(p => p.status === 'draft').length} in development
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Category Filter -->
<section class="py-8 bg-white border-b border-secondary-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap justify-center gap-4">
			{#each categories as category}
				<button
					onclick={() => selectedCategory = category}
					class="px-4 py-2 rounded-full font-mono text-sm transition-all duration-200
						   {selectedCategory === category 
							 ? 'bg-primary-600 text-white' 
							 : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'}"
				>
					{category}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Blog Posts -->
<section class="py-16 bg-secondary-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredPosts as post}
				<article class="service-card group">
					<a href="/blog/{post.slug}" class="block">
						<div class="flex items-center justify-between mb-4">
							<span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono font-medium">
								{post.category}
							</span>
							<span class="text-secondary-500 text-xs font-mono">
								{post.readTime}
							</span>
						</div>

						<h2 class="text-xl font-mono font-bold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
							{post.title}
						</h2>

						<p class="text-secondary-600 text-sm mb-4 leading-relaxed">
							{post.excerpt}
						</p>

						<div class="flex flex-wrap gap-2 mb-4">
							{#each post.tags as tag}
								<span class="bg-secondary-200 text-secondary-700 px-2 py-1 rounded text-xs font-mono">
									{tag}
								</span>
							{/each}
						</div>

						<div class="flex items-center justify-between text-xs text-secondary-500 font-mono">
							<time datetime={post.date}>
								{formatDate(post.date)}
							</time>
							<span class="text-primary-600 group-hover:text-primary-700">
								Artikel lesen →
							</span>
						</div>
					</a>
				</article>
			{/each}
		</div>

		{#if filteredPosts.length === 0}
			<div class="text-center py-12">
				<div class="text-4xl mb-4">🔧</div>
				<h3 class="text-xl font-mono font-bold text-secondary-900 mb-2">
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
<section class="py-16 bg-primary-700 text-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-mono font-bold mb-4">
			Technical Updates
		</h2>
		<p class="text-blue-100 mb-8 max-w-2xl mx-auto">
			Bleiben Sie auf dem Laufenden über neue Reparatur-Guides, 
			technische Artikel und Equipment-Updates.
		</p>
		
		<div class="bg-white rounded-lg p-6 max-w-md mx-auto">
			<div class="text-secondary-900 font-mono text-sm mb-4">
				// Newsletter Feature - Coming Soon
			</div>
			<div class="text-secondary-600 text-xs">
				Email-Updates über neue technische Artikel und Reparatur-Guides
			</div>
		</div>
	</div>
</section>
