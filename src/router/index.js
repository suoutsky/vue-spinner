import Vue from 'vue';
import Router from 'vue-router';
import Wave from '@/components/Wave';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wave',
      component: Wave
    }
  ]
});
