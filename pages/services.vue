<template>
  <div>
    <CardImgRight
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

    <card
      :CardTitle="data[3].CardTitle"
      :CardBody="data[3].CardBody"
      :imageUrl="data[3].imageUrl"
      :Para="data[3].Para"
    />
  </div>
</template>

<script>
import card from "~/components/services/cardImgLeft.vue";
import CardImgRight from "~/components/services/cardImgRight.vue";

const dummyData = [
  {
    ComTitle: "E2E operating system",
    CardTitle: "",
    Para: "​Platform offering multiple services. From inaccurate data and manual effort to real time, accurate, remote, automated insights​.",
    CardBody: [
      "Inventory management made worry free",
      "Transactions​",
      "Basis for new innovation roadmap",
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
  {
    // ComTitle: 'E2E operating system 2',
    Para: " As we work we get smarter by the day",
    CardTitle: "Joint value creation​​",
    CardBody: [],
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
  },
  // Add more objects as needed
];

export default {
  components: { card, CardImgRight },
  name: "services",

  data() {
    return {
      data: dummyData,
    };
  },
};
</script>


<style scoped>
</style>
