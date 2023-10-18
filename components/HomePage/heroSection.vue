<template>
  <section class="relative py-10 lg:py-20 px-5 lg:px-20">

    <div class="overflow-hidden ">
      <div class="mx-auto max-w-7xl lg:flex   w-full flex flex-col lg:flex-row  ">

        <div class="mx-auto w-full lg:w-1/2 lg:max-w-lg ">
          <div class="mx-auto lg:max-w-7xl w-full  flex flex-col lg:flex-row gap-12 lg:gap-40 pb-5 ">
            <div
              class="relative flex flex-col items-center text-center lg:text-left lg:items-start  lg:py-7 lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1">

              <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText" />
              <p class="mt-8 text-black-200 text-regular-title-heading ">
                {{ para }}
              </p>
              <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row">
                <FormButton class="text-white"> Book a Meeting </FormButton>
              </div>
            </div>
          </div>
          <div class="absolute w-2/4 h-3/4 flex items-start justify-end">
                <div class="absolute w-2/4 h-3/5 bg-transparent animated-rectangle">
                  <div class="small-rectangle "></div>
                  <div class="small-rectangle-down "></div>
                </div>
              </div>
        </div>
        <div class="mx-auto lg:w-1/2 justify-center relative">
          
          <div class="absolute  w-4/5 h-3/4 flex items-center justify-end lg:w-5/6">
                <div class="absolute w-4/5 h-2/4  bg-transparent animated-rectangle ">
                  <div class="small-rectangle-up "></div>
                </div>
               
              </div>
              
          <div class="mx-auto w-full flex flex-wrap items-center gap-6 sm:gap-8 lg:contents  ">
            
            <div
              class=" order-first mb-10 flex flex-auto lg:justify-end md:justify-center lg:w-auto lg:flex-none  ">

              <img
                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                alt="" class="aspect-[5/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover relative" />


            </div>
            
            <div
              class=" contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:items-start lg:justify-end md:justify-center lg:gap-x-8 ">
             
              <div class=" flex flex-none justify-end  self-end lg:w-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt="" class="aspect-[5/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>

              <div class="flex flex-auto justify-center lg:w-auto lg:flex-none relative">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  alt="" class="aspect-[8/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </section>
</template>


<script>

import FormButton from "@/components/common/Form/FormButton";

export default {
  name: "index",
  components: {
    FormButton,


  },
  data() {
    return {
      ComTitle: " for effortless inventory operations",
      boldText: "MOOS",
      para: "Digitize your shelves & racks for full visibility where it happens: the MOOS effortless inventory operating system​."


    }
  }


}

</script>
<style scoped>
.animated-rectangle {

  background:
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y;
  /* background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px; */
  background-size: 12px 3px, 12px 3px, 3px 12px, 3px 12px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: border-dance 0.8s infinite linear;
  border-radius: 5px;
}
.small-rectangle {
  width: 50px; 
  height: 50px;
  position: absolute;
  background:
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y;
  /* background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px; */
  background-size: 12px 3px, 12px 3px, 3px 12px, 3px 12px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: border-dance 0.8s infinite linear;
  top: -20px; 
  left: -20px;
  border-radius: 5px;
}
.small-rectangle-down{
  width: 50px; 
  height: 50px;
  position: absolute;
  background:
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y;
  /* background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px; */
  background-size: 12px 3px, 12px 3px, 3px 12px, 3px 12px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: border-dance 0.8s infinite linear;
  bottom: -20px; 
  right: -20px;
  border-radius: 10px;
}
.small-rectangle-up {
  width: 40px; 
  height: 30px;
  position: absolute;
  background:
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #109888 50%, transparent 0) repeat-y;
  /* background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px; */
  background-size: 12px 3px, 12px 3px, 3px 12px, 3px 12px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: border-dance 0.8s infinite linear;
  top: 40px; 
  left: -20px;
  border-radius:10px;
}
@keyframes border-dance {

  100% {
    background-position: 12px 0, -12px 100%, 0 -12px, 100% 12px;
  }
}

@media (max-width: 640px) {
  .animated-rectangle {
    background: none;
  }
  .small-rectangle
  {
    background: none;
  }
  .small-rectangle-down{
    background: none;
  }
  .small-rectangle-up{
    background: none;
  }
}
</style>







