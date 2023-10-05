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
      <div class="mx-4 flex flex-wrap flex-col gap-12 md:flex-row 
    items-center justify-center">

        <div class="w-full px-4 md:w-1/2 py-4 lg:w-1/4 bg-white shadow-3xl rounded-lg" v-for="(item, index) in items"
          :key="index">
          <div class="mx-auto mb-10 px-5">
            <div>
              <h3>
                <a href="javascript:void(0)"
                  class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                  {{ item.title }}
                </a>
              </h3>
              <p class="text-body-color text-base">
                {{ item.description }}
              </p>
            </div>
            <div class="flex justify-left mt-3">
              <ul>
                <li class="flex items-center" v-for="(item, index) in blogs" :key="index">
                  <i class="fas fa-check-circle text-green-200"></i>
                  <span class="text-gray-700 text-lg ml-3">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-10  flex flex-col items-center gap-4 lg:flex-row">
              <FormButton class=" bg-white border-2 border-green-200 text-green-200 ">
                Learn More
              </FormButton>
            </div>
          </div>
        </div>

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
          <h1 class="sm:text-2xl text-4xl xl:text-5xl  title-font mb-4 text-black-200">During our pilot we achieved a
            three
            month
            ROI, as we reduced our out of stock by 50% and spend
            37% less time on stock counting.”</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Danny Bailey, CFO</p>
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
    <section class=" pt-20 relative flex mb-10 ">
      <div class=" mx-auto w-full px-5 lg:max-w-7xl items-center ">
        <div class="grid gap-2 md:grid-cols-2 md:gap-12 lg:gap-48 mx-auto ">
          <div class=" p-12 py-6 ">
            <div class="mx-auto md:mx-0 text-center justify-center">
              <h3 class="text-4xl font-bold">Ready to dive in?</h3>
              <form action="" class="mt-4 flex flex-col mb-4">
                <!-- <input type="email" name="email" id="email" placeholder="Enter your email" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" /> -->
                <FormInput type="name" name="name" id="name" placeholder="Name"></FormInput>
                <FormInput type="email" name="email" id="email" placeholder="Email"></FormInput>
                <FormInput type="email" name="email" id="email" placeholder="Email"></FormInput>
              </form>
              <FormButton>Book a Meeting</FormButton>
            </div>
          </div>
          <div class="flex justify-center md:justify-end ">
            <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no"
              src="https://maps.google.com/maps?q=MOOS%20International,%20Spaklerweg%2014,%20B4,%201096%20BA%20Amsterdam,%20Netherlands&output=embed"
              style=""></iframe>
          </div>
        </div>
      </div>
      <div class="lg:h-auto lg:max-w-none lg:mx-0 mx-auto ">
        <img src="@/assets/images/Vector_1.png" alt=""
          class="w-full  h-full lg:h-96 object-cover absolute top-20 left-0 lg:absolute lg:max-h-none "
          style="z-index: -1; width: 950px;">
      </div>
    </section>

  </div>
</template>

<script>

import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";

export default {
  name: "index",
  components: {
    FormInput,
    FormButton
  },
  data() {
    return {
      items: [
        {
          date: 'Dec 22, 2023',
          title: 'Inventory Management',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          date: 'Jan 15, 2024',
          title: 'Inventory Management',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          date: 'Feb 10, 2024',
          title: 'Inventory Management',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
      ],
      blogs: ["Item 1", "Item 2", "Item 3"],
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
    };
  },
}
</script>

<style scoped></style>
