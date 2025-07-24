<script>
	const meta = {
		title: "Moog Ladder Filter: Reparatur und Kalibrierung",
		date: "2025-01-15",
		category: "Synthesizer",
		tags: ["Moog", "Filter", "Analog"],
		excerpt: "Detaillierte Anleitung zur Reparatur des klassischen Moog 24dB/Oct Tiefpassfilters."
	};
</script>

<svelte:head>
	<title>{meta.title} - Irregular Blog</title>
	<meta name="description" content={meta.excerpt} />
</svelte:head>

<div class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<header class="mb-12">
			<div class="mb-4">
				<a href="/blog" class="text-primary-600 hover:text-primary-700 font-mono text-sm">
					← Zurück zum Blog
				</a>
			</div>
			
			<div class="flex flex-wrap items-center gap-2 mb-4">
				<span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono font-medium">
					{meta.category}
				</span>
				<time class="text-secondary-500 text-sm font-mono">
					15. Januar 2025
				</time>
			</div>
			
			<h1 class="text-4xl font-mono font-bold text-secondary-900 mb-4">
				{meta.title}
			</h1>
			
			<p class="text-xl text-secondary-600 leading-relaxed mb-6">
				{meta.excerpt}
			</p>
			
			<div class="flex flex-wrap gap-2">
				{#each meta.tags as tag}
					<span class="bg-secondary-200 text-secondary-700 px-2 py-1 rounded text-xs font-mono">
						{tag}
					</span>
				{/each}
			</div>
		</header>

		<!-- Content -->
		<article class="prose prose-lg max-w-none">			
			<h2>Moog Ladder Filter: Reparatur und Kalibrierung</h2>
			
			<p>Das <strong>Moog Ladder Filter</strong> ist eines der charakteristischsten Elemente in der Geschichte der elektronischen Musik. Entwickelt von Bob Moog in den 1960er Jahren, definiert dieses Filter den unverwechselbaren Klang der Moog-Synthesizer.</p>
			
			<h3>Funktionsweise</h3>
			<p>Das Ladder Filter verwendet eine Kaskade von vier Transistor-Stufen, die eine 24dB/Oktave Dämpfung erzeugen. Diese Anordnung verleiht dem Filter seinen warmen, musikalischen Charakter.</p>
			
			<h4>Technische Spezifikationen</h4>
			<ul>
				<li><strong>Dämpfung:</strong> 24dB pro Oktave</li>
				<li><strong>Topologie:</strong> 4-Pol Tiefpass</li>
				<li><strong>Resonanz:</strong> Bis zur Selbstoszillation</li>
				<li><strong>Transistoren:</strong> Matched Quad (CA3046/CA3086)</li>
			</ul>
			
			<h3>Häufige Probleme</h3>
			
			<h4>1. Resonanz-Oszillation</h4>
			<p><strong>Symptom:</strong> Filter schwingt unkontrolliert<br>
			<strong>Ursache:</strong> Meist defekte Transistoren im matched Quad<br>
			<strong>Lösung:</strong> Austausch des gesamten Transistor-Arrays</p>
			
			<h4>2. Cutoff-Tracking Probleme</h4>
			<p><strong>Symptom:</strong> Filter reagiert nicht linear auf CV<br>
			<strong>Ursache:</strong> Drift in den Bias-Schaltungen<br>
			<strong>Lösung:</strong> Temperatur-Kompensation justieren</p>
			
			<h4>3. CV-Scaling Ungenauigkeiten</h4>
			<p><strong>Symptom:</strong> 1V/Oct funktioniert nicht korrekt<br>
			<strong>Ursache:</strong> Trimmer verstellt oder Referenz-Spannung instabil<br>
			<strong>Lösung:</strong> Präzise Kalibrierung mit Oszilloskop</p>
			
			<h3>Reparatur-Prozess</h3>
			
			<h4>Schritt 1: Diagnose</h4>
			<div class="bg-secondary-900 text-green-400 font-mono text-sm p-4 rounded-lg my-4">
				1. Visuell Inspektion der PCB<br>
				2. Spannungen messen (±15V, +5V)<br>
				3. Signal-Tracing mit Oszilloskop<br>
				4. Transistor-Matching prüfen
			</div>
			
			<h4>Schritt 2: Komponenten-Test</h4>
			<p>Die kritischen Komponenten systematisch durchmessen:</p>
			<ul>
				<li><strong>Transistoren:</strong> hFE und Matching prüfen</li>
				<li><strong>Kondensatoren:</strong> ESR und Kapazität</li>
				<li><strong>Widerstände:</strong> Drift-Verhalten testen</li>
			</ul>
			
			<h4>Schritt 3: Kalibrierung</h4>
			<ol>
				<li><strong>Cutoff-Offset:</strong> Bei geschlossenem Filter einstellen</li>
				<li><strong>Resonance-Amount:</strong> Oszillations-Punkt definieren</li>
				<li><strong>CV-Scaling:</strong> 1V/Oct über 5 Oktaven prüfen</li>
				<li><strong>Temperature-Compensation:</strong> Bei verschiedenen Temperaturen testen</li>
			</ol>
			
			<h3>Wartungs-Tipps</h3>
			<ul>
				<li><strong>Regelmäßige Reinigung</strong> der Potentiometer</li>
				<li><strong>Temperatur-Zyklen</strong> vermeiden</li>
				<li><strong>Matched Transistors</strong> als Ersatz bevorraten</li>
				<li><strong>Kalibrierung</strong> alle 2-3 Jahre überprüfen</li>
			</ul>
			
			<h3>Fazit</h3>
			<p>Das Moog Ladder Filter ist ein Meisterwerk der Analog-Technik, das bei sachgemäßer Wartung Jahrzehnte lang zuverlässig funktioniert. Die charakteristische Klangfärbung macht jeden Reparatur-Aufwand mehr als wert.</p>
			
			<hr class="my-8">
			<p><em>Haben Sie Probleme mit Ihrem Moog Filter? Kontaktieren Sie uns für eine professionelle Diagnose und Reparatur.</em></p>
		</article>
		
		<!-- Footer -->
		<footer class="mt-12 pt-8 border-t border-secondary-200">
			<div class="flex justify-between items-center">
				<a href="/blog" class="text-primary-600 hover:text-primary-700 font-mono text-sm">
					← Alle Blog-Posts
				</a>
				<a href="/kontakt" class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors">
					Fragen zum Artikel?
				</a>
			</div>
		</footer>
	</div>
</div>
