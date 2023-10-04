<template>
  <div style="height: 100vh;">
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
