<script lang="ts">
	// Service status simulation
	let serviceStatus = $state('online');
	let currentProjects = $state(12);
	let completedRepairs = $state(247);

	const services = [
		{
			title: 'Circuit Repair',
			description:
				'Professional PCB diagnostics and component-level repairs for all electronic music equipment.',
			features: [
				'Component testing',
				'PCB trace repair',
				'Power supply diagnosis',
				'Digital circuit analysis'
			],
			icon: '🔧'
		},
		{
			title: 'Synthesizer Service',
			description:
				'Vintage and modern synthesizer restoration, calibration, and performance optimization.',
			features: [
				'Oscillator calibration',
				'Filter alignment',
				'Envelope tuning',
				'Vintage restoration'
			],
			icon: '🎹'
		},
		{
			title: 'DJ Equipment',
			description:
				'Mixer, controller, and turntable repairs with focus on professional reliability.',
			features: [
				'Crossfader repair',
				'Channel diagnostics',
				'USB/MIDI troubleshooting',
				'Motor service'
			],
			icon: '🎧'
		}
	];

	const recentWork = [
		{ device: 'Moog Subsequent 37', issue: 'Oscillator drift', status: 'Completed' },
		{ device: 'Pioneer DJM-900', issue: 'Channel 3 fault', status: 'In Progress' },
		{ device: 'Roland TR-808', issue: 'Trigger timing', status: 'Diagnosed' },
		{ device: 'Behringer BCR2000', issue: 'Encoder replacement', status: 'Completed' }
	];
</script>

<svelte:head>
	<title>CC&SR - CircuitCare and SynthRepair | Professional Electronic Music Equipment Repair</title
	>
	<meta
		name="description"
		content="Professional repair services for synthesizers, DJ equipment, and electronic music gear. Circuit-level diagnostics and vintage restoration."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="tech-pattern bg-secondary-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-6 font-mono text-4xl font-bold md:text-6xl">
				Circuit Care & Synth Repair
			</h1>
			<p class="mb-4 font-mono text-lg text-gray-300 md:text-xl">
				Professional Electronic Music Equipment Service
			</p>
			<p class="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
				Professional electronic music equipment repair services. Circuit-level diagnostics, vintage
				synthesizer restoration, and DJ equipment maintenance.
			</p>

			<!-- Status indicator -->
			<div class="mb-8 flex items-center justify-center space-x-4">
				<div class="status-online">SERVICE STATUS: ONLINE</div>
				<div class="font-mono text-sm text-accent-400">Response time: &lt; 24h</div>
			</div>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a href="/kontakt" class="tech-button"> Request Service </a>
				<a
					href="/services"
					class="text-primary-400 rounded-lg border border-primary-600 px-6 py-3 font-mono font-medium transition-all duration-200 hover:bg-primary-600 hover:text-white"
				>
					View Services
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="border-secondary-200 border-b bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-2 font-mono text-3xl font-bold text-primary-700">
					{completedRepairs}+
				</div>
				<div class="font-mono text-sm text-secondary-600">Completed Repairs</div>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-2 font-mono text-3xl font-bold text-accent-500">
					{currentProjects}
				</div>
				<div class="font-mono text-sm text-secondary-600">Current Projects</div>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-2 font-mono text-3xl font-bold text-success-500">98%</div>
				<div class="font-mono text-sm text-secondary-600">Success Rate</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="bg-secondary-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">Technical Services</h2>
			<p class="mx-auto max-w-2xl text-lg text-secondary-600">
				Specialized repair and maintenance services for electronic music equipment with
				circuit-level precision.
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
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">Recent Diagnostics</h2>
			<p class="text-lg text-secondary-600">
				Real-time view of current repair queue and completed work.
			</p>
		</div>

		<div class="rounded-lg bg-secondary-50 p-6 shadow-lg">
			<div class="code-block mb-6">
				<div class="mb-2 font-mono text-xs text-green-400">
					// CC&SR Repair Queue - Last Updated: {new Date().toLocaleString('de-DE')}
				</div>
				<div class="font-mono text-xs text-accent-400">
					System Status: OPERATIONAL | Queue Length: {currentProjects} items
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
								Issue: {work.issue}
							</div>
						</div>
						<div class="ml-4">
							<span
								class="rounded-full px-3 py-1 font-mono text-xs
                           {work.status === 'Completed'
									? 'bg-success-500 text-white'
									: work.status === 'In Progress'
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
		<h2 class="mb-4 font-mono text-3xl font-bold">Equipment Malfunction?</h2>
		<p class="mb-8 text-xl text-blue-100">
			Professional diagnostics and repair services for all electronic music equipment. Circuit-level
			analysis with detailed documentation.
		</p>
		<a
			href="/kontakt"
			class="inline-block rounded-lg bg-white px-8 py-4 font-mono font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:bg-secondary-100"
		>
			Initiate Service Request
		</a>
	</div>
</section>
