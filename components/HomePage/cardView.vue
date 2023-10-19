<template>
    <section
      class="pt-20 pb-10 lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex mx-auto flex-col lg:flex-row py-10" >
      <div
        class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 rounded-lg bg-white shadow-3xl"  data-aos="fade-up"  data-aos-duration="1000">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(card, index) in cards" :key="index" class="bg-white rounded-lg border-r">
            <a href="#!">
              <img :src="'http://localhost:1337' + card.attributes.ImageUrl.data.attributes.url" alt="Image Alt Text" class="h-12 w-15 mx-auto mt-4" />
            </a>
            <div class="p-6">
              <h5 class="mb-2  text-small-title-heading text-black-200 text-center">
                {{ card.attributes.title }}
              </h5>
              <p class="mb-4 text-regular-title-heading text-black-200">
                {{ card.attributes.description }}
              </p>
            </div>
            <div class="absolute top-0 left-0 h-full bg-green-200 w-1"></div>
          </div>
        </div>
      </div>
    </section>
</template>
  <script>
import { getCardViews } from "@/services/home.js";
export default {
  name: "card View",
 
  data() {
    return {
      
      cards: [
        // {
        //   imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
        //   title: "Card Title 1",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        // },
        // {
        //   imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
        //   title: "Card Title 2",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        // },
        // {
        //   imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
        //   title: "Card Title 2",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        // },
       
      ],
     
    }
  },
  async created() {
    try {
      const response = await getCardViews();
      this.cards = response.data.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
