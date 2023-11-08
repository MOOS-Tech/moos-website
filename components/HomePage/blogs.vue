<template>
    <section
      class="relative flex lg:py-10  px-5 lg:px-10 sm:px-10 md:px-12 background-triangle ">
      <!-- <div class="lg:max-w-none lg:mx-0 mx-auto">
        <img src="@/assets/images/Rectangle.png" alt=""
          class="w-full h-full  object-cover absolute  left-0 lg:absolute lg:max-h-none"
          style="z-index: -1" />
      </div> -->
      <div class="bg-image"></div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 py-10">
        <WhiteCard/>
      </div>
      </div>
    </section>
  </template>

<script>
import WhiteCard from "~/components/HomePage/smallWhiteCard.vue";

export default {
  name: "blogs",
  components: {

    WhiteCard,
    
  },
}
</script>
<style scoped>
.bg-image {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 50vh;
  max-height: 45vh;
  background-image: url('/assets/images/Rectangle.png');
  background-size: 100% 100%; /* Use 100% for both width and height */
  background-repeat: no-repeat;
  z-index: 0;
}

/* .background-triangle {

   
    background: linear-gradient(18.5deg, transparent 50%, rgba(30, 178, 160, 0.5) 50%) bottom left,
            linear-gradient(-15deg, transparent 40%, rgba(30, 178, 160, 0.5) 40%) bottom right;
background-size: 55% 70%, 45% 70%;
background-repeat: no-repeat;
background-position: left bottom, right bottom;


} */

@media (max-width: 640px) {
  .background-triangle {
    background: rgba(30, 178, 160, 0.5);
  }
  .bg-image{
    display: none;
  }
}
</style>