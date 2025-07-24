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
<section class="py-16" style="background: linear-gradient(135deg, var(--bg-surface) 0%, var(--button-bg) 100%);">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl main-content">
			<h1 class="mb-4 font-mono text-3xl font-bold md:text-4xl" style="color: var(--blog-accent);">
				Professional Services
			</h1>
			<p class="max-w-3xl text-xl" style="color: var(--text-muted);">
				Spezialisierte Services für elektronische Musikgeräte und Custom Development
			</p>
		</div>
	</div>
</section>

<!-- Circuit Care & Synth Repair - Main Section -->
<section class="themed-bg py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h2 class="mb-4 font-mono text-3xl font-bold" style="color: var(--text-primary);">
				Circuit Care & Synth Repair
			</h2>
			<p class="max-w-3xl text-lg" style="color: var(--text-muted);">
				Unsere Kernkompetenz: Die perfekte Symbiose aus analoger Synthesizer-Expertise 
				und präziser Circuit-Level Diagnostik für alle elektronischen Musikgeräte.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Synth Repair -->
			<div class="space-y-6">
				<div class="text-center">
					<div class="mb-4 text-6xl">🎹</div>
					<h3 class="mb-4 font-mono text-2xl font-bold" style="color: var(--accent-color);">
						Synth Repair
					</h3>
					<p style="color: var(--text-muted);">
						Spezialisierte Reparatur und Wartung von Vintage und modernen Synthesizern
					</p>
				</div>

				<div class="space-y-4">
					<div class="service-card" style="background: var(--button-bg); border-color: var(--accent-color);">
						<h4 class="mb-2 font-mono font-semibold" style="color: var(--text-primary);">
							Analoge Synthesizer
						</h4>
						<ul class="space-y-1 text-sm" style="color: var(--text-primary);">
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Moog, ARP, Sequential Circuits
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								VCO/VCF Kalibrierung
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Envelope & LFO Service
							</li>
						</ul>
					</div>

					<div class="service-card" style="background: var(--button-bg); border-color: var(--accent-color);">
						<h4 class="mb-2 font-mono font-semibold" style="color: var(--text-primary);">
							Digitale Synthesizer
						</h4>
						<ul class="space-y-1 text-sm" style="color: var(--text-primary);">
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Roland, Yamaha, Korg
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Firmware Updates
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
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
					<h3 class="mb-4 font-mono text-2xl font-bold" style="color: var(--accent-color);">
						Circuit Care
					</h3>
					<p style="color: var(--text-muted);">
						Professionelle Circuit-Level Diagnostik und Komponenten-Service
					</p>
				</div>

				<div class="space-y-4">
					<div class="service-card" style="background: var(--button-bg); border-color: var(--accent-color);">
						<h4 class="mb-2 font-mono font-semibold" style="color: var(--text-primary);">
							PCB Diagnostik
						</h4>
						<ul class="space-y-1 text-sm" style="color: var(--text-primary);">
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Mikroskopische Inspektion
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Komponenten-Stress Test
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Signal-Trace Analyse
							</li>
						</ul>
					</div>

					<div class="service-card" style="background: var(--button-bg); border-color: var(--accent-color);">
						<h4 class="mb-2 font-mono font-semibold" style="color: var(--text-primary);">
							Präventive Wartung
						</h4>
						<ul class="space-y-1 text-sm" style="color: var(--text-primary);">
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Kondensator-Profil
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Thermische Analyse
							</li>
							<li class="flex items-center">
								<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
								Contact-Reinigung
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Combination Service Highlight -->
		<div class="mt-12 text-center">
			<div class="mx-auto max-w-4xl rounded-lg p-8 text-white" style="background: linear-gradient(135deg, var(--accent-color) 0%, var(--gradient-secondary) 100%);">
				<h3 class="mb-4 font-mono text-2xl font-bold">
					Die perfekte Kombination
				</h3>
				<p class="mb-6 text-lg">
					Unser einzigartiger Ansatz kombiniert tiefes Verständnis für Synthesizer-Design 
					mit modernster Circuit-Analyse-Technologie.
				</p>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="rounded p-4" style="background: rgba(255, 255, 255, 0.1);">
						<div class="mb-2 font-mono text-lg font-bold">30+</div>
						<div class="text-sm">Jahre Synthesizer-Erfahrung</div>
					</div>
					<div class="rounded p-4" style="background: rgba(255, 255, 255, 0.1);">
						<div class="mb-2 font-mono text-lg font-bold">250+</div>
						<div class="text-sm">Vintage Synthesizer restauriert</div>
					</div>
					<div class="rounded p-4" style="background: rgba(255, 255, 255, 0.1);">
						<div class="mb-2 font-mono text-lg font-bold">99.2%</div>
						<div class="text-sm">Erfolgsrate bei Restaurationen</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- DJ Equipment Section -->
<section class="themed-surface py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<div class="mb-4 text-6xl">🎧</div>
			<h2 class="mb-4 font-mono text-3xl font-bold" style="color: var(--text-primary);">
				DJ Equipment Service
			</h2>
			<p class="max-w-2xl text-lg" style="color: var(--text-muted);">
				Professionelle Wartung und Reparatur für DJ-Equipment, Mixer und Turntables
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each djServices as service}
				<div class="service-card">
					<div class="mb-4 flex items-start justify-between">
						<h3 class="font-mono text-xl font-semibold" style="color: var(--text-primary);">
							{service.name}
						</h3>
						<span
							class="rounded-full px-3 py-1 font-mono text-sm font-medium text-white"
							style="background: var(--accent-color);"
						>
							{service.price}
						</span>
					</div>
					<p class="text-sm leading-relaxed" style="color: var(--text-muted);">
						{service.details}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section class="themed-bg py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold" style="color: var(--text-primary);">Service Process</h2>
			<p class="text-lg" style="color: var(--text-muted);">
				Unser standardisierter 4-Stufen Prozess für maximale Qualität
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as process}
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white"
						style="background: var(--accent-color);"
					>
						<span class="font-mono text-lg font-bold">{process.step}</span>
					</div>
					<h3 class="mb-2 font-mono text-xl font-semibold" style="color: var(--text-primary);">
						{process.title}
					</h3>
					<p class="text-sm" style="color: var(--text-muted);">
						{process.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Warranty & Guarantees -->
<section class="py-16 text-white" style="background: var(--accent-color);">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-8 font-mono text-3xl font-bold">Service Garantie</h2>

		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<div class="mb-2 font-mono text-3xl font-bold opacity-90">12</div>
				<div class="font-mono text-sm">Monate Garantie</div>
			</div>
			<div>
				<div class="mb-2 font-mono text-3xl font-bold opacity-90">48h</div>
				<div class="font-mono text-sm">Express Service</div>
			</div>
			<div>
				<div class="mb-2 font-mono text-3xl font-bold opacity-90">100%</div>
				<div class="font-mono text-sm">Original Parts</div>
			</div>
		</div>

		<p class="mx-auto mb-8 max-w-2xl opacity-90">
			Alle Reparaturen kommen mit 12 Monaten Garantie. Express-Service verfügbar. 
			Wir verwenden ausschließlich Original-Komponenten oder hochwertige Äquivalente.
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
			Service Anfrage Stellen
		</a>
	</div>
</section>
