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
<section class="py-16" style="background: linear-gradient(135deg, var(--bg-surface) 0%, var(--button-bg) 100%);">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl main-content">
			<h1 class="text-3xl md:text-4xl font-mono font-bold mb-4" style="color: var(--blog-accent);">
				Technical Blog
			</h1>
			<div class="code-block max-w-2xl">
				<div class="font-mono text-sm" style="color: var(--status-green);">
					// Technisches Wissen über Synthesizer & DJ Equipment
				</div>
				<div class="font-mono text-xs mt-1" style="color: var(--accent-color);">
					Posts: {blogPosts.filter(p => p.status === 'published').length} published | {blogPosts.filter(p => p.status === 'draft').length} in development
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Category Filter -->
<section class="py-8 themed-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="content-align">
			<div class="flex flex-wrap gap-4">
				{#each categories as category}
					<button
						onclick={() => selectedCategory = category}
						class="px-4 py-2 rounded-full font-mono text-sm transition-all duration-200"
						style="background: {selectedCategory === category ? 'var(--accent-color)' : 'var(--button-bg)'};
							   color: {selectedCategory === category ? 'white' : 'var(--text-primary)'};
							   border: 1px solid {selectedCategory === category ? 'var(--accent-color)' : 'var(--border-color)'};"
						onmouseenter={(e) => {
							if (selectedCategory !== category) {
								e.target.style.borderColor = 'var(--accent-color)';
							}
						}}
						onmouseleave={(e) => {
							if (selectedCategory !== category) {
								e.target.style.borderColor = 'var(--border-color)';
							}
						}}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Blog Posts -->
<section class="py-16 themed-bg">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredPosts as post}
				<article class="service-card group">
					<a href="/blog/{post.slug}" class="block">
						<div class="flex items-center justify-between mb-4">
							<span class="px-3 py-1 rounded-full text-xs font-mono font-medium"
								  style="background: var(--button-bg); color: var(--accent-color);">
								{post.category}
							</span>
							<span class="text-xs font-mono" style="color: var(--text-muted);">
								{post.readTime}
							</span>
						</div>

						<h2 class="text-xl font-mono font-bold mb-3 transition-colors group-hover:opacity-80"
							style="color: var(--text-primary);">
							{post.title}
						</h2>

						<p class="text-sm mb-4 leading-relaxed" style="color: var(--text-muted);">
							{post.excerpt}
						</p>

						<div class="flex flex-wrap gap-2 mb-4">
							{#each post.tags as tag}
								<span class="px-2 py-1 rounded text-xs font-mono"
									  style="background: var(--button-bg); color: var(--text-primary);">
									{tag}
								</span>
							{/each}
						</div>

						<div class="flex items-center justify-between text-xs font-mono" style="color: var(--text-muted);">
							<time datetime={post.date}>
								{formatDate(post.date)}
							</time>
							<span class="group-hover:opacity-80 transition-opacity" style="color: var(--accent-color);">
								Artikel lesen →
							</span>
						</div>
					</a>
				</article>
			{/each}
		</div>

		{#if filteredPosts.length === 0}
			<div class="py-12">
				<div class="content-align">
					<div class="text-4xl mb-4">🔧</div>
					<h3 class="text-xl font-mono font-bold mb-2" style="color: var(--text-primary);">
						Keine Artikel in dieser Kategorie
					</h3>
					<p style="color: var(--text-muted);">
						Wählen Sie eine andere Kategorie oder schauen Sie später wieder vorbei.
					</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Newsletter Signup -->
<section class="py-16 text-white" style="background: var(--accent-color);">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="content-align">
			<h2 class="text-3xl font-mono font-bold mb-4">
				Technical Updates
			</h2>
			<p class="mb-8 max-w-2xl opacity-90">
				Bleiben Sie auf dem Laufenden über neue Reparatur-Guides, 
				technische Artikel und Equipment-Updates.
			</p>
			
			<div class="rounded-lg p-6 max-w-md" style="background: white;">
				<div class="font-mono text-sm mb-4" style="color: var(--text-primary);">
					// Newsletter Feature - Coming Soon
				</div>
				<div class="text-xs" style="color: var(--text-muted);">
					Email-Updates über neue technische Artikel und Reparatur-Guides
				</div>
			</div>
		</div>
	</div>
</section>
