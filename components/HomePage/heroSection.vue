<template>
  <section class="relative py-10 lg:py-20 px-5 lg:px-20">
    <div class="overflow-hidden pb-10 ">
      <div class="mx-auto max-w-7xl lg:flex   w-full flex flex-col lg:flex-row  ">

        <div class="mx-auto w-full lg:w-1/2 lg:max-w-lg ">
          <div class="mx-auto lg:max-w-7xl w-full  flex flex-col lg:flex-row gap-12 lg:gap-40 pb-5 ">
            <div
                class="relative flex flex-col items-center text-center lg:text-left lg:items-start  lg:py-7 lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1">

              <CommonTitle v-if= "ComTitle" :CardTitle="ComTitle" :BoldText="boldText"/>
              <p class="mt-8 text-black-200 text-md">
                {{ para }}
              </p>
              <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row">
                <FormButton class="text-white" @click="openNewTab">{{ this.buttonText }} </FormButton>
              </div>
            </div>
          </div>
          <div class="absolute w-2/4 h-3/5 flex items-start justify-end">
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
            <div class=" order-first mb-10 flex flex-auto lg:justify-end md:justify-center lg:w-auto lg:flex-none  ">
              <img :src="computeURL(imageSrc1)" alt=""
                   class=" w-[24rem] rounded-xl bg-gray-50 object-cover relative"/>
            </div>
            <div
                class=" contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:items-start lg:justify-end md:justify-center lg:gap-x-10 pt-10">
              <div class=" flex flex-auto justify-end  self-end lg:w-auto lg:flex-none relative">
                <img :src="computeURL(imageSrc2)" alt=""
                     class=" w-[24rem]  flex-none rounded-xl bg-gray-50 object-cover"/>
              </div>
              <div class="flex flex-auto justify-center lg:w-auto lg:flex-none relative">
                <img :src="computeURL(imageSrc3)" alt=""
                     class=" w-[37rem]  flex-none rounded-xl bg-gray-50 object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <Banner :title="paragraph" :boldSub_title="boldText" :isButtonVisible="true" :isimageVisible="true"
          :isboldText="true" :title_bold="title" :redirectUrl="redirectUrl" :isVisible="isBanner" style="margin-top: 50px"/> -->
         
</template>
<script>

import FormButton from "@/components/common/Form/FormButton";

import Banner from '../common/Banner.vue';
import {getBanner,getNavbarActions} from "../../services/navigation";

export default {
  name: "index",
  props: {
    imageSrc1: String,
    imageSrc2: String,
    imageSrc3: String,
    ComTitle: String,
    boldText: String,
    para: String,
    baseUrl:String
  },
  data() {
    return {
      paragraph: "",
      banner_boldText: "",
      title: "",
      redirectUrl: '',
      isBanner: false,
      buttonText:"",
      newTabLink: "",
     
    };
  },
  components: {
    FormButton,
    Banner,

  },
  async mounted() {
    try {
      // let res = await getBanner(2);
      // this.title = res.boldText;
      // this.banner_boldText = res.underline_word;
      // this.paragraph = res.Paragraph;
      // this.redirectUrl = res.url;
      // this.isBanner = localStorage.getItem('cookies_allowed') !== 'YES';
    
      this.buttonText = localStorage.getItem("ButtonText");
      this.newTabLink = localStorage.getItem("ButtonLink");

      console.log("Data hero section", this.boldText)
    } catch (e) {
      this.isBanner = false;
    }
  },
  methods:{
    openNewTab() {
      // Open a new tab with the specified link
      window.open(this.newTabLink, "_blank");
    },
    computeURL(imageURL) {
     
      if (imageURL.includes("https://")) {
      
        return imageURL
      }else{
        return this.baseUrl + imageURL
      }
    
      
    }
  }
}

</script>
<style scoped>
.animated-rectangle {

  background: linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
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
  background: linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
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

.small-rectangle-down {
  width: 50px;
  height: 50px;
  position: absolute;
  background: linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
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
  background: linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
  linear-gradient(90deg, #109888 50%, transparent 0) repeat-x,
  linear-gradient(0deg, #109888 50%, transparent 0) repeat-y,
  linear-gradient(0deg, #109888 50%, transparent 0) repeat-y;
  /* background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px; */
  background-size: 12px 3px, 12px 3px, 3px 12px, 3px 12px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: border-dance 0.8s infinite linear;
  top: 40px;
  left: -20px;
  border-radius: 10px;
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

  .small-rectangle {
    background: none;
  }

  .small-rectangle-down {
    background: none;
  }

  .small-rectangle-up {
    background: none;
  }
}
</style>







