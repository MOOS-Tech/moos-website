<template>
  <section class="pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row"
           data-aos="fade-up"
           data-aos-duration="1000">
    <div class="container py-10 mx-auto sm:flex sm:justify-center w-full sm:px-10 md:px-12 lg:px-48">
      <div class="flex flex-col text-center w-full items-center auto-zoom">
        <div class="relative flex items-center " >
          <h1 class="italic text-normal-title-heading mb-4 text-black-200 ">
            “ {{ Quote }} ”
          </h1>
        </div>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{ Speaker }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: "quote",
  props: {
    Quote: "",
    Speaker: "",
  }
};
</script>
<style scoped>
.auto-zoom {
  animation: zoomAnimation 3s infinite alternate; /* Adjust the duration as needed */
}

@keyframes zoomAnimation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }
}
</style>
