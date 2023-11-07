<template>
  <div v-if="!loading">
    <Card :CardTitle="cardTitle" :CardBody="cardBbody" :imageUrl="imageUrl" :ComTitle="ComTitle" :Para="Para"
      :boldText="boldText" :baseUrl="baseUrl" data-aos="fade-up" data-aos-duration="1000" />

    <!-- ====== career Section-->
    <careers :cardData="cardData" />
    <!-- ====== Our Team Section-->
    <OurTeam :people="people" :baseUrl="baseUrl" />

  </div>
</template>

<script>
import Card from "~/components/business/card.vue";
import MapAndContact from '~/components/HomePage/mapAndContact.vue';
import CardImgRight from "~/components/services/cardImgRight.vue";
import card from "~/components/services/cardImgLeft.vue";
import careers from '~/components/company/careers.vue';
import { getAboutTitle, getCareerPositions, getOurteam } from "@/services/about.js";
import { loading, toggleLoading } from '../store/store';
import OurTeam from '~/components/company/ourTeam.vue';
export default {
  components: { Card, MapAndContact, CardImgRight, card, careers, OurTeam },
  name: "our_company",

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
      people: [],
      peopleData:[],
      title:[]

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
    // await this.fetchCareerPositions();
    // await this.fetchOurTeam();
    toggleLoading(false);

  },
  methods: {
    async fetchTitleSection() {

      try {
        const response = await getAboutTitle();
       
        this.ComTitle = response.data.data.attributes.common_title.data.attributes.CommonTitle
        this.boldText = response.data.data.attributes.common_title.data.attributes.boldText
        this.Para = response.data.data.attributes.common_title.data.attributes.Paragraph
        this.cardTitle = response.data.data.attributes.sub_title
        this.imageUrl = response.data.data.attributes.image_url.data.attributes.formats.xsmall.url
        this.cardBbody = response.data.data.attributes.points.data
       
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    async fetchCareerPositions() {

      try {
        const response = await getCareerPositions();
        this.cards = response.data.data
        this.cardData = this.cards.map(card => ({
          title: card.attributes.job_title,
          qualifications: card.attributes.qualifications.data.map(description => description.attributes.qualification),
        }));

      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    async fetchOurTeam() {

      try {
        const response = await getOurteam();
        this.peopleData = response.data.data
        this.people = this.peopleData.map(person => ({
          name: person.attributes.name,
          imageUrl: person.attributes.image.data.attributes.url,
          role:person.attributes.position,
          linkedinUrl:person.attributes.LinkedIn
        }));

      } catch (error) {
        console.error("Error fetching  data:");
      }

    },

  }
};

</script>

<style scoped></style>
