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
import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";
import Blogs from "~/components/HomePage/blogs.vue";
import MapAndContact from "~/components/HomePage/mapAndContact.vue";
import HeroSection from "~/components/HomePage/heroSection.vue";
import PartnerCarousel from "~/components/HomePage/partnerCarousel.vue";
import Quote from "~/components/HomePage/quote.vue";
import CardView from '~/components/HomePage/cardView.vue';

export default {
  name: "index",
  components: {
    FormInput,
    FormButton,
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

<style scoped></style>
 <!-- <div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-40">
        <div
          class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 class="text-3xl leading-tight sm:text-4xl md:text-4xl xl:text-5xl text-gray">
            MOOS for effortless inventory operations
          </h1>
          <p class="mt-8 text-gray-700">
            Digitize your shelves & racks for full visibility where it happens:
            the MOOS effortless inventory operating system​.
          </p>
          <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row">
            <FormButton class="text-white"> Book a Meeting </FormButton>
          </div>
        </div>
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359"
            class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
        </div>
      </div> -->