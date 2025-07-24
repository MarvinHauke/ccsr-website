<script lang="ts">
	// Service status simulation
	let serviceStatus = $state('online');
	let currentProjects = $state(12);
	let completedRepairs = $state(247);

	const services = [
		{
			title: 'Circuit Repair',
			description:
				'Professionelle PCB-Diagnostik und Komponenten-Reparaturen für alle elektronischen Musikgeräte.',
			features: [
				'Komponenten-Tests',
				'PCB Leiterbahn-Reparatur',
				'Netzteil-Diagnose',
				'Digitale Schaltkreis-Analyse'
			],
			icon: '🔧'
		},
		{
			title: 'Synthesizer Service',
			description:
				'Vintage und moderne Synthesizer-Restauration, Kalibrierung und Performance-Optimierung.',
			features: [
				'Oszillator-Kalibrierung',
				'Filter-Justierung',
				'Hüllkurven-Abstimmung',
				'Vintage-Restauration'
			],
			icon: '🎹'
		},
		{
			title: 'DJ Equipment',
			description:
				'Mixer-, Controller- und Turntable-Reparaturen mit Fokus auf professionelle Zuverlässigkeit.',
			features: [
				'Crossfader-Reparatur',
				'Kanal-Diagnostik',
				'USB/MIDI Fehlerbehebung',
				'Motor-Service'
			],
			icon: '🎧'
		}
	];

	const recentWork = [
		{ device: 'Moog Subsequent 37', issue: 'Oszillator-Drift', status: 'Abgeschlossen' },
		{ device: 'Pioneer DJM-900', issue: 'Kanal 3 Fehler', status: 'In Bearbeitung' },
		{ device: 'Roland TR-808', issue: 'Trigger-Timing', status: 'Diagnostiziert' },
		{ device: 'Behringer BCR2000', issue: 'Encoder-Austausch', status: 'Abgeschlossen' }
	];
</script>

<svelte:head>
	<title>Irregular | Professioneller Service für elektronische Musikgeräte & Entwicklung</title>
	<meta
		name="description"
		content="Professioneller Service für elektronische Musikgeräte, Custom Instrument Development und innovative Musiktechnologie-Lösungen."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="tech-pattern bg-secondary-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-6 font-mono text-4xl font-bold md:text-6xl">
				Irregular
			</h1>
			<p class="mb-4 font-mono text-lg text-gray-300 md:text-xl">
				Elektronische Musikgeräte Service & Entwicklung
			</p>
			<p class="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
				Professionelle Reparatur-Services, Custom Instrument Development und innovative 
				Musiktechnologie-Lösungen. Von Circuit-Level Diagnostik bis zu hochmodernen elektronischen Instrumenten.
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a href="/kontakt" class="tech-button"> Service Anfragen </a>
				<a
					href="/services"
					class="text-primary-400 rounded-lg border border-primary-600 px-6 py-3 font-mono font-medium transition-all duration-200 hover:bg-primary-600 hover:text-white"
				>
					Services Ansehen
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="bg-secondary-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">Services & Entwicklung</h2>
			<p class="mx-auto max-w-2xl text-lg text-secondary-600">
				Professionelle Reparatur-Services und Custom Instrument Development für die Electronic Music Community.
			</p>
		</div>

		<div class="tech-grid">
			{#each services as service}
				<div class="service-card">
					<div class="mb-4 text-4xl">{service.icon}</div>
					<h3 class="mb-3 font-mono text-xl font-semibold text-secondary-900">
						{service.title}
					</h3>
					<p class="mb-4 text-secondary-600">
						{service.description}
					</p>
					<ul class="space-y-2">
						{#each service.features as feature}
							<li class="flex items-center text-sm text-secondary-700">
								<span class="mr-2 font-mono text-primary-600">></span>
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Recent Work Section -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">Aktuelle Projekte</h2>
			<p class="text-lg text-secondary-600">
				Echtzeit-Übersicht der Reparatur-Warteschlange und Entwicklungsprojekte.
			</p>
		</div>

		<div class="rounded-lg bg-secondary-50 p-6 shadow-lg">
			<div class="code-block mb-6">
				<div class="mb-2 font-mono text-xs text-green-400">
					// Irregular Projekt-Warteschlange - Letztes Update: {new Date().toLocaleString('de-DE')}
				</div>
				<div class="font-mono text-xs text-accent-400">
					SERVICE STATUS: ONLINE | System Status: OPERATIV | Aktive Projekte: {currentProjects} items
				</div>
			</div>

			<div class="space-y-4">
				{#each recentWork as work}
					<div
					class="border-secondary-200 flex items-center justify-between rounded border bg-white p-4"
					>
					<div class="flex-1">
					<div class="font-mono font-medium text-secondary-900">
					{work.device}
					</div>
					<div class="text-sm text-secondary-600">
					Problem: {work.issue}
					</div>
					</div>
					<div class="ml-4">
					<span
					class="rounded-full px-3 py-1 font-mono text-xs
					{work.status === 'Abgeschlossen'
					? 'bg-success-500 text-white'
					: work.status === 'In Bearbeitung'
					? 'bg-warning-500 text-white'
					: 'bg-primary-500 text-white'}"
					>
					{work.status}
					</span>
					</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-primary-700 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-mono text-3xl font-bold">Benötigen Sie professionellen Service?</h2>
		<p class="mb-8 text-xl text-blue-100">
			Professionelle Diagnostik und Reparatur-Services für alle elektronischen Musikgeräte. 
			Custom Instrument Development und innovative Musiktechnologie-Lösungen.
		</p>
		<a
			href="/kontakt"
			class="inline-block rounded-lg bg-white px-8 py-4 font-mono font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:bg-secondary-100"
		>
			Jetzt Kontakt aufnehmen
		</a>
	</div>
</section>
