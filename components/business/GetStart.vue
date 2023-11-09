<template>
  <div class="pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row py-10">
    <section class="pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 py-10  mx-auto lg:max-w-7xl  bg-white">
      <!-- Title in a new row -->
      <div class="mb-10">
        <h2 class="text-sub-title-heading font-semibold text-black-200 ">How To Get Started</h2>
      </div>

      <!-- Cards in one row with separate columns -->
      <div class="flex flex-col sm:flex-row">
        <div
          class="flex flex-col sm:shrink-0 sm:grow sm:basis-0 "
          v-for="(card, index) in cards"
          :key="index"
        >
          <a href="#!">
            <div
              class="h-10 w-10 mr-2 mb-2 inline-flex items-center justify-center bg-green-200 rounded-full border text-white mx-2"
            >
              {{ index + 1 }}
            </div>
          </a>
          <div class="">
            <h5
              class="mb-2 text-small-title-heading font-medium leading-tight text-neutral-800 mt-2 mx-2"
            >
              {{ card.title }}
            </h5>
            <p class="mb-4 text-regular-title-heading text-neutral-600 mx-2">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

  

<script>
export default {
  name: "GetStart",
  components: {},
  props:{
    cards:[]
  },
  data() {
    return {
      // cards: [
      //   {
      //     imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
      //     title: "Card Title 1",
      //     description:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      //   },
      //   {
      //     imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
      //     title: "Card Title 2",
      //     description:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      //   },
      //   {
      //     imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
      //     title: "Card Title 2",
      //     description:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      //   },
      // ],
    };
  },
};
</script>

<style>
.bg-primary-500 {
  background-color: "#777777";
}
</style>