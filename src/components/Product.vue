<template>
	<div>
		<h2>Product title</h2>
		<div class="price">{{ price }}</div>
		<hr>
		<button class="btn btn-warning"
				  @click="onBtnChangeVal"
					:value="minusVal"
					:disabled="noMinus"
		>
			{{ minusVal }}
		</button>
		<input type="text" :value="cnt" @change="onChange">
		<button class="btn btn-success"
				  @click="onBtnChangeVal"
					:value="plusVal"
		>
			{{ plusVal }}
		</button>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';

	export default {
		data() {
	    return {
        plusVal: '+1',
        minusVal: '-1'
	    }
	  },
		computed: {
			...mapState(['price', 'cnt']),
			noMinus(){
				return !(this.cnt > 1);
			}
		},
		methods: {
			...mapActions(['setCnt']),
			onChange(e){
				this.setCnt({
          cnt: e.target.value,
          newVal: null
        });
				this.$forceUpdate();
			},
			onBtnChangeVal(e){
				this.setCnt({
          cnt: null,
          newVal: e.target.value
        });
			}
		}
	}
</script>
