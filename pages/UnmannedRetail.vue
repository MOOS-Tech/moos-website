<template>
  <div v-if="!loading">
    <Card :CardTitle="cardTitle" :CardBody="cardBbody" :imageUrl="imageUrl" :ComTitle="ComTitle" :Para="Para"
      :boldText="boldText" :baseUrl="baseUrl" data-aos="fade-up" data-aos-duration="1000" />
    <div>
      <div class="pt-10 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row ">
        <section class=" lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 py-10  mx-auto lg:max-w-7xl  bg-white">
          <!-- Title in a new row -->

          <h2 class="text-sub-title-heading font-semibold text-black-200 ">Values of the MOOS Way</h2>
        </section>
      </div>
      <MoosValueLeft :rightPill="'oneleft'" :leftPill="'oneright'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueRight :right_Pill="'one_left'" :left_Pill="'one_right'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueLeft :rightPill="'twoleft'" :leftPill="'tworight'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueRight  :right_Pill="'two_left'" :left_Pill="'two_right'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueLeft :rightPill="'threeleft'" :leftPill="'threeright'" data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueRight  :right_Pill="'three_left'" :left_Pill="'three_right'" data-aos="fade-up"  data-aos-duration="1000" :isVisible="false"/>
    </div>
    <div>
      <GetStart :cards="cardData" data-aos="fade-up"  data-aos-duration="1000"/>
    </div>
    <!-- ====== Map and the Contact Section-->
    <MapAndContact />
  </div>
</template>
  
<script>
import Card from "~/components/business/card.vue";
import GetStart from "~/components/business/GetStart.vue";
import MoosValueLeft from "~/components/business/moosValueLeft.vue";
import MoosValueRight from "~/components/business/moosValueRight.vue";
import MapAndContact from '~/components/HomePage/mapAndContact.vue';
import { loading, toggleLoading } from '../store/store';
import { getBusinessTitle,BusinessGetStart } from "@/services/business.js";


export default {
  components: { Card, GetStart, MapAndContact, MoosValueLeft, MoosValueRight },
  name: "business_solutions",

  data() {
    return {
      baseUrl: 'http://localhost:1337',
      ComTitle: "",
      boldText: "",
      Para: "",
      imageUrl: "",
      cardTitle: "",
      cardBbody: [],
      cards: [],
      cardData: [],
    };
  },
  computed: {
    loading() {
      return loading.value;
    },
  },
  async created() {
    toggleLoading(true);
    const config = useRuntimeConfig();
    this.baseUrl = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
    await this.fetchTitleSection();
    await this.fetchBusinessGetStart();
    toggleLoading(false);

  },
  methods: {
    async fetchTitleSection() {

try {
  const response = await getBusinessTitle();
  this.ComTitle = response.data.data.attributes.main_title.data.attributes.CommonTitle
  this.boldText = response.data.data.attributes.main_title.data.attributes.boldText
  this.Para = response.data.data.attributes.main_title.data.attributes.Paragraph
  this.cardTitle = response.data.data.attributes.sub_title
  this.imageUrl = response.data.data.attributes.ImageUrl.data.attributes.url
  this.cardBbody = response.data.data.attributes.points.data
} catch (error) {
  console.error("Error fetching  data:");
}

},
async fetchBusinessGetStart() {
      try {
        const response = await BusinessGetStart();
        this.cards = response.data.data
        this.cardData = this.cards.map(card => ({
          title: card.attributes.title,
          description: card.attributes.Paragraph,
         
        }));
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
  }
};
</script>
  
<style ></style>
  