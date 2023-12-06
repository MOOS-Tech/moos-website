<template>
  <div class="py-20">
    <section class="relative  px-5 lg:px-20 " v-for="(card, index) in cardData" :key="index">
      <div class="relative flex flex-row items-stretch"> <!-- Use flexbox for vertical layout -->
        <div class="bg-green-200 w-8 flex flex-col items-center justify-center">
        <p class="text-white transform -rotate-90 whitespace-nowrap">{{ card.techText }}</p>
      </div>
     
      <div class=" mx-auto lg:max-w-7xl w-full sm:px-10  flex flex-col lg:flex-row lg:gap-20 justify-center items-center">
       
        <div
          class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-2/3">
          <h1 class="text-normal-title-heading pb-6 text-black-200 font-semibold py-2">
            {{ card.title }}
          </h1>
          <h2 class="font-semibold text-sub-title-heading pb-6" style="color: rgba(68, 68, 68, 0.6);">{{ card.description }}</h2>
        </div>
        <div
          class="px-10 flex flex-1  lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto  justify-end items-center technology-image">
          <img :src="card.imageUrl" alt="Hero image"
            class="lg:w-full lg:h-full  object-cover lg:max-h-none  max-w-full" />
        </div>
        <!-- Dotted line divider -->
        <div v-if="index !== cardData.length - 1" class="absolute left-0 right-0 bottom-0 h-1 bg-transparent border-dashed border-b-2 border-green-100" style="border-spacing: 0px;"></div>

      </div>
      </div>
    </section>
    <!-- <div
          class="flex flex-1  lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto items-center justify-center ">
          <img src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp" alt="Hero image" width="720" height="720"
            class="lg:absolute lg:w-full lg:h-full  object-cover lg:max-h-none max-h-[550px] max-w-[250px]" />
        </div> -->

  </div>
</template>

<script>

export default {
  name: "technologyCard",

  components: {},
  props: {
    baseUrl: String,
    cardData: [],
    cards: [],

  },
  data() {

  },



}

</script>
<style>
@media (max-width: 640px) {
  /* .technology-image {
    display: none;
  } */

}
</style>
