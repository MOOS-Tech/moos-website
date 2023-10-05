<template>
    <section
      class="pt-20 lg:pb-10 lg:max-w-10xl w-full px-5 lg:px-10 sm:px-10 md:px-12 flex flex-col relative bg-green-100 background-triangle">
      <!-- <div class="lg:max-w-none lg:mx-0 mx-auto">
        <img src="@/assets/images/Rectangle.png" alt=""
          class="w-full h-full lg:h-96 object-cover absolute top-40 left-0 lg:absolute lg:max-h-none"
          style="z-index: -1" />
      </div> -->
      <div class="mx-4 flex flex-wrap gap-12 md:flex-row items-center justify-center">
        <WhiteCard/>
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
.background-triangle {

    
    /* background: linear-gradient(180deg, transparent 30%, #1EB2A0 30%); */
    background: linear-gradient(18.5deg, transparent 50%, #1EB2A0 50%) bottom left,
            linear-gradient(-15deg, transparent 40%, #1EB2A0 40%) bottom right;
background-size: 55% 70%, 45.1% 70%;
background-repeat: no-repeat;
background-position: left bottom, right bottom;

  /* Other styling properties for the div */
}

@media (max-width: 640px) {
  .background-triangle {
    background: #1EB2A0;
  }
}
</style>