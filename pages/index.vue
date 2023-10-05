<template>
  <div>
    <!-- hero section -->
    <section class="relative py-10  lg:py-20 bg-white px-5 lg:px-20">
      <div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12  flex flex-col lg:flex-row gap-12 lg:gap-40">

        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

          <h1 class="text-3xl leading-tight sm:text-4xl md:text-4xl xl:text-5xl
             text-gray">
            MOOS for effortless
            inventory operations
          </h1>
          <p class="mt-8 text-gray-700">
            Digitize your shelves & racks for full visibility where it happens: the MOOS effortless inventory operating
            system​.
          </p>
          <div class="mt-10  flex flex-col items-center gap-4 lg:flex-row">
            <FormButton>
              Book a Meeting
            </FormButton>
          </div>
        </div>
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359"
            class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96">
        </div>
      </div>
    </section>

    <!-- ====== Blog Section Start -->
    <section
      class="pt-20 pb-10 lg:pb-20 lg:max-w-10xl w-full px-5 lg:px-10 sm:px-10 md:px-12  flex flex-col lg:flex-row relative ">
      <div class=" lg:max-w-none lg:mx-0 mx-auto  ">
        <img src="@/assets/images/Rectangle.png" alt=""
          class="w-full  h-full lg:h-96 object-cover absolute top-40 left-0 lg:absolute lg:max-h-none "
          style="z-index: -1;">
      </div>
      <div class="mx-4 flex flex-wrap  gap-12 md:flex-row items-center justify-center">
        <WhiteCard></WhiteCard>
      </div>
    </section>

    <!-- ====== Partner Section-->
    <section class="pt-20 lg:max-w-10xl w-full  sm:px-10 md:px-12 px-8 lg:px-10 flex flex-col lg:flex-row justify-center">
      <div class=" container w-full rounded-lg bg-white py-4 sm:justify-center  sm:px-10 md:px-12 lg:px-20">
        <div class="flex flex-col  py-4 px-8">
          <h3 class=" text-2xl text-black-200">OUR PARTNERS</h3>
        </div>
        <div class="flex flex-wrap items-center justify-center w-full ">
          <div v-for="(item, index) in users" :key="index" class="flex flex-col items-center mx-2 py-5">
            <img src="@/assets/images/VueJS.png" alt="" class=" w-36 h-12 object-cover">
            <h5 class="font-semibold">{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== Quote Section-->
    <section class="pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row">
      <div class="container py-10 mx-auto sm:flex sm:justify-center w-full sm:px-10 md:px-12 lg:px-20">
        <div class="flex flex-col text-center w-full items-center ">
          <h1 class="sm:text-2xl text-4xl xl:text-5xl  title-font mb-4 text-black-200">{{ Quote }}</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{{ Speaker }}</p>
        </div>
      </div>
    </section>

    <!-- ====== Card Sections-->
    <section class=" pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row py-10 ">
      <div
        class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12  rounded-lg bg-white shadow-3xl ">
        <div class="flex flex-col  sm:shrink-0 sm:grow sm:basis-0   items-center" v-for="(card, index) in cards"
          :key="index">
          <a href="#!">
            <img src="@/assets/images/VueJS.png" alt="Image Alt Text" class="h-12 w-15 mr-2" />
          </a>
          <div class="px-10 py-10">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
              {{ card.title }}
            </h5>
            <p class="mb-4 text-base text-neutral-600">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== Map and the Contact Section-->
    <MapAndContact/>

  </div>
</template>

<script>

import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";
import WhiteCard from "~/components/HomePage/smallWhiteCard.vue";
import MapAndContact from "~/components/HomePage/mapAndContact.vue";

export default {
  name: "index",
  components: {
    FormInput,
    FormButton,
    WhiteCard,
    MapAndContact
  },
  data() {
    return {


      users: [
        {

          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        {

          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        {

          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        {

          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        {

          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },

      ],
      cards: [
        {
          imageUrl:
            "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
          title: "Card Title 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        },
        {
          imageUrl:
            "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        },
        {
          imageUrl:
            "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        },
        // Add more card objects as needed
      ],
      Quote: "During our pilot we achieved a three month ROI, as we reduced our out of stock by 50% and spend 37% less time on stock counting.”",
      Speaker : "Danny Bailey, CFO"

    };
  },
}
</script>

<style scoped></style>
