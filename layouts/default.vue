<template>
  <div>
    <Banner :title="Textitle" :boldSub_title="boldTitle" :isButtonVisible="false"/>
    <TopNavBar/>
    <slot/>
    <Footer/>
  </div>
</template>
<script>
import TopNavBar from "../components/common/TopNavBar";
import Footer from "../components/common/Footer";
import Banner from '../components/common/Banner.vue';

export default {
  components: {Footer, TopNavBar,Banner},
  data() {
    return {
     Textitle:"MOOS raises $100 million in funding!",
     boldTitle:"Learn More"
    };
  },
}
</script>

