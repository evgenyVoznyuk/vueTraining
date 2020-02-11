<template>
	<header>
		<div class="container">
			<app-cart></app-cart>
		</div>
	</header>
</template>

<script>
	import AppCart from './Cart';

	export default {
		components: {
			AppCart
		}
	}
</script>