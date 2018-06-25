import Vue from 'vue';
import Router from 'vue-router';

// PAGES
import Debts from '../views/Debts.vue';
import PayedDebts from '../views/PayedDebts.vue';
import AddDebt from '../views/AddDebt.vue';
import Users from '../views/Users.vue';

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
      path: '/payed',
      name: 'Payed',
      component: PayedDebts
    },
    {
      path: '/adddebt',
      name: 'Add Debt',
      component: AddDebt
    },
    {
      path: '/users',
      name: 'Add User',
      component: Users
    }
  ]
});
