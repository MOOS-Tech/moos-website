<template>
  <div v-if="!loading">
    <CompanyHeroSection :CardTitle="cardTitle" :CardBody="cardBbody" :imageUrl="imageUrl" :ComTitle="ComTitle" :Para="Para"
          :boldText="boldText" :baseUrl="baseUrl" data-aos="fade-up" data-aos-duration="1000"/>

    <!-- ====== career Section-->
    <careers :cardData="cardData" :baseUrl="baseUrl"/>
    <!-- ====== Our Team Section-->
    <OurTeam :people="people" :baseUrl="baseUrl"/>
    

  </div>
</template>

<script>
import Card from "~/components/business/card.vue";
import MapAndContact from '~/components/HomePage/mapAndContact.vue';
import CardImgRight from "~/components/services/cardImgRight.vue";
import card from "~/components/services/cardImgLeft.vue";
import careers from '~/components/company/careers.vue';
import {getAboutTitle, getCareerPositions, getOurteam} from "@/services/about.js";
import {loading, toggleLoading} from '../store/store';
import OurTeam from '~/components/company/ourTeam.vue';
import CompanyHeroSection from '~/components/company/companyHeroSection.vue';

export default {
  components: {Card, MapAndContact, CardImgRight, card, careers, OurTeam,CompanyHeroSection},
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
      peopleData: [],
      title: []

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
        console.log(response.data.data[0])
        try {
          this.ComTitle = response.data.data[0].attributes.common_title.data.attributes.CommonTitle
        }catch (e) {
          this.ComTitle = "";
        }
        try {
          this.boldText = response.data.data[0].attributes.common_title.data.attributes.boldText
        }catch (e) {
          this.boldText = "";
        }
        try {
          this.Para = response.data.data[0].attributes.common_title.data.attributes.Paragraph
        }catch (e) {
          this.Para = "";
        }
        try {
          this.cardTitle = response.data.data[0].attributes.sub_title
        }catch (e) {
          this.cardTitle = "";
        }
        try {
          this.imageUrl = response.data.data[0].attributes.image_url.data.attributes.url
        }catch (e) {
          this.imageUrl = "";
        }
        try {
          this.cardBbody = response.data.data[0].attributes.points.data.map(data => (data.attributes.bullet_point));
        }catch (e) {
          this.cardBbody = "";
        }
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    async fetchCareerPositions() {
      try {
        const response = await getCareerPositions();
        this.cards = response.data.data
        this.cardData = this.cards.map(card => {
          try {
            let title;
            try {
              title = card.attributes.job_title;
            } catch (e) {
              title = '';
            }

            let qualifications;
            try {
              qualifications = card.attributes.qualifications.data.map(description => description.attributes.qualification);
            } catch (e) {
              qualifications = [];
            }

            return { title, qualifications };
          } catch (e) {
            console.error('Error in mapping card data:', e);
            return {};
          }
        });
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    async fetchOurTeam() {
      try {
        const response = await getOurteam();
        this.peopleData = response.data.data
        this.people = this.peopleData.map(person => {
          try {
            let name;
            try {
              name = person.attributes.name;
            } catch (e) {
              name = '';
            }

            let imageUrl;
            try {
              imageUrl = person.attributes.image.data.attributes.url;
            } catch (e) {
              imageUrl = '';
            }

            let role;
            try {
              role = person.attributes.position;
            } catch (e) {
              role = '';
            }

            let linkedinUrl;
            try {
              linkedinUrl = person.attributes.LinkedIn;
            } catch (e) {
              linkedinUrl = '';
            }

            return { name, imageUrl, role, linkedinUrl };
          } catch (e) {
            console.error('Error in mapping people data:', e);
            return {};
          }
        });
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },

  }
};

</script>

<style scoped></style>
