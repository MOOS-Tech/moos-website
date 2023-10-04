<!-- <template>
  <div class="flex flex-col p-1">
    <div
      class="relative flex h-[220px] items-start gap-2 overflow-hidden rounded-lg shadow-lg"
    >
      <img
        :src="imageUrl"
        class="h-full w-[300px] object-cover transition-all duration-300 group-hover:opacity-90"
      />
      <div class="flex flex-col items-start justify-center gap-4 p-4">
        <h2 class="text-2xl font-semibold">{{ CardTitle}}</h2>
        <li v-for="(point, index) in CardBody" :key="index">{{ point }}</li>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "card",
  props: ["CardTitle", "CardBody" , "imageUrl"],
};
</script>

<style scoped>
</style> -->

<template>
         <div class="px-4 mb-8 py-8  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
    <div class="flex flex-col items-center  w-full lg:flex-row">
      
      <img class="p-2 max-h-[400px] max-w-[400px]" alt="logo" width="720" height="720" :src="imageUrl" />

      <div class="mx-auto" >
        
        <div class="max-w-xl mb-1">
          
        <h2 class="text-6xl pb-6 text-black-200">
            {{ CardTitle}}
          </h2>
          <ul class="text-black-100 list-none pl-5 pb-4 text-xl">
            <li v-for="(point, index) in CardBody" :key="index" class="pb-4">
              <i class="fas fa-check text-green-500 mr-2"></i>{{ point }}
            </li>
          </ul>
        </div>
        <div className='space-x-4'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "card",
  props: ["CardTitle", "CardBody" , "imageUrl"],
};
</script>

<style scoped>
</style> 
 


