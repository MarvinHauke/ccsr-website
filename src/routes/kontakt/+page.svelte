<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		device: '',
		issue: '',
		message: '',
		serviceType: 'circuit-care'
	});

	let isSubmitting = $state(false);
	let submitStatus = $state('');

	const serviceTypes = [
		{ value: 'circuit-care', label: 'Circuit Care & Diagnostik' },
		{ value: 'synth-repair', label: 'Synthesizer Reparatur' },
		{ value: 'dj-equipment', label: 'DJ Equipment Service' },
		{ value: 'consultation', label: 'Beratung & Kostenvoranschlag' },
		{ value: 'other', label: 'Sonstiges' }
	];

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulation der Formular-Übermittlung
		// In der Zukunft hier echte API-Integration
		setTimeout(() => {
			submitStatus = 'success';
			isSubmitting = false;
			// Reset form
			formData = {
				name: '',
				email: '',
				device: '',
				issue: '',
				message: '',
				serviceType: 'circuit-care'
			};
		}, 1500);
	}
</script>

<svelte:head>
	<title>Kontakt - Irregular | Electronic Music Equipment Service</title>
	<meta
		name="description"
		content="Kontaktieren Sie Irregular für professionelle Services rund um elektronische Musikgeräte. Bielefeld, Deutschland."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-secondary-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-primary-400 mb-4 font-mono text-4xl font-bold md:text-5xl">
				Kontakt
			</h1>
			<p class="mx-auto max-w-3xl text-xl text-gray-300">
				Professionelle Beratung und Service für Ihre elektronischen Musikgeräte
			</p>
		</div>
	</div>
</section>

