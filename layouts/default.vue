<template>
  <slot/>
</template>
<script>
import TopNavBar from "../components/common/TopNavBar";
import Footer from "../components/common/Footer";

export default {
  components: {Footer, TopNavBar},
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
