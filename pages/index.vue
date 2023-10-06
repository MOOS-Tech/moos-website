<template>
  <div>
    <!-- hero section -->
    <section class="relative py-10 lg:py-20 bg-white px-5 lg:px-20">
      <div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-40">
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
      </div>
    </section>

    <!-- ====== Blog Section Start -->
    <Blogs />

    <!-- ====== Partner Section-->
    <section class="pt-20 lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex mx-auto flex-col justify-center">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h3 class="text-2xl font-bold text-black-100">OUR PARTNERS</h3> 
      </div>
      <div class=" py-5 pb-10 ">
        <div class="mx-auto max-w-5xl px-6 lg:px-8 lg-flex-row">
          <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 " v-for="(item, index) in partners"
              :key="index" src="@/assets/images/VueJS.png" alt="Transistor" width="158" height="48" />
          </div>
        </div>
      </div>

    </section>

    <!-- ====== Quote Section-->
    <section class="pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row">
      <div class="container py-10 mx-auto sm:flex sm:justify-center w-full sm:px-10 md:px-12 lg:px-32">
        <div class="flex flex-col text-center w-full items-center">
          <h1 class="italic sm:text-2xl text-3xl xl:text-5xl  mb-4 text-black-100">
            {{ Quote }}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            {{ Speaker }}
          </p>
        </div>
      </div>
    </section>

    <!-- ====== Card Sections-->
    <section class="pt-20 pb-10 lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex mx-auto flex-col lg:flex-row py-10">
      <div
        class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 rounded-lg bg-white shadow-3xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(card, index) in cards" :key="index" class="bg-white rounded-lg border-r">
            <a href="#!">
              <img src="@/assets/images/VueJS.png" alt="Image Alt Text" class="h-12 w-15 mx-auto mt-4" />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 text-center">
                {{ card.title }}
              </h5>
              <p class="mb-4 text-base text-neutral-600">
                {{ card.description }}
              </p>
            </div>
            <div class="absolute top-0 left-0 h-full bg-green-200 w-1"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== Map and the Contact Section-->

      <MapAndContact />

  </div>
</template>

<script>
import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";
import Blogs from "~/components/HomePage/blogs.vue";
import MapAndContact from "~/components/HomePage/mapAndContact.vue";

export default {
  name: "index",
  components: {
    FormInput,
    FormButton,
    Blogs,
    MapAndContact,
  },
  data() {
    return {
      partners: [
        {
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
      ],
      cards: [
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
          title: "Card Title 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        // Add more card objects as needed
      ],
      Quote:
        "During our pilot we achieved a three month ROI, as we reduced our out of stock by 50% and spend 37% less time on stock counting.”",
      Speaker: "Danny Bailey, CFO",
    };
  },
};
</script>

<style scoped>


</style>
