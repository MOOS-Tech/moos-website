<template>
  <div v-if="loading" class="loading">
    <TopNavBar/>
    <img src="@/assets/images/navbarLogo.png" alt="Loading"/>
  </div>
  <div v-else>
    <TopNavBar/>
    <!--    <slot/>-->
    <Footer/>
  </div>
</template>
<script>
import TopNavBar from "../components/common/TopNavBar";
import Footer from "../components/common/Footer";

import {loading, toggleLoading} from '../store/store';

export default {
  components: {Footer, TopNavBar},
  computed: {
    loading() {
      return loading.value;
    },
  },
  methods: {
    toggleLoading,
  },
}
</script>
<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #109888;
}
</style>
