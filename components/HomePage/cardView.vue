<template>
  <section class="pt-20 pb-10 lg:max-w-7xl w-full px-5 flex mx-auto flex-col lg:flex-row py-10" data-aos="fade-up"
    data-aos-duration="1000">
    <div
      class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 rounded-lg bg-white shadow-3xl">
      <div
        :class="'grid ' + (this.cardData.length > 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-' + this.cardData.length) + ' gap-6'">

        <div v-for="(card, index) in cardData" :key="index"
          :class="['bg-white', 'rounded-lg', index !== cardData.length - 1 ? 'border-r' : '']">
          <a href="#!">
            <img :src="computeURL(card.url)" alt="Image Alt Text" class="h-80 w-100 mx-auto mt-4 rounded-md" />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-small-title-heading text-black-200 text-center">
              {{ card.title }}
            </h5>
            <p class="mb-4 text-md text-black-200">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: "card View",
  props: {
    baseUrl: String,
    cards: [],
    cardData: []
  },
  // computed: {
  //   computeURL(imageURL) {
  //     if (imageURL.includes("https://")) {
  //       return imageURL
  //     }
  //     return this.baseUrl + imageURL
  //   }
  // },
  methods:{
    computeURL(imageURL) {
      if (imageURL.includes("https://")) {
        return imageURL
      }
      return this.baseUrl + imageURL
    }
  }

};
</script>
