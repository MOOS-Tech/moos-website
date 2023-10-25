<template>
  <div>

    <!-- hero section -->
    <HeroSection data-aos="fade-up" data-aos-duration="1000" />

    <!-- ====== Blog Section Start -->
    <Blogs data-aos="fade-up" data-aos-duration="1000" />

    <!-- ====== Partner Section-->
    <PartnerCarousel />

    <!-- ====== Quote Section-->
    <Quote />

    <!-- ====== Card Sections-->
    <CardView />

    <!-- ====== Map and the Contact Section-->

    <MapAndContact />

  </div>
</template>

<script>

import Blogs from "~/components/HomePage/blogs.vue";
import MapAndContact from "~/components/HomePage/mapAndContact.vue";
import HeroSection from "~/components/HomePage/heroSection.vue";
import PartnerCarousel from "~/components/HomePage/partnerCarousel.vue";
import Quote from "~/components/HomePage/quote.vue";
import CardView from '~/components/HomePage/cardView.vue';

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
      ComTitle: "for effortless inventory operations",
    };
  },
};
</script>
