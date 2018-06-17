import Vue from 'vue';
import Router from 'vue-router';

// PAGES
import Debts from '../views/Debts.vue';
import AddDebt from '../views/AddDebt.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Debts
    },

    // PAGES
    {
      path: '/adddebt',
      name: 'Add Debt',
      component: AddDebt
    }
  ]
});
