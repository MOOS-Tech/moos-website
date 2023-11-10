<template>
  <section class="flex  mt-20 justify-center " >
    <div class=" mx-auto w-full lg:max-w-7xl ">
      <div class="grid md:grid-cols-2 md:gap-12 lg:gap-48 bg-green-and-black">
        <section class="mt-6 mb-4 place-content-center ">
          <div class="mb-6 text-center">
            <h1 class="text-normal-title-heading font-bold text-black-200 ">Ready to dive in?</h1>
          </div>
          <div class="flex flex-col items-center justify-center">
            <FormInput v-model="customerName" type="text" name="name" id="name" placeholder="Name" />
            <FormInput v-model="customerEmail" type="email" name="email" id="email" placeholder="Email" />
            <FormSelectField v-model="requestOption" placeholder="Request demonstration" />
            <FormLargeTextBox v-model="customerMessage" placeholder="Your message" />
            <FormButton class="text-white" @click="Submitfn">Book a Meeting</FormButton>
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
import { bookMeeting } from "@/services/home.js";

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
      customerName: "",
      customerEmail: "",
      requestOption: "Test",
      customerMessage: ""

    }
  },

  methods: {
    async Submitfn() {
      let payload = {
        data: {
          name: this.customerName,
          email: this.customerEmail,
          request_demonstration: this.requestOption,
          message: this.customerMessage
        }
      }
      try {
        const response = await bookMeeting(payload);
        console.log(response)
        if(response.status === 200){
          this.customerEmail = '';
          this.customerName = '';
          this.requestOption = 'Request demonstration';
          this.customerMessage = '';
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
}
</script>
<style scoped>
.bg-green-and-black {
  background: linear-gradient(70deg, #FACDCC 50%, rgb(255, 255, 255) 50%);
  /* Other styling properties for the div */
}

@media (max-width: 640px) {
  .bg-green-and-black {
    background: #FACDCC;
  }
}
</style>
