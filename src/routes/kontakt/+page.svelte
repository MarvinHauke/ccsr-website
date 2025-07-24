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
<section class="py-16" style="background: linear-gradient(135deg, var(--bg-surface) 0%, var(--button-bg) 100%);">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl main-content">
			<h1 class="mb-4 font-mono text-3xl font-bold md:text-4xl" style="color: var(--blog-accent);">
				Kontakt
			</h1>
			<p class="max-w-3xl text-xl" style="color: var(--text-muted);">
				Professionelle Beratung und Service für Ihre elektronischen Musikgeräte
			</p>
		</div>
	</div>
</section>

<div class="themed-bg py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			
			<!-- Contact Information -->
			<div class="space-y-8">
				<div>
					<h2 class="mb-6 font-mono text-2xl font-bold" style="color: var(--text-primary);">
						Service-Zentrum Bielefeld
					</h2>
					
					<!-- Address -->
					<div class="service-card mb-6">
						<div class="mb-4 flex items-start space-x-4">
							<div class="text-2xl">📍</div>
							<div>
								<h3 class="mb-2 font-mono text-lg font-semibold" style="color: var(--text-primary);">
									Adresse
								</h3>
								<p style="color: var(--text-muted);">
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
								<h3 class="mb-2 font-mono text-lg font-semibold" style="color: var(--text-primary);">
									Email
								</h3>
								<a 
									href="mailto:service@irregular.de" 
									class="font-mono transition-colors"
									style="color: var(--accent-color);"
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
								<h3 class="mb-2 font-mono text-lg font-semibold" style="color: var(--text-primary);">
									Service-Zeiten
								</h3>
								<div class="space-y-1 text-sm" style="color: var(--text-muted);">
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
										<span class="font-mono opacity-60">Geschlossen</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Service Information -->
				<div class="rounded-lg p-6" style="background: var(--button-bg); border: 1px solid var(--accent-color);">
					<h3 class="mb-4 font-mono text-lg font-semibold" style="color: var(--text-primary);">
						Bevor Sie uns kontaktieren
					</h3>
					<ul class="space-y-2 text-sm" style="color: var(--text-primary);">
						<li class="flex items-start">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							<span>Gerätemodell und Baujahr bereithalten</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							<span>Fehlerbeschreibung so detailliert wie möglich</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							<span>Fotos von Gerät und Problem (falls sichtbar)</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-mono" style="color: var(--accent-color);">></span>
							<span>Kostenvoranschlag ist immer kostenfrei</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="service-card">
				<h2 class="mb-6 font-mono text-2xl font-bold" style="color: var(--text-primary);">
					Service-Anfrage
				</h2>

				{#if submitStatus === 'success'}
					<div class="mb-6 rounded-lg p-4" style="background: var(--accent-color); opacity: 0.1; border: 1px solid var(--accent-color);">
						<div class="flex items-center space-x-2">
							<span class="text-xl" style="color: var(--accent-color);">✅</span>
							<div>
								<h4 class="font-mono font-semibold" style="color: var(--accent-color);">
									Anfrage gesendet!
								</h4>
								<p class="text-sm" style="color: var(--accent-color);">
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
								<label for="name" class="mb-2 block font-mono text-sm font-medium" style="color: var(--text-muted);">
									Name *
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 transition-all"
									style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary);"
									placeholder="Ihr Name"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block font-mono text-sm font-medium" style="color: var(--text-muted);">
									Email *
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 transition-all"
									style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary);"
									placeholder="ihre@email.de"
								/>
							</div>
						</div>

						<!-- Service Type -->
						<div>
							<label for="serviceType" class="mb-2 block font-mono text-sm font-medium" style="color: var(--text-muted);">
								Service-Art *
							</label>
							<select
								id="serviceType"
								bind:value={formData.serviceType}
								required
								class="w-full rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 transition-all"
								style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary);"
							>
								{#each serviceTypes as service}
									<option value={service.value}>{service.label}</option>
								{/each}
							</select>
						</div>

						<!-- Device -->
						<div>
							<label for="device" class="mb-2 block font-mono text-sm font-medium" style="color: var(--text-muted);">
								Gerät/Modell
							</label>
							<input
								type="text"
								id="device"
								bind:value={formData.device}
								class="w-full rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 transition-all"
								style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary);"
								placeholder="z.B. Moog Subsequent 37, Pioneer DJM-900"
							/>
						</div>

						<!-- Issue -->
						<div>
							<label for="issue" class="mb-2 block font-mono text-sm font-medium" style="color: var(--text-muted);">
								Problem/Symptom
							</label>
							<input
								type="text"
								id="issue"
								bind:value={formData.issue}
								class="w-full rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 transition-all"
								style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary);"
								placeholder="z.B. Oscillator drift, kein Sound, Display defekt"
							/>
						</div>

						<!-- Message -->
						<div>
							<label for="message" class="mb-2 block font-mono text-sm font-medium" style="color: var(--text-muted);">
								Detaillierte Beschreibung
							</label>
							<textarea
								id="message"
								rows="4"
								bind:value={formData.message}
								class="w-full rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 transition-all"
								style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary);"
								placeholder="Beschreiben Sie das Problem so detailliert wie möglich..."
							></textarea>
						</div>

						<!-- Submit Button -->
						<div class="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full rounded-lg px-6 py-4 font-mono font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
								style="background: var(--accent-color);"
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
<section class="themed-surface py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="content-align mb-8">
			<h2 class="mb-4 font-mono text-3xl font-bold" style="color: var(--text-primary);">
				Unser Standort
			</h2>
			<p class="text-lg" style="color: var(--text-muted);">
				Mitten in Bielefeld - gut erreichbar mit öffentlichen Verkehrsmitteln und PKW
			</p>
		</div>
		
		<div class="rounded-lg p-8 text-center" style="background: var(--button-bg);">
			<div class="text-4xl mb-4">🗺️</div>
			<h3 class="font-mono text-xl font-semibold mb-2" style="color: var(--text-primary);">
				Babenhauser Straße 170, 33619 Bielefeld
			</h3>
			<p class="mb-4" style="color: var(--text-muted);">
				Interaktive Karte wird in Kürze verfügbar sein
			</p>
			<div class="space-y-2 text-sm" style="color: var(--text-primary);">
				<p>🚗 Kostenfreie Parkplätze verfügbar</p>
				<p>🚌 Bushaltestelle "Babenhauser Straße" (200m)</p>
				<p>🏢 Im Gewerbegebiet, gut ausgeschildert</p>
			</div>
		</div>
	</div>
</section>
