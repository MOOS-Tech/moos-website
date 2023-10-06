<template>
  <div>
    <Card
      :CardTitle="data[0].CardTitle"
      :CardBody="data[0].CardBody"
      :imageUrl="data[0].imageUrl"
      :ComTitle="data[0].ComTitle"
      :Para="data[0].Para"
    />
   

    <card
      :CardTitle="data[1].CardTitle"
      :CardBody="data[1].CardBody"
      :imageUrl="data[1].imageUrl"
    />

    <CardImgRight
      :CardTitle="data[2].CardTitle"
      :CardBody="data[2].CardBody"
      :imageUrl="data[2].imageUrl"
    />

   
      <!-- ====== Map and the Contact Section-->
      <MapAndContact/>
  </div>
</template>

<script>
import Card from "~/components/business/card.vue";
import MapAndContact from '~/components/HomePage/mapAndContact.vue';
import CardImgRight from "~/components/services/cardImgRight.vue";
import card from "~/components/services/cardImgLeft.vue";

export default {
  components: { Card, MapAndContact,CardImgRight ,card},
  name: "our_company",

  data() {
    return {
      data: dummyData,
    };
  },
};
const dummyData = [
  {
    ComTitle: "<br/>our company​",
    CardTitle: "Our vision​​",
    Para: "Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",
    CardBody: [
      "In lorem mi, hendrerit a malesuada in, eleifend.",
      "Maecenas volutpat tristique nibh.",
      "Nam sit amet diam in orci consequat placerat.",
    ],
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: "Inventory management​",
    CardBody: [
      "Low stock triggers​",
      "​Auto reordering and replenishment",
      "Optimized replenishment schedule​",
    ],
    imageUrl:
      "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg",
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: "Transaction​",
    CardBody: [
      "Real time insights in what happens in store/warehouse​",
      "Basis for payments, order-checks, theft detection​",
      "(Re)supply detection & optimization ",
    ],
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
  },
];
</script>

<style scoped>

</style>
