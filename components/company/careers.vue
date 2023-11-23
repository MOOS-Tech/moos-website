<template>
  <section class="relative flex mb-16  justify-center " data-aos="fade-up" data-aos-duration="1000">
    <div class="bg-image"></div>
    <div class=" mx-auto w-full lg:max-w-7xl relative ">
      <div class="grid md:grid-cols-2 md:gap-12 lg:gap-48 pt-12 pb-12">

        <div class="flex justify-center md:justify-end w-full self-center">
          <div class="overflow-y-auto w-full   " style="max-height: 400px;">
            <div class="flex flex-col space-y-4 p-4">
              <div v-for="card in cardData" :key="card.id" class="bg-white p-4 rounded-lg shadow-md">
                <h2 class="text-regular-title-heading font-semibold">{{ card.title }}</h2>
                <ul>
                  <li v-for="description in card.qualifications" :key="description.id" class="sm:text-sm">
                    <span class="text-green-500 mr-2">
                      <i class="fas fa-check"></i>
                    </span>
                    {{ description }}
                  </li>
                </ul>
                <div class="flex gap-2">
                  <div>
                    <button class="bg-green-200 text-white px-4 py-1 rounded-md mt-4" @click="openLink(card.link)">View
                      Job
                    </button>
                  </div>
                  <div>
                    <button class="bg-green-200 text-white px-4 py-1 rounded-md mt-4"
                      @click="setSelectedPosition(card.title)">Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="mt-6 mb-4 place-content-center ">
          <div class="mb-6 text-center">
            <h1 class="text-normal-title-heading font-bold text-black-200 ">Join with us</h1>
          </div>
          <div class="flex flex-col items-center justify-center">
            <FormSelectField ref="selectField" :name="selectedPosition" placeholder="Position" :options="options"
              v-model="selectedPosition" :validationErrorMessage="positionValidationErrorMessage" />
            <FormInput v-model="customerName" type="text" name="name" id="name" placeholder="Name" :isRequired="true"
              :validationErrorMessage="nameValidationErrorMessage" />
            <FormInput v-model="customerEmail" type="email" name="email" id="email" placeholder="Email" :isRequired="true"
              :validationErrorMessage="emailValidationErrorMessage" @input="validateEmail" />
            <FormInput v-model="customerLinkedin" type="text" name="linkedin" id="linkedin" :isRequired="true"
              placeholder="LinkedIn Profile" :validationErrorMessage="linkedinValidationErrorMessage" />

            <div class="mb-3 relative">
              <input
                class="rounded-[4px] border p-3 pr-10 hover:outline-none focus:outline-none hover:border-green-200 h-10 w-72 sm:text-sm cursor-pointer"
                placeholder="Upload Resume" :value="selectedFileName" />

              <label
                class="absolute right-0 top-0 cursor-pointer h-full w-8 text-center self-center items-center bg-gray-300">
                <i class="fas fa-paperclip text-gray-400 pt-3"></i>
                <input id="file" type="file" class="hidden" accept=".pdf" @change="uploadFile" ref="fileInput" />
              </label>

            </div>
            <p class="text-red-500 text-sm">{{ FileValidationErrorMessage }}</p>
            <FormButton class="text-white" @click="Submitfn">Submit</FormButton>
          </div>
        </section>
      </div>
    </div>
    <Notification ref="notificationRef"></Notification>
  </section>
</template>

<script>
import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";
import FormSelectField from "@/components/common/Form/FormSelectField";
import FormLargeTextBox from "@/components/common/Form/FormLargeTextBox";
import { joinWithUs, getCareerPositions, uploadFile } from "@/services/about.js";
import Notification from '../common/Notification.vue';
import CheckEmail from "@/util/CheckEmail.js";

