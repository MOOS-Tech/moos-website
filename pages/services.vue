<!-- <template>
  <div>
    <CardImgRight
        :CardTitle="data[0].CardTitle"
        :CardBody="data[0].CardBody"
        :imageUrl="data[0].imageUrl"
        :ComTitle="data[0].ComTitle"
        :boldText="data[0].boldtext"
        :Para="data[0].Para"
        data-aos="fade-up"  data-aos-duration="1000"
    />

    <card
        :CardTitle="data[1].CardTitle"
        :CardBody="data[1].CardBody"
        :imageUrl="data[1].imageUrl"
        data-aos="fade-up"  data-aos-duration="1000"
    />

    <CardImgRight
        :CardTitle="data[2].CardTitle"
        :CardBody="data[2].CardBody"
        :imageUrl="data[2].imageUrl"
        data-aos="fade-up"  data-aos-duration="1000"
    />

    <card
        :CardTitle="data[3].CardTitle"
        :CardBody="data[3].CardBody"
        :imageUrl="data[3].imageUrl"
        :Para="data[3].Para"
        data-aos="fade-up"  data-aos-duration="1000"
    />
  </div>
</template> -->
<template>
  <div>
    <div v-for="(item, index) in cards" :key="index">
  
      <template v-if="index % 2 === 0">
        <CardImgRight
          :CardTitle="item.attributes.CardTitle"
          :CardBody="item.attributes.service_card_bodies.data "
          :imageUrl="'http://localhost:1337'+item.attributes.imageUrl.data.attributes.formats.small.url"
          :ComTitle="item.attributes.ComTitle"
          :boldText="item.attributes.boldtext"
          :Para="item.attributes.Paragraph"
          data-aos="fade-up"  data-aos-duration="1000"
        />
      </template>
      <template v-else>
        <card
          :CardTitle="item.attributes.CardTitle"
          :CardBody="item.attributes.service_card_bodies.data"
          :imageUrl="'http://localhost:1337'+item.attributes.imageUrl.data.attributes.formats.small.url"
          :Para="item.attributes.Paragraph"
          data-aos="fade-up"  data-aos-duration="1000"
        />
      </template>
    </div>
  </div>
</template>

<script>
import card from "~/components/services/cardImgLeft.vue";
import CardImgRight from "~/components/services/cardImgRight.vue";
import DottedLine from "../components/common/DottedLine";
import {getAllServices} from "@/services/service"

// const dummyData = [
//   {
//     boldtext: "MOOS",
//     ComTitle: "E2E operating system",
//     CardTitle: "",
//     Para: "​Platform offering multiple services. From inaccurate data and manual effort to real time, accurate, remote, automated insights​.",
//     CardBody: [
//       "Inventory management made worry free",
//       "Transactions​",
//       "Basis for new innovation roadmap",
//     ],
//     imageUrl:
//         "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
//   },
//   {
//     // ComTitle: 'E2E operating system 2',
//     CardTitle: "Inventory management​",
//     CardBody: [
//       "Low stock triggers​",
//       "​Auto reordering and replenishment",
//       "Optimized replenishment schedule​",
//     ],
//     imageUrl:
//         "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg",
//   },
//   {
//     // ComTitle: 'E2E operating system 2',
//     CardTitle: "Transaction​",
//     CardBody: [
//       "Real time insights in what happens in store/warehouse​",
//       "Basis for payments, order-checks, theft detection​",
//       "(Re)supply detection & optimization ",
//     ],
//     imageUrl:
//         "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
//   },
//   {
//     // ComTitle: 'E2E operating system 2',
//     Para: " As we work we get smarter by the day",
//     CardTitle: "Joint value creation​​",
//     CardBody: [],
//     imageUrl:
//         "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
//   },
//   // Add more objects as needed
// ];

export default {
  components: {DottedLine, card, CardImgRight},
  name: "services",

  data() {
    return {
      // data: dummyData,
      cards: [
        {
          attributes: {
            CardTitle: "",
            service_card_bodies: {
              data: [] 
            },
            imageUrl: {
              data: {
                attributes: {
                  formats: {
                    small: {
                      url: ""
                    }
                  }
                }
              }
            },
            ComTitle: "",
            boldtext: "",
            Paragraph: ""
          }
        }
      ]
    };
  },

  async created() {
    try {
      const response = await getAllServices();
      console.log(response.data.data)
      this.cards = response.data.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>


<style scoped>
</style>
