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
<section class="tech-pattern themed-surface" style="background: linear-gradient(135deg, var(--bg-surface) 0%, var(--button-bg) 100%);">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
		<div class="max-w-4xl main-content">
			<h1 class="mb-4 font-mono text-3xl font-bold md:text-4xl" style="color: var(--blog-accent);">
				Elektronische Musikgeräte Service & Entwicklung
			</h1>
			<p class="mb-8 max-w-3xl text-lg" style="color: var(--text-muted);">
				Professionelle Reparatur-Services, Custom Instrument Development und innovative 
				Musiktechnologie-Lösungen. Von Circuit-Level Diagnostik bis zu hochmodernen elektronischen Instrumenten.
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a href="/kontakt" class="tech-button"> Service Anfragen </a>
				<a
					href="/services"
					class="rounded-lg border px-6 py-3 font-mono font-medium transition-all duration-200"
					style="color: var(--accent-color); border-color: var(--accent-color);"
					onmouseenter={(e) => {
						e.target.style.background = 'var(--accent-color)';
						e.target.style.color = 'white';
					}}
					onmouseleave={(e) => {
						e.target.style.background = 'transparent';
						e.target.style.color = 'var(--accent-color)';
					}}
				>
					Services Ansehen
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="themed-bg py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 content-align">
			<h2 class="mb-4 font-mono text-3xl font-bold" style="color: var(--text-primary);">Services & Entwicklung</h2>
			<p class="max-w-2xl text-lg" style="color: var(--text-muted);">
				Professionelle Reparatur-Services und Custom Instrument Development für die Electronic Music Community.
			</p>
		</div>

		<div class="tech-grid">
			{#each services as service}
				<div class="service-card">
					<div class="mb-4 text-4xl">{service.icon}</div>
					<h3 class="mb-3 font-mono text-xl font-semibold" style="color: var(--text-primary);">
						{service.title}
					</h3>
					<p class="mb-4" style="color: var(--text-muted);">
						{service.description}
					</p>
					<ul class="space-y-2">
						{#each service.features as feature}
							<li class="flex items-center text-sm" style="color: var(--text-primary);">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
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
<section class="themed-surface py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 content-align">
			<h2 class="mb-4 font-mono text-3xl font-bold" style="color: var(--text-primary);">Aktuelle Projekte</h2>
			<p class="text-lg" style="color: var(--text-muted);">
				Echtzeit-Übersicht der Reparatur-Warteschlange und Entwicklungsprojekte.
			</p>
		</div>

		<div class="rounded-lg p-6 shadow-lg" style="background: var(--button-bg);">
			<div class="code-block mb-6">
				<div class="mb-2 font-mono text-xs" style="color: var(--status-green);">
					// Irregular Projekt-Warteschlange - Letztes Update: {new Date().toLocaleString('de-DE')}
				</div>
				<div class="font-mono text-xs" style="color: var(--accent-color);">
					SERVICE STATUS: ONLINE | System Status: OPERATIV | Aktive Projekte: {currentProjects} items
				</div>
			</div>

			<div class="space-y-4">
				{#each recentWork as work}
					<div
						class="themed-surface flex items-center justify-between rounded border p-4"
					>
						<div class="flex-1">
							<div class="font-mono font-medium" style="color: var(--text-primary);">
								{work.device}
							</div>
							<div class="text-sm" style="color: var(--text-muted);">
								Problem: {work.issue}
							</div>
						</div>
						<div class="ml-4">
							<span
								class="rounded-full px-3 py-1 font-mono text-xs text-white
								{work.status === 'Abgeschlossen'
									? 'status-online'
									: work.status === 'In Bearbeitung'
									? 'status-busy'
									: ''}"
								style="{work.status === 'Diagnostiziert' ? `background: var(--accent-color);` : ''}"
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
<section class="py-16" style="background: var(--accent-color); color: white;">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="content-align">
			<h2 class="mb-4 font-mono text-3xl font-bold">Benötigen Sie professionellen Service?</h2>
			<p class="mb-8 text-xl opacity-90 max-w-3xl">
				Professionelle Diagnostik und Reparatur-Services für alle elektronischen Musikgeräte. 
				Custom Instrument Development und innovative Musiktechnologie-Lösungen.
			</p>
			<a
				href="/kontakt"
				class="inline-block rounded-lg px-8 py-4 font-mono font-semibold shadow-lg transition-all duration-200"
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
	</div>
</section>
