<template>
  <section
      class="pt-20 pb-10 lg:max-w-7xl w-full   px-5  flex mx-auto flex-col lg:flex-row py-10"
      data-aos="fade-up" data-aos-duration="1000">
    <div
        class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 rounded-lg bg-white shadow-3xl"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(card, index) in cardData" :key="index" class="bg-white rounded-lg border-r">
          <a href="#!">
            <img :src="baseUrl + card.url" alt="Image Alt Text" class="h-12 w-15 mx-auto mt-4"/>
          </a>
          <div class="p-6">
            <h5 class="mb-2  text-small-title-heading text-black-200 text-center">
              {{ card.title }}
            </h5>
            <p class="mb-4 text-regular-title-heading text-black-200">
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
  }
};
</script>