<div class="bg-secondary-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			
			<!-- Contact Information -->
			<div class="space-y-8">
				<div>
					<h2 class="mb-6 font-mono text-2xl font-bold text-secondary-900">
						Service-Zentrum Bielefeld
					</h2>
					
					<!-- Address -->
					<div class="service-card mb-6">
						<div class="mb-4 flex items-start space-x-4">
							<div class="text-2xl">📍</div>
							<div>
								<h3 class="mb-2 font-mono text-lg font-semibold text-secondary-900">
									Adresse
								</h3>
								<p class="text-secondary-700">
									Babenhauser Straße 170<br>
									33619 Bielefeld<br>
									Deutschland
								</p>
							</div>
						</div>
					</div>

					<!-- Email -->
					<div class="service-card mb-6">
						<div class="mb-4 flex items-start space-x-4">
							<div class="text-2xl">📧</div>
							<div>
								<h3 class="mb-2 font-mono text-lg font-semibold text-secondary-900">
									Email
								</h3>
								<a 
									href="mailto:service@irregular.de" 
									class="text-primary-600 hover:text-primary-700 font-mono transition-colors"
								>
									service@irregular.de
								</a>
							</div>
						</div>
					</div>

					<!-- Service Hours -->
					<div class="service-card">
						<div class="mb-4 flex items-start space-x-4">
							<div class="text-2xl">🕒</div>
							<div>
								<h3 class="mb-2 font-mono text-lg font-semibold text-secondary-900">
									Service-Zeiten
								</h3>
								<div class="space-y-1 text-sm text-secondary-700">
									<div class="flex justify-between">
										<span>Montag - Freitag:</span>
										<span class="font-mono">09:00 - 18:00</span>
									</div>
									<div class="flex justify-between">
										<span>Samstag:</span>
										<span class="font-mono">10:00 - 14:00</span>
									</div>
									<div class="flex justify-between">
										<span>Sonntag:</span>
										<span class="font-mono text-secondary-500">Geschlossen</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Service Information -->
				<div class="rounded-lg bg-primary-50 border border-primary-200 p-6">
					<h3 class="mb-4 font-mono text-lg font-semibold text-primary-900">
						Bevor Sie uns kontaktieren
					</h3>
					<ul class="space-y-2 text-sm text-primary-800">
						<li class="flex items-start">
							<span class="mr-2 font-mono text-primary-600">></span>
							<span>Gerätemodell und Baujahr bereithalten</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-mono text-primary-600">></span>
							<span>Fehlerbeschreibung so detailliert wie möglich</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-mono text-primary-600">></span>
							<span>Fotos von Gerät und Problem (falls sichtbar)</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-mono text-primary-600">></span>
							<span>Kostenvoranschlag ist immer kostenfrei</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="service-card">
				<h2 class="mb-6 font-mono text-2xl font-bold text-secondary-900">
					Service-Anfrage
				</h2>

				{#if submitStatus === 'success'}
					<div class="mb-6 rounded-lg bg-success-100 border border-success-200 p-4">
						<div class="flex items-center space-x-2">
							<span class="text-success-600 text-xl">✅</span>
							<div>
								<h4 class="font-mono font-semibold text-success-800">
									Anfrage gesendet!
								</h4>
								<p class="text-sm text-success-700">
									Wir melden uns innerhalb von 24 Stunden bei Ihnen.
								</p>
							</div>
						</div>
					</div>
				{:else}
					<form on:submit={handleSubmit} class="space-y-6">
						<!-- Name & Email -->
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block font-mono text-sm font-medium text-secondary-700">
									Name *
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full rounded-lg border border-secondary-300 px-4 py-3 font-mono text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
									placeholder="Ihr Name"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block font-mono text-sm font-medium text-secondary-700">
									Email *
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full rounded-lg border border-secondary-300 px-4 py-3 font-mono text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
									placeholder="ihre@email.de"
								/>
							</div>
						</div>

						<!-- Service Type -->
						<div>
							<label for="serviceType" class="mb-2 block font-mono text-sm font-medium text-secondary-700">
								Service-Art *
							</label>
							<select
								id="serviceType"
								bind:value={formData.serviceType}
								required
								class="w-full rounded-lg border border-secondary-300 px-4 py-3 font-mono text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
							>
								{#each serviceTypes as service}
									<option value={service.value}>{service.label}</option>
								{/each}
							</select>
						</div>

						<!-- Device -->
						<div>
							<label for="device" class="mb-2 block font-mono text-sm font-medium text-secondary-700">
								Gerät/Modell
							</label>
							<input
								type="text"
								id="device"
								bind:value={formData.device}
								class="w-full rounded-lg border border-secondary-300 px-4 py-3 font-mono text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
								placeholder="z.B. Moog Subsequent 37, Pioneer DJM-900"
							/>
						</div>

						<!-- Issue -->
						<div>
							<label for="issue" class="mb-2 block font-mono text-sm font-medium text-secondary-700">
								Problem/Symptom
							</label>
							<input
								type="text"
								id="issue"
								bind:value={formData.issue}
								class="w-full rounded-lg border border-secondary-300 px-4 py-3 font-mono text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
								placeholder="z.B. Oscillator drift, kein Sound, Display defekt"
							/>
						</div>

						<!-- Message -->
						<div>
							<label for="message" class="mb-2 block font-mono text-sm font-medium text-secondary-700">
								Detaillierte Beschreibung
							</label>
							<textarea
								id="message"
								rows="4"
								bind:value={formData.message}
								class="w-full rounded-lg border border-secondary-300 px-4 py-3 font-mono text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
								placeholder="Beschreiben Sie das Problem so detailliert wie möglich..."
							></textarea>
						</div>

						<!-- Submit Button -->
						<div class="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full rounded-lg bg-primary-600 px-6 py-4 font-mono font-semibold text-white transition-all duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{#if isSubmitting}
									<span class="flex items-center justify-center space-x-2">
										<span class="text-sm">Wird gesendet...</span>
										<div class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
									</span>
								{:else}
									Service-Anfrage senden
								{/if}
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- Map/Location Section -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<h2 class="mb-4 font-mono text-3xl font-bold text-secondary-900">
				Unser Standort
			</h2>
			<p class="text-lg text-secondary-600">
				Mitten in Bielefeld - gut erreichbar mit öffentlichen Verkehrsmitteln und PKW
			</p>
		</div>
		
		<div class="rounded-lg bg-secondary-100 p-8 text-center">
			<div class="text-4xl mb-4">🗺️</div>
			<h3 class="font-mono text-xl font-semibold text-secondary-900 mb-2">
				Babenhauser Straße 170, 33619 Bielefeld
			</h3>
			<p class="text-secondary-600 mb-4">
				Interaktive Karte wird in Kürze verfügbar sein
			</p>
			<div class="space-y-2 text-sm text-secondary-700">
				<p>🚗 Kostenfreie Parkplätze verfügbar</p>
				<p>🚌 Bushaltestelle "Babenhauser Straße" (200m)</p>
				<p>🏢 Im Gewerbegebiet, gut ausgeschildert</p>
			</div>
		</div>
	</div>
</section>
