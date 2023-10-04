<template>
  <div style="height: 100vh;width: 100vw">
    <TopNavBar/>
    <slot/>
    <Footer/>
  </div>
</template>
<script>
import TopNavBar from "../components/common/TopNavBar";
import Footer from "../components/common/Footer";

export default {
  components: {Footer, TopNavBar}
}
</script>
