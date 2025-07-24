<script lang="ts">
	// Placeholder data - wird später mit echten Informationen gefüllt
	const stats = [
		{ number: '500+', label: 'Reparierte Geräte' },
		{ number: '15+', label: 'Jahre Erfahrung' },
		{ number: '98%', label: 'Erfolgsrate' }
	];
</script>

<svelte:head>
	<title>About - Irregular | Electronic Music Equipment Service</title>
	<meta
		name="description"
		content="Über Irregular - Professioneller Service für elektronische Musikgeräte in Bielefeld."
	/>
</svelte:head>

<!-- Header -->
<section class="py-16" style="background: linear-gradient(135deg, var(--bg-surface) 0%, var(--button-bg) 100%);">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl">
			<h1 class="mb-4 font-mono text-4xl font-bold md:text-5xl" style="color: var(--accent-color);">
				Über Irregular
			</h1>
			<p class="max-w-3xl text-xl" style="color: var(--text-primary);">
				Leidenschaft für elektronische Musikgeräte trifft auf technische Expertise
			</p>
		</div>
	</div>
</section>

<!-- Main Content -->
<section class="themed-bg py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="prose prose-lg max-w-none">
			<div class="mb-12">
				<div class="service-card">
					<h2 class="font-mono text-2xl font-bold mb-6" style="color: var(--text-primary);">
						Willkommen bei Irregular
					</h2>
					<p class="text-lg leading-relaxed" style="color: var(--text-muted);">
						Irregular ist Ihr spezialisierter Partner für professionelle Services rund um 
						elektronische Musikgeräte. Von präziser Circuit-Level Diagnostik bis zur 
						liebevollen Restauration von Vintage-Synthesizern - wir bringen Ihre Geräte 
						wieder zum Leben.
					</p>
				</div>
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				{#each stats as stat}
					<div class="text-center service-card">
						<div class="font-mono text-3xl font-bold mb-2" style="color: var(--accent-color);">
							{stat.number}
						</div>
						<div style="color: var(--text-muted);">
							{stat.label}
						</div>
					</div>
				{/each}
			</div>

			<!-- Services Overview -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div class="service-card" style="background: var(--button-bg); border-color: var(--accent-color);">
					<h3 class="font-mono text-xl font-semibold mb-4" style="color: var(--text-primary);">
						Unser Service
					</h3>
					<ul class="space-y-2" style="color: var(--text-primary);">
						<li class="flex items-center">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							Circuit Care & Diagnostik
						</li>
						<li class="flex items-center">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							Synthesizer Reparatur & Restauration
						</li>
						<li class="flex items-center">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							DJ Equipment Wartung
						</li>
						<li class="flex items-center">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							Custom Development Projekte
						</li>
					</ul>
				</div>

				<div class="service-card" style="background: var(--button-bg); border-color: var(--accent-color);">
					<h3 class="font-mono text-xl font-semibold mb-4" style="color: var(--text-primary);">
						Standort Bielefeld
					</h3>
					<div class="space-y-2" style="color: var(--text-primary);">
						<p>📍 Babenhauser Straße 170</p>
						<p>📧 service@irregular.de</p>
						<p>🔧 Professionelle Werkstatt-Ausstattung</p>
						<p>⚡ Express-Service verfügbar</p>
					</div>
				</div>
			</div>

			<!-- Coming Soon -->
			<div>
				<div class="service-card" style="background: linear-gradient(45deg, var(--button-bg), var(--bg-surface));">
					<h3 class="font-mono text-xl font-semibold mb-2" style="color: var(--text-primary);">
						Mehr Details folgen bald
					</h3>
					<p style="color: var(--text-muted);">
						Diese Seite wird in Kürze um weitere Informationen erweitert.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-12" style="background: var(--accent-color); color: white;">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-4 font-mono text-2xl font-bold">
			Haben Sie Fragen zu unseren Services?
		</h2>
		<p class="mb-6 opacity-90 max-w-3xl">
			Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem Projekt.
		</p>
		<a
			href="/kontakt"
			class="inline-block rounded-lg px-6 py-3 font-mono font-semibold transition-all duration-200"
			style="background: white; color: var(--accent-color);"
			onmouseenter={(e) => {
				e.target.style.background = 'var(--bg-surface)';
				e.target.style.transform = 'translateY(-2px)';
			}}
			onmouseleave={(e) => {
				e.target.style.background = 'white';
				e.target.style.transform = 'translateY(0)';
			}}
		>
			Jetzt Kontakt aufnehmen
		</a>
	</div>
</section>
