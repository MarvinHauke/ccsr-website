<script lang="ts">
	const services = [
		{
			category: 'Circuit Repair',
			icon: '🔧',
			description: 'Professional circuit-level diagnostics and component repairs',
			services: [
				{
					name: 'PCB Diagnosis & Repair',
					price: 'Ab 89€',
					details: 'Vollständige Platinen-Analyse, Komponenten-Test, Trace-Reparaturen'
				},
				{
					name: 'Power Supply Service',
					price: 'Ab 65€',
					details: 'Netzteil-Diagnose, Kondensator-Tausch, Spannungsregulierung'
				},
				{
					name: 'Digital Circuit Analysis',
					price: 'Ab 120€',
					details: 'Mikrocontroller-Programmierung, EPROM-Service, Logic-Board Repair'
				}
			]
		},
		{
			category: 'Synthesizer Service',
			icon: '🎹',
			description: 'Spezialisiert auf Vintage und moderne Synthesizer',
			services: [
				{
					name: 'Oscillator Calibration',
					price: 'Ab 95€',
					details: 'Präzise VCO-Justierung, Tracking-Optimierung, Temperatur-Kompensation'
				},
				{
					name: 'Filter Alignment',
					price: 'Ab 85€',
					details: 'Cutoff/Resonance Kalibrierung, Envelope-Response, CV-Scaling'
				},
				{
					name: 'Vintage Restoration',
					price: 'Auf Anfrage',
					details: 'Komplette Überholung klassischer Synthesizer (Moog, ARP, Sequential)'
				}
			]
		},
		{
			category: 'DJ Equipment',
			icon: '🎧',
			description: 'Professionelle DJ-Equipment Wartung und Reparatur',
			services: [
				{
					name: 'Mixer Repair',
					price: 'Ab 75€',
					details: 'Crossfader-Tausch, Channel-Reparatur, EQ-Sektion Service'
				},
				{
					name: 'Controller Service',
					price: 'Ab 59€',
					details: 'Encoder-Reparatur, Button-Tausch, USB/MIDI Troubleshooting'
				},
				{
					name: 'Turntable Maintenance',
					price: 'Ab 89€',
					details: 'Motor-Service, Tonarm-Justierung, Pitch-Kalibrierung'
				}
			]
		}
	];

	const processSteps = [
		{
			step: '01',
			title: 'Diagnose',
			description: 'Detaillierte Fehleranalyse und Kostenvoranschlag'
		},
		{
			step: '02',
			title: 'Reparatur',
			description: 'Professionelle Instandsetzung mit Original-Komponenten'
		},
		{
			step: '03',
			title: 'Test',
			description: 'Umfassende Funktionsprüfung und Qualitätskontrolle'
		},
		{
			step: '04',
			title: 'Dokumentation',
			description: 'Detaillierter Reparatur-Report und Wartungsempfehlungen'
		}
	];
</script>

<svelte:head>
	<title>Services - Circuit Care & Synth Repair | Professionelle Reparatur-Services</title>
	<meta
		name="description"
		content="Detaillierte Übersicht unserer Reparatur-Services für Synthesizer, DJ-Equipment und elektronische Musikgeräte."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-secondary-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-4 font-mono text-4xl font-bold md:text-5xl">
				Technical Services
			</h1>
			<p class="mx-auto max-w-3xl text-xl text-gray-300">
				Professionelle Reparatur-Services für elektronische Musikgeräte mit circuit-level Präzision
			</p>
		</div>
	</div>
</section>

<!-- Service Categories -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#each services as category, index}
			<div class="mb-16 {index > 0 ? 'border-secondary-200 border-t pt-16' : ''}">
				<div class="mb-12 text-center">
					<div class="mb-4 text-5xl">{category.icon}</div>
					<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">
						{category.category}
					</h2>
					<p class="mx-auto max-w-2xl text-lg text-secondary-600">
						{category.description}
					</p>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
					{#each category.services as service}
						<div class="service-card">
							<div class="mb-4 flex items-start justify-between">
								<h3 class="font-mono text-xl font-semibold text-secondary-900">
									{service.name}
								</h3>
								<span
									class="bg-primary-100 rounded-full px-3 py-1 font-mono text-sm font-medium text-primary-700"
								>
									{service.price}
								</span>
							</div>
							<p class="text-sm leading-relaxed text-secondary-600">
								{service.details}
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Process -->
<section class="bg-secondary-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">Repair Process</h2>
			<p class="text-lg text-secondary-600">
				Unser standardisierter 4-Stufen Reparaturprozess für maximale Qualität
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as process}
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white"
					>
						<span class="font-mono text-lg font-bold">{process.step}</span>
					</div>
					<h3 class="mb-2 font-mono text-xl font-semibold text-secondary-900">
						{process.title}
					</h3>
					<p class="text-sm text-secondary-600">
						{process.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Warranty & Guarantees -->
<section class="bg-primary-700 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-8 font-mono text-3xl font-bold">Service Garantie</h2>

		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<div class="mb-2 font-mono text-3xl font-bold text-blue-200">12</div>
				<div class="font-mono text-sm">Monate Garantie</div>
			</div>
			<div>
				<div class="mb-2 font-mono text-3xl font-bold text-blue-200">48h</div>
				<div class="font-mono text-sm">Express Service</div>
			</div>
			<div>
				<div class="mb-2 font-mono text-3xl font-bold text-blue-200">100%</div>
				<div class="font-mono text-sm">Original Parts</div>
			</div>
		</div>

		<p class="mx-auto mb-8 max-w-2xl text-blue-100">
			Alle Reparaturen kommen mit 12 Monaten Garantie. Express-Service verfügbar. Wir verwenden
			ausschließlich Original-Komponenten oder hochwertige Äquivalente.
		</p>

		<a
			href="/kontakt"
			class="inline-block rounded-lg bg-white px-8 py-4 font-mono font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:bg-secondary-100"
		>
			Service Anfrage Stellen
		</a>
	</div>
</section>
