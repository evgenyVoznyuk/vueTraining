<template>
	<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="col col-sm-12">
						<h1>Site</h1>
						<app-header></app-header>
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-12">
						<app-content></app-content>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import AppHeader from './components/Header';
	import AppContent from './components/Content';

	export default {
		components: {
			AppHeader,
			AppContent
		}
	}
</script>