<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - Irregular Blog</title>
	<meta name="description" content={data.meta.excerpt} />
</svelte:head>

<div class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<header class="mb-12">
			<div class="mb-4">
				<a href="/blog" class="text-primary-600 hover:text-primary-700 font-mono text-sm">
					← Zurück zum Blog
				</a>
			</div>
			
			<div class="flex flex-wrap items-center gap-2 mb-4">
				<span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono font-medium">
					{data.meta.category}
				</span>
				<time class="text-secondary-500 text-sm font-mono">
					{new Date(data.meta.date).toLocaleDateString('de-DE')}
				</time>
			</div>
			
			<h1 class="text-4xl font-mono font-bold text-secondary-900 mb-4">
				{data.meta.title}
			</h1>
			
			<p class="text-xl text-secondary-600 leading-relaxed">
				{data.meta.excerpt}
			</p>
			
			{#if data.meta.tags}
				<div class="flex flex-wrap gap-2 mt-6">
					{#each data.meta.tags as tag}
						<span class="bg-secondary-200 text-secondary-700 px-2 py-1 rounded text-xs font-mono">
							{tag}
						</span>
					{/each}
				</div>
			{/if}
		</header>

		<!-- Content -->
		<article class="prose prose-lg max-w-none">
			<svelte:component this={data.content} />
		</article>
		
		<!-- Footer -->
		<footer class="mt-12 pt-8 border-t border-secondary-200">
			<div class="flex justify-between items-center">
				<a href="/blog" class="text-primary-600 hover:text-primary-700 font-mono text-sm">
					← Alle Blog-Posts
				</a>
				<a href="/kontakt" class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors">
					Fragen zum Artikel?
				</a>
			</div>
		</footer>
	</div>
</div>
