<template>
  <section class="flex mb-16 mt-20 justify-center bg-green-and-black">
    <div class=" mx-auto w-full lg:max-w-7xl ">
      <div class="grid md:grid-cols-2 md:gap-12 lg:gap-48 ">
        <section class="mt-6 mb-4 place-content-center ">
          <div class="mb-6 text-center">
            <h1 class="text-3xl font-bold text-black-200 ">Ready to dive in?</h1>
          </div>
          <div class="flex flex-col items-center justify-center ">
            <FormInput type="text" name="name" id="name" placeholder="Name "></FormInput>
            <FormInput type="email" name="email" id="email" placeholder="Email"></FormInput>
            <FormSelectField placeholder="Request demonstration"></FormSelectField>
            <FormLargeTextBox placeholder="Your message"></FormLargeTextBox>
            <FormButton class="text-white">Book a Meeting</FormButton>
          </div>
        </section>
        <div class="flex justify-center md:justify-end  ">
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
  background: linear-gradient(75deg, #FACDCC 50%, rgb(255, 255, 255) 50%);
  /* Other styling properties for the div */
}

@media (max-width: 640px) {
  .bg-green-and-black {
    background: #FACDCC;
  }
}
</style>