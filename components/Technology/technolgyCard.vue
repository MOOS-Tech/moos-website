<template>
    <div class="py-20">
      <section class="relative  px-5 lg:px-20 " v-for="(card, index) in cards" :key="index" >
        <div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row  ">
          <div
            class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-2/3">
            <h1 class="text-normal-title-heading pb-6 text-green-200 font-semibold py-2">
             {{card.title}}
            </h1>
            <h2 class="text-black-200 font-semibold text-sub-title-heading pb-6">{{ card.description }}</h2>
          </div>
          <div
            class="flex flex-1 lg:w-1/3 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl justify-end items-center">
            <img :src = "card.imageUrl" alt="Hero image" width="720" height="720"
              class="lg:absolute lg:w-full lg:h-full  object-cover lg:max-h-none max-h-[550px] max-w-[250px]" />
          </div>
        </div>
      </section>
  
  
    </div>
  </template>
  
  <script>
 
  export default {
    name: "technologyCard",
  
    components: {  },
    data() {
      return {
        cards: [
       {
           imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
          title: "MOOS sensors",
          description:
            "Cloud-connected sensors emitting signal in real-time",
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "MOOS sensors",
          description:
          "Cloud-connected sensors emitting signal in real-time",
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "MOOS sensors",
          description:
          "Cloud-connected sensors emitting signal in real-time",
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "MOOS sensors",
          description:
          "Cloud-connected sensors emitting signal in real-time,Cloud-connected sensors emitting signal in real-time",
        },
    ]
      };
    },
  
  
  
  }
 
  </script>