<template>
  <!-- <Default/> -->
  <!-- hero section -->
  <section class="relative py-10 lg:py-20 bg-white">
    <div class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-36">

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
          <button
            class="flex items-center py-4 text-sm font-bold text-white px-7 bg-green-200 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
            Book a Meeting</button>
        </div>

      </div>
      <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
        <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359"
          class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96">
      </div>
    </div>
  </section>
</template>

<script>
import Default from "../layouts/default";
export default {
  name: "index",
  components: { Default }
}
</script>

<style scoped></style>
