<template>
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
</template>
<script>
import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";

export default {
  name: "index",
  components: {
    FormInput,
    FormButton,
   
  },
  data() {
    return {
    }
}
}
</script>
