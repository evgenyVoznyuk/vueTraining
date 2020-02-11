import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cnt: 1,
    price: 1000
  },
  getters: {
    total(state) {
      return state.cnt * state.price;
    }
  },
  mutations: {
    setCnt(state, {cnt, newVal}) {
      let newCnt;
      if (cnt) {
        newCnt = parseInt(cnt.replace(/[^-0-9]/gim, ''));
      } else if (newVal) {
        newCnt = state.cnt + newVal;
      }
      state.cnt = Math.max(1, newCnt);
    },
  },
  actions: {
    setCnt(store, {cnt, newVal}) {
      if(newVal){
        newVal = parseInt(newVal);
      }
      store.commit('setCnt', {cnt, newVal});
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});
