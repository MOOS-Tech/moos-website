<template>
     <section class=" relative flex mb-10 overflow-hidden bg-green-and-black">
        <div class="lg:h-auto lg:max-w-none lg:mx-0 mx-auto ">
        <img src="@/assets/images/Vector_1.png" alt=""
          class="w-full  h-full lg:h-100 object-cover object-center absolute top-20 left-0 lg:absolute lg:max-h-100"
          style="z-index: -1; width: 1000px;">
      </div>
      <div class=" mx-auto w-full px- lg:max-w-7xl items-center  ">
        <div class="grid md:grid-cols-2 md:gap-16 lg:gap-48 md:justify-normal">
          <div class=" p-12 py-6 ">
            <div class=" text-center justify-center ">
              <h3 class="text-4xl font-bold">Ready to dive in?</h3>
              <form action="" class="mt-4 flex flex-col mb-4 ">
                <!-- <input type="email" name="email" id="email" placeholder="Enter your email" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" /> -->
                <FormInput type="name" name="name" id="name" placeholder="Name"></FormInput>
                <FormInput type="email" name="email" id="email" placeholder="Email"></FormInput>
                <FormSelectField   ></FormSelectField>
                <FormLargeTextBox></FormLargeTextBox>
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
    
    </section>
</template>
<script>
import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";
import FormSelectField from "@/components/common/Form/FormSelectField";
import FormLargeTextBox from "@/components/common/Form/FormLargeTextBox";

export default {
  name: "index",
  components: {
    FormInput,
    FormButton,
    FormSelectField,
    FormLargeTextBox

   
  },
  data() {
    return {
    }
}
}
</script>
<style scoped>
.bg-green-and-black {
  background: linear-gradient(75deg, #E3716F 50%, rgb(255, 255, 255) 50%);
  /* Other styling properties for the div */
}
@media (max-width: 640px) {
    .bg-green-and-black {
  background: #E3716F;
}
  }

</style>