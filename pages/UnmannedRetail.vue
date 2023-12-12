<template>
  <div v-if="!loading">
    <Card :CardTitle="cardTitle" :CardBody="cardBbody" :imageUrl="imageUrl" :ComTitle="ComTitle" :Para="Para"
      :boldText="boldText" :baseUrl="baseUrl" data-aos="fade-up" data-aos-duration="1000" />
    <div style="background-color: #F0F9F8;padding-bottom: 20px">
      <div class="pt-10 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row ">
        <section class=" lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 py-10  mx-auto lg:max-w-7xl">
          <h2 class="text-sub-title-heading font-semibold text-black-200 ">{{ business_sub_topic }}</h2>
        </section>
      </div>

      <!-- <MoosValueLeft :rightPill="'oneleft'" :leftPill="'oneright'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueRight :right_Pill="'one_left'" :left_Pill="'one_right'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueLeft :rightPill="'twoleft'" :leftPill="'tworight'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueRight  :right_Pill="'two_left'" :left_Pill="'two_right'"  data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueLeft :rightPill="'threeleft'" :leftPill="'threeright'" data-aos="fade-up"  data-aos-duration="1000" :isVisible="true"/>
      <MoosValueRight  :right_Pill="'three_left'" :left_Pill="'three_right'" data-aos="fade-up"  data-aos-duration="1000" :isVisible="false"/> -->
      
      <div v-for="(item, index) in ValueDetails" :key="index">

        <div v-if="index % 2 === 0">
          <MoosValueLeft :rightPill="index + 'left'" :leftPill="index + 'right'" :oldWays="item.oldWays" :moosWays="item.moosWays"
            :pillTitle="item.pillTitle" :valuePercentage="item.valuePercentage" :valueDes="item.valueDes" :isVisible="isLastValue(index)" :imageURL="item.imageURL" />

        </div>
        <div v-else>
          <MoosValueRight :right_Pill="index + '_left'" :left_Pill="index  + '_right'" :oldWays="item.oldWays"
            :moosWays="item.moosWays" :pillTitle="item.pillTitle" :isVisible="isLastValue(index)" :imageURL="item.imageURL" />
        </div>
      </div>

    </div>
    <div>
      <GetStart :cards="cardData"  data-aos="fade-up" data-aos-duration="1000" />
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
import { getSubTopics } from "../../services/home.js";
import { getBusinessTitle, BusinessGetStart, getUnmannedRetailMoosValues } from "@/services/business.js";


export default {
  components: { Card, GetStart, MapAndContact, MoosValueLeft, MoosValueRight },
  name: "business_solutions1",

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
      ValueDetails: [
      ],
      moosWays: [],
      oldWays: [],
      pillTitle: "",
      valuePercentage: "",
      valueDes: "",
      imageURL:"",
      business_sub_topic:"",
     
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
    await  this.fetchMoosValues();
    await this.getSubTopics();
    toggleLoading(false);

  },
  methods: {
    async fetchTitleSection() {

      try {
        const response = await getBusinessTitle();
        try {
          this.ComTitle = response.data.data[0].attributes.common_title.data.attributes.CommonTitle;
        } catch (e) {
          this.ComTitle = "";
        }
        try {
          this.boldText = response.data.data[0].attributes.common_title.data.attributes.boldText;
        } catch (e) {
          this.boldText = "";
        }
        try {
          this.Para = response.data.data[0].attributes.common_title.data.attributes.Paragraph;
        } catch (e) {
          this.Para = "";
        }
        try {
          this.cardTitle = response.data.data[0].attributes.sub_topic;
        } catch (e) {
          this.cardTitle = "";
        }
        try {
          this.imageUrl = response.data.data[0].attributes.image_url.data.attributes.url;
        } catch (e) {
          this.imageUrl = "";
        }
        try {
          this.cardBbody = response.data.data[0].attributes.points.data.map(data => (data.attributes.point));
        } catch (e) {
          this.cardBbody = "";
        }
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    async fetchBusinessGetStart() {
      try {
        const response = await BusinessGetStart();
        this.cards = response.data.data
        // this.cardData = this.cards.map(card => ({
        //   title: card.attributes.title,
        //   description: card.attributes.Paragraph,
        //
        // }));
        for (let i = 0; i < this.cards.length; i++) {
          let card = {};
          try {
            card.title = this.cards[i].attributes.title;
          } catch (e) {
            card.title = "";
          }
          try {
            card.description = this.cards[i].attributes.Paragraph;
          } catch (e) {
            card.description = "";
          }
          this.cardData.push(card);
        }
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    async fetchMoosValues() {
      try {
        const response = await getUnmannedRetailMoosValues();

        this.cards = response.data.data;
        // this.ValueDetails = this.cards.map(card => ({
        //   moosWays: card.attributes.moosways.data.map(moosways => moosways.attributes.moosway_point),
        //   oldWays: card.attributes.oldways.data.map(oldWays => oldWays.attributes.old_way_point),
        //   pillTitle: card.attributes.main_title,
        //   valuePercentage: card.attributes.percentage,
        //   valueDes: card.attributes.percentage_description,
        //   imageURL: card.attributes.pill_image.data? card.attributes.pill_image.data.attributes.url : ""
        //
        // }));
        for (let i = 0; i < this.cards.length; i++) {
          let details = {};
          try {
            details.moosWays = this.cards[i].attributes.moosways.data.map(moosways => moosways.attributes.moosway_point);
          } catch (e) {
            details.moosWays = "";
          }
          try {
            details.oldWays = this.cards[i].attributes.oldways.data.map(oldWays => oldWays.attributes.old_way_point);
          } catch (e) {
            details.oldWays = "";
          }
          try {
            details.pillTitle = this.cards[i].attributes.main_title;
          } catch (e) {
            details.pillTitle = "";
          }
          try {
            details.valuePercentage = this.cards[i].attributes.percentage;
          } catch (e) {
            details.valuePercentage = "";
          }
          try {
            details.valueDes = this.cards[i].attributes.percentage_description;
          } catch (e) {
            details.valueDes = "";
          }
          try {
            details.imageURL = this.cards[i].attributes.pill_image.data.attributes.url;
          } catch (e) {
            details.imageURL = "";
          }
          this.ValueDetails.push(details);
        }
      } catch (error) {
        console.error(error);
      }
    },
    isLastValue(index) {
    return index === this.ValueDetails.length - 1 ? false : true;
  },
  async getSubTopics() {
      const id = '3';
      try {
        const response = await getSubTopics(id);
        try {
          this.business_sub_topic = response.data.data.attributes.topic;
        } catch (e) {
          this.business_sub_topic = "";
        }
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
  }
};

</script>

<style ></style>
