<template>
  <div>
    <Banner :title="Textitle" :boldSub_title="boldTitle" :isButtonVisible="false" :isimageVisible="false" :isboldText="true" :title_bold="Title_bold"/>
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
     Textitle:"raises $100 million in funding!",
     boldTitle:"Learn More",
     Title_bold:"MOOS"
    };
  },
  computed: {
    isBannerVisible() {
     
      return this.$route.name === 'index'; 
    },
  },
}
</script>

