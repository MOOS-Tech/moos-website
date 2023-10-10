<template>
  <section class="relative py-10 lg:py-20 bg-white px-5 lg:px-20">

    <div class="overflow-hidden ">
      <div class="mx-auto max-w-7xl lg:flex sm:px-10 md:px-12  w-full flex flex-col lg:flex-row  ">
       
          <div class="mx-auto w-full lg:w-1/2 lg:max-w-lg ">
            <div class="mx-auto lg:max-w-7xl w-full  flex flex-col lg:flex-row gap-12 lg:gap-40 pb-5">
              <div
                class="relative flex flex-col items-center text-center lg:text-left lg:items-start  lg:py-7 lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1">

                <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText" />
                <p class="mt-8 text-black-200 text-regular-title-heading ">
                  Digitize your shelves & racks for full visibility where it happens:
                  the MOOS effortless inventory operating system​.
                </p>
                <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row">
                  <FormButton class="text-white"> Book a Meeting </FormButton>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto lg:w-1/2 justify-center">
            <div class="mx-auto w-full flex flex-wrap items-center  gap-6 sm:gap-8 lg:contents">
              <div class="order-first mb-10 flex flex-auto lg:justify-end md:justify-center lg:w-auto lg:flex-none ">
                
                  <img
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt="" class="aspect-[5/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                
              </div>
              <div
                class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:items-start lg:justify-end md:justify-center lg:gap-x-8">
                <div class=" flex flex-none justify-end  self-end overflow-hidden lg:w-auto">
                  <img
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt="" class="aspect-[5/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                </div>
                <div class="flex flex-auto justify-center lg:w-auto lg:flex-none">
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
    FormButton
  },
  data() {
    return {
      ComTitle: " for effortless inventory operations",
      boldText: "MOOS"
    }
  }
}
</script>
