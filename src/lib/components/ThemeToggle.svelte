<script lang="ts">
	import { theme } from '$lib/stores/theme';

	function toggleTheme() {
		theme.toggle();
	}
</script>

<div class="flex items-center space-x-3">
	<span class="theme-label hidden sm:inline">TR-909</span>
	<button 
		class="theme-toggle" 
		onclick={toggleTheme}
		aria-label="Toggle between TR-909 and TR-808 themes"
		title="Switch between Roland TR-909 (Light) and TR-808 (Dark) themes"
	>
		<div class="theme-toggle-slider">
			{#if $theme === 'tr909'}
				<span style="font-size: 8px; font-weight: bold;">909</span>
			{:else}
				<span style="font-size: 8px; font-weight: bold;">808</span>
			{/if}
		</div>
	</button>
	<span class="theme-label hidden sm:inline">TR-808</span>
</div>