export default {
  name: "careers",
  props: {
    cards: [],
    cardData: [],
  },
  components: {
    FormInput,
    FormButton,
    FormSelectField,
    FormLargeTextBox,
    Notification
  },
  data() {
    return {
      customerName: "",
      customerEmail: "",
      customerLinkedin: "",
      customerResume: "",
      cardData: [],
      cards: [],
      options: [],
      Position: "Positions",
      selectedPosition: '',
      selectedFile: new FormData(),
      selectedFileName: "",
      SelectedValue: "",
      notificationMessage: "",
      show: false,
      emailValidationErrorMessage: "",
      nameValidationErrorMessage: "",
      linkedinValidationErrorMessage: "",
      FileValidationErrorMessage: "",
      positionValidationErrorMessage: "",
      isFormSubmitted: false,
    }
  },

  async created() {
    await this.fetchCareerPositions();
  },
  computed: {
    emailValidationErrorMessage() {
    
      if (!this.customerEmail && this.isFormSubmitted) {
        return 'Email is required.';
      } else {
        if (this.customerEmail && !CheckEmail(this.customerEmail)) {
          return 'Invalid email format.';
        }
      }
      return '';
    },
    nameValidationErrorMessage() {
      if (this.isFormSubmitted && !this.customerName) {
        return 'Name is required.';
      }
      return '';
    },
    linkedinValidationErrorMessage() {
      if (this.isFormSubmitted && !this.customerLinkedin) {
        return 'Linkedin is required.';
      }
      return '';
    },
    positionValidationErrorMessage() {
      if (this.isFormSubmitted && !this.selectedPosition) {
        return 'position is required.';
      }
      return '';
    },
    FileValidationErrorMessage() {
      if (this.isFormSubmitted && !this.selectedFileName) {
        return 'Please upload a file';
      }
      return '';
    },
  },
  methods: {
    openLink(val) {
      window.open(val, '_blank');
    },
    setSelectedPosition(val) {
      this.selectedPosition = val;
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    uploadFile() {
      const fileInput = this.$refs.fileInput;
      if (fileInput.files.length > 0) {
        this.selectedFile = fileInput.files[0];
        this.selectedFileName = fileInput.files[0].name;
      }
    },
    async Submitfn() {
      this.isFormSubmitted = true;
      if (this.validateForm() && this.selectedFile) {

        const formData = new FormData();
        formData.append('files', this.selectedFile);
        const resume = await uploadFile(formData);
        let payload = {
          data: {
            name: this.customerName,
            email: this.customerEmail,
            position: this.selectedPosition,
            linkedIn_profile: this.customerLinkedin,
            resume_link: resume.data[0].url,
          }
        }
        try {

          const response = await joinWithUs(payload);

          this.resetfn()
          this.$refs.notificationRef.showNotification('success', 'Form submit sucessful!');

        } catch (error) {
          console.error("Error fetching data:", error);
          this.$refs.notificationRef.showNotification('error', 'Error submiting form!');
        }
      } else {


      }

    },

    async fetchCareerPositions() {

      try {
        const response = await getCareerPositions();
        this.cards = response.data.data
        this.cardData = this.cards.map(card => ({
          title: card.attributes.job_title,
          qualifications: card.attributes.qualifications.data.map(description => description.attributes.qualification),
          link: card.attributes.link
        }));
        this.options = [];
        for (let i = 0; i < this.cardData.length; i++) {
          this.options.push(this.cardData[i].title);
        }
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    resetfn() {
      this.$refs.selectField.reset();
      this.customerName = '',
        this.customerEmail = ''
      this.customerLinkedin = '',
        this.selectedFile = '',
        this.selectedFileName = '',
        this.selectedPosition = ''

      this.isFormSubmitted = false;


    },
    validateEmail() {
      this.isFormSubmitted = false;
    },
    validateForm() {

      return (
        this.customerName && this.customerEmail && this.customerLinkedin && this.selectedPosition && this.selectedFileName

      );
    }


  }
}
</script>
<style scoped>
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/carreerBg.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;

}

.bg-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(105deg, rgb(56, 150, 162, 0.5) 50%, rgba(204, 234, 230) 50%);
  /* Set your desired color and opacity */
  z-index: 2;
  /* Ensure the overlay is above the image */
}

@media (max-width: 640px) {
  .bg-green-and-black {
    background: #CCEAE6;
  }
}
</style>
