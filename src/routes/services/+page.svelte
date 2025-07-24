<script lang="ts">
	const djServices = [
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
	<title>Services - Irregular | Electronic Music Equipment Service & Development</title>
	<meta
		name="description"
		content="Professionelle Services für elektronische Musikgeräte: Circuit Care, Synth Repair und DJ Equipment Wartung."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-secondary-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-4 font-mono text-4xl font-bold md:text-5xl">
				Professional Services
			</h1>
			<p class="mx-auto max-w-3xl text-xl text-gray-300">
				Spezialisierte Services für elektronische Musikgeräte und Custom Development
			</p>
		</div>
	</div>
</section>

<!-- Circuit Care & Synth Repair - Main Section -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">
				Circuit Care & Synth Repair
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-secondary-600">
				Unsere Kernkompetenz: Die perfekte Symbiose aus analoger Synthesizer-Expertise 
				und präziser Circuit-Level Diagnostik für alle elektronischen Musikgeräte.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Synth Repair -->
			<div class="space-y-6">
				<div class="text-center">
					<div class="mb-4 text-6xl">🎹</div>
					<h3 class="mb-4 font-mono text-2xl font-bold text-primary-700">
						Synth Repair
					</h3>
					<p class="text-secondary-600">
						Spezialisierte Reparatur und Wartung von Vintage und modernen Synthesizern
					</p>
				</div>

				<div class="space-y-4">
					<div class="service-card bg-primary-50 border-primary-200">
						<h4 class="mb-2 font-mono font-semibold text-primary-900">
							Analoge Synthesizer
						</h4>
						<ul class="space-y-1 text-sm text-primary-800">
							<li class="flex items-center">
								<span class="mr-2 font-mono text-primary-600">></span>
								Moog, ARP, Sequential Circuits
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-primary-600">></span>
								VCO/VCF Kalibrierung
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-primary-600">></span>
								Envelope & LFO Service
							</li>
						</ul>
					</div>

					<div class="service-card bg-primary-50 border-primary-200">
						<h4 class="mb-2 font-mono font-semibold text-primary-900">
							Digitale Synthesizer
						</h4>
						<ul class="space-y-1 text-sm text-primary-800">
							<li class="flex items-center">
								<span class="mr-2 font-mono text-primary-600">></span>
								Roland, Yamaha, Korg
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-primary-600">></span>
								Firmware Updates
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-primary-600">></span>
								Display & Interface Repair
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Circuit Care -->
			<div class="space-y-6">
				<div class="text-center">
					<div class="mb-4 text-6xl">🔬</div>
					<h3 class="mb-4 font-mono text-2xl font-bold text-accent-600">
						Circuit Care
					</h3>
					<p class="text-secondary-600">
						Professionelle Circuit-Level Diagnostik und Komponenten-Service
					</p>
				</div>

				<div class="space-y-4">
					<div class="service-card bg-accent-50 border-accent-200">
						<h4 class="mb-2 font-mono font-semibold text-accent-900">
							PCB Diagnostik
						</h4>
						<ul class="space-y-1 text-sm text-accent-800">
							<li class="flex items-center">
								<span class="mr-2 font-mono text-accent-600">></span>
								Mikroskopische Inspektion
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-accent-600">></span>
								Komponenten-Stress Test
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-accent-600">></span>
								Signal-Trace Analyse
							</li>
						</ul>
					</div>

					<div class="service-card bg-accent-50 border-accent-200">
						<h4 class="mb-2 font-mono font-semibold text-accent-900">
							Präventive Wartung
						</h4>
						<ul class="space-y-1 text-sm text-accent-800">
							<li class="flex items-center">
								<span class="mr-2 font-mono text-accent-600">></span>
								Kondensator-Profil
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-accent-600">></span>
								Thermische Analyse
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono text-accent-600">></span>
								Contact-Reinigung
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Combination Service Highlight -->
		<div class="mt-12 text-center">
			<div class="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 p-8 text-white">
				<h3 class="mb-4 font-mono text-2xl font-bold">
					Die perfekte Kombination
				</h3>
				<p class="mb-6 text-lg">
					Unser einzigartiger Ansatz kombiniert tiefes Verständnis für Synthesizer-Design 
					mit modernster Circuit-Analyse-Technologie.
				</p>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="rounded bg-white/10 p-4">
						<div class="mb-2 font-mono text-lg font-bold">30+</div>
						<div class="text-sm">Jahre Synthesizer-Erfahrung</div>
					</div>
					<div class="rounded bg-white/10 p-4">
						<div class="mb-2 font-mono text-lg font-bold">250+</div>
						<div class="text-sm">Vintage Synthesizer restauriert</div>
					</div>
					<div class="rounded bg-white/10 p-4">
						<div class="mb-2 font-mono text-lg font-bold">99.2%</div>
						<div class="text-sm">Erfolgsrate bei Restaurationen</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- DJ Equipment Section -->
<section class="bg-secondary-50 border-secondary-200 border-t py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<div class="mb-4 text-6xl">🎧</div>
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">
				DJ Equipment Service
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-secondary-600">
				Professionelle Wartung und Reparatur für DJ-Equipment, Mixer und Turntables
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each djServices as service}
				<div class="service-card bg-secondary-100 border-secondary-300">
					<div class="mb-4 flex items-start justify-between">
						<h3 class="font-mono text-xl font-semibold text-secondary-900">
							{service.name}
						</h3>
						<span
							class="bg-secondary-700 rounded-full px-3 py-1 font-mono text-sm font-medium text-white"
						>
							{service.price}
						</span>
					</div>
					<p class="text-sm leading-relaxed text-secondary-700">
						{service.details}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">Service Process</h2>
			<p class="text-lg text-secondary-600">
				Unser standardisierter 4-Stufen Prozess für maximale Qualität
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
			Alle Reparaturen kommen mit 12 Monaten Garantie. Express-Service verfügbar. 
			Wir verwenden ausschließlich Original-Komponenten oder hochwertige Äquivalente.
		</p>

		<a
			href="/kontakt"
			class="inline-block rounded-lg bg-white px-8 py-4 font-mono font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:bg-secondary-100"
		>
			Service Anfrage Stellen
		</a>
	</div>
</section>
