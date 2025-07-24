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
<section class="bg-secondary-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-4 font-mono text-4xl font-bold md:text-5xl">
				Über Irregular
			</h1>
			<p class="mx-auto max-w-3xl text-xl text-gray-300">
				Leidenschaft für elektronische Musikgeräte trifft auf technische Expertise
			</p>
		</div>
	</div>
</section>

<!-- Main Content -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="prose prose-lg max-w-none">
			<div class="text-center mb-12">
				<div class="service-card bg-secondary-50">
					<h2 class="font-mono text-2xl font-bold text-secondary-900 mb-6">
						Willkommen bei Irregular
					</h2>
					<p class="text-lg text-secondary-700 leading-relaxed">
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
						<div class="font-mono text-3xl font-bold text-primary-700 mb-2">
							{stat.number}
						</div>
						<div class="text-secondary-600">
							{stat.label}
						</div>
					</div>
				{/each}
			</div>

			<!-- Services Overview -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div class="service-card bg-primary-50 border-primary-200">
					<h3 class="font-mono text-xl font-semibold text-primary-900 mb-4">
						Unser Service
					</h3>
					<ul class="space-y-2 text-primary-800">
						<li class="flex items-center">
							<span class="mr-2 font-mono text-primary-600">></span>
							Circuit Care & Diagnostik
						</li>
						<li class="flex items-center">
							<span class="mr-2 font-mono text-primary-600">></span>
							Synthesizer Reparatur & Restauration
						</li>
						<li class="flex items-center">
							<span class="mr-2 font-mono text-primary-600">></span>
							DJ Equipment Wartung
						</li>
						<li class="flex items-center">
							<span class="mr-2 font-mono text-primary-600">></span>
							Custom Development Projekte
						</li>
					</ul>
				</div>

				<div class="service-card bg-accent-50 border-accent-200">
					<h3 class="font-mono text-xl font-semibold text-accent-900 mb-4">
						Standort Bielefeld
					</h3>
					<div class="text-accent-800 space-y-2">
						<p>📍 Babenhauser Straße 170</p>
						<p>📧 service@irregular.de</p>
						<p>🔧 Professionelle Werkstatt-Ausstattung</p>
						<p>⚡ Express-Service verfügbar</p>
					</div>
				</div>
			</div>

			<!-- Coming Soon -->
			<div class="text-center">
				<div class="service-card bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
					<h3 class="font-mono text-xl font-semibold text-secondary-900 mb-2">
						Mehr Details folgen bald
					</h3>
					<p class="text-secondary-600">
						Diese Seite wird in Kürze um weitere Informationen erweitert.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-primary-700 py-12 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-mono text-2xl font-bold">
			Haben Sie Fragen zu unseren Services?
		</h2>
		<p class="mb-6 text-blue-100">
			Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem Projekt.
		</p>
		<a
			href="/kontakt"
			class="inline-block rounded-lg bg-white px-6 py-3 font-mono font-semibold text-primary-700 transition-all duration-200 hover:bg-secondary-100"
		>
			Jetzt Kontakt aufnehmen
		</a>
	</div>
</section>
