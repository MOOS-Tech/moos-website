<template>
  <div>

    <!-- hero section -->
    <HeroSection data-aos="fade-up" data-aos-duration="1000"
                 :imageSrc1="imageSrc1"
                 :imageSrc2="imageSrc2"
                 :imageSrc3="imageSrc3"
                 :ComTitle="ComTitle"
                 :boldText="boldText"
                 :para="para"/>

    <!-- ====== Blog Section Start -->
    <Blogs data-aos="fade-up" data-aos-duration="1000"/>

    <!-- ====== Partner Section-->
    <PartnerCarousel/>

    <!-- ====== Quote Section-->
    <Quote/>

    <!-- ====== Card Sections-->
    <CardView/>

    <!-- ====== Map and the Contact Section-->

    <MapAndContact/>

  </div>
</template>

<script>

import Blogs from "~/components/HomePage/blogs.vue";
import MapAndContact from "~/components/HomePage/mapAndContact.vue";
import HeroSection from "~/components/HomePage/heroSection.vue";
import PartnerCarousel from "~/components/HomePage/partnerCarousel.vue";
import Quote from "~/components/HomePage/quote.vue";
import CardView from '~/components/HomePage/cardView.vue';

import {toggleLoading} from '../store/store';
import {getTitle, getImages} from "@/services/home.js";

let successCount = 0;
export default {
  name: "index",
  components: {
    Blogs,
    MapAndContact,
    HeroSection,
    PartnerCarousel,
    Quote,
    CardView
  },
  data() {
    return {
      ComTitle: "",
      imageSrc2: "",
      imageSrc3: "",
      imageSrc1: "",
      boldText: "",
      para: ""
    };
  },
  async created() {
    toggleLoading(true);
    await this.fetchHeroSection();
    if (successCount > 0) {
      toggleLoading(false);
    }
  },
  methods: {
    async fetchHeroSection() {
      try {
        const response = await getTitle();
        this.ComTitle = response.data.data.attributes.CommonTitle
        this.boldText = response.data.data.attributes.boldText
        this.para = response.data.data.attributes.Paragraph

        const response1 = await getImages('1');
        this.imageSrc1 = response1.data.data;
        const response2 = await getImages('2');
        this.imageSrc2 = response2.data.data;
        const response3 = await getImages('3');
        this.imageSrc3 = response3.data.data;
        successCount++;
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    }
  }
};
</script>
