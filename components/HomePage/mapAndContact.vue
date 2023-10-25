<template>
  <section class="flex mb-16 mt-20 justify-center bg-green-and-black" data-aos="fade-up" data-aos-duration="1000">
    <div class=" mx-auto w-full lg:max-w-7xl ">
      <div class="grid md:grid-cols-2 md:gap-12 lg:gap-48 ">
        <section class="mt-6 mb-4 place-content-center ">
          <div class="mb-6 text-center">
            <h1 class="text-normal-title-heading font-bold text-black-200 ">Ready to dive in?</h1>
          </div>
          <div class="flex flex-col items-center justify-center ">
            <FormInput type="text" name="name" id="name" placeholder="Name" v-model="customerName"/>
            
            <FormInput type="email" name="email" id="email" placeholder="Email" v-model="customerEmail"/>
            <FormSelectField placeholder="Request demonstration" v-model="requestOption"/>
            <FormLargeTextBox placeholder="Your message" v-model="customerMessage"/>
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
      customerName: "Test",
      customerEmail: "t@t.com",
      requestOption: "request demonstration",
      customerMessage: "test"
    }
  },
  watch: {
    customerName(newVal) {
      console.log('customerName changed to:', newVal);
    },
    customerEmail(newVal) {
      console.log('customerEmail changed to:', newVal);
    },
    requestOption(newVal) {
      console.log('requestOption changed to:', newVal);
    },
    customerMessage(newVal) {
      console.log('customerMessage changed to:', newVal);
    }
  },
  methods: {
     Submitfn() {
      console.log("Form Data", this.customerName);
      let payload = {
        name: this.customerName,
        email: this.customerEmail,
        request_demonstration: this.requestOption,
        message: this.customerMessage
      }
      try {
        const response =  bookMeeting(payload);
        console.log("Form Data", response);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
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