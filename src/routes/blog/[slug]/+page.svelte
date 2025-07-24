<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - Irregular Blog</title>
	<meta name="description" content={data.meta.excerpt} />
</svelte:head>

<div class="themed-bg py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<header class="mb-12 main-content">
			<div class="mb-4">
				<a href="/blog" class="font-mono text-sm transition-colors" style="color: var(--blog-accent);">
					← Zurück zum Blog
				</a>
			</div>
			
			<div class="flex flex-wrap items-center gap-2 mb-4">
				<span class="px-3 py-1 rounded-full text-xs font-mono font-medium"
					  style="background: var(--blog-accent); color: white;">
					{data.meta.category}
				</span>
				<time class="text-sm font-mono" style="color: var(--text-muted);">
					{new Date(data.meta.date).toLocaleDateString('de-DE')}
				</time>
			</div>
			
			<h1 class="text-4xl font-mono font-bold mb-4" style="color: var(--text-primary);">
				{data.meta.title}
			</h1>
			
			<p class="text-xl leading-relaxed" style="color: var(--text-muted);">
				{data.meta.excerpt}
			</p>
			
			{#if data.meta.tags}
				<div class="flex flex-wrap gap-2 mt-6">
					{#each data.meta.tags as tag}
						<span class="px-2 py-1 rounded text-xs font-mono"
							  style="background: var(--blog-highlight); color: var(--bg-primary);">
							{tag}
						</span>
					{/each}
				</div>
			{/if}
		</header>

		<!-- Content -->
		<article class="prose prose-lg max-w-none main-content">
			<svelte:component this={data.content} />
		</article>
		
		<!-- Footer -->
		<footer class="mt-12 pt-8 border-t main-content" style="border-color: var(--border-color);">
			<div class="flex justify-between items-center">
				<a href="/blog" class="font-mono text-sm transition-colors" style="color: var(--blog-accent);">
					← Alle Blog-Posts
				</a>
				<a href="/kontakt" class="px-4 py-2 rounded font-mono text-sm transition-colors"
				   style="background: var(--blog-accent); color: white;">
					Fragen zum Artikel?
				</a>
			</div>
		</footer>
	</div>
</div>
