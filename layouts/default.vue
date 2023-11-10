<template>
  <div>
    <Banner :title="paragraph" :boldSub_title="boldText" :isButtonVisible="false" :isimageVisible="false"
            :isboldText="true" :title_bold="title" :redirectUrl="redirectUrl" :isVisible="isBanner"/>
    <TopNavBar/>
    <slot/>
    <Footer/>
  </div>
</template>
<script>
import TopNavBar from "../components/common/TopNavBar";
import Footer from "../components/common/Footer";
import Banner from '../components/common/Banner.vue';
import {getBanner} from "../services/navigation";

export default {
  components: {Footer, TopNavBar, Banner},
  data() {
    return {
      paragraph: "raises $100 million in funding!",
      boldText: "Learn More",
      title: "MOOS",
      redirectUrl: '',
      isBanner: false
    };
  },
  async mounted() {
    try {
      let res = await getBanner(1);
      console.log(res)
      this.title = res.boldText;
      this.boldText = res.underline_word;
      this.paragraph = res.Paragraph;
      this.redirectUrl = res.url;
      this.isBanner = true;
    } catch (e) {
      this.isBanner = false;
    }
  }
}
</script>

