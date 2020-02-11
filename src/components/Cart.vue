<template>
	<div>
		In cart: {{ cnt }}
		Total: {{ total }}
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';

	export default {
		computed: {
			...mapState(['cnt']),
			...mapGetters(['total'])
		}
	}
</script>