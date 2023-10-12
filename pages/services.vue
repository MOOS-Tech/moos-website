<template>
  <div>
    <CardImgRight
        :CardTitle="data[0].CardTitle"
        :CardBody="data[0].CardBody"
        :imageUrl="data[0].imageUrl"
        :ComTitle="data[0].ComTitle"
        :boldText="data[0].boldtext"
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
  <div style="height: 1000px">
    <span>Example 01</span>
    <DottedLine
        :line-width="300"
        :right-line-up-length="50"
        :right-line-down-length="0"
        :left-line-down-length="50"
        :left-line-up-length="0"
        :show-right-line-up="true"
        :show-left-line-down="true"/>

    <span>Example 02</span>
    <DottedLine
        :line-width="200"
        :right-line-up-length="0"
        :right-line-down-length="100"
        :left-line-down-length="0"
        :left-line-up-length="150"
        :show-left-line-up="true"
        :show-right-line-down="true"/>

    <span>Example 03</span>
    <DottedLine
        :line-width="500"
        :right-line-up-length="150"
        :right-line-down-length="100"
        :left-line-down-length="0"
        :left-line-up-length="0"
        :show-right-line-up="true"
        :show-right-line-down="true"/>

    <div style="padding-top: 100px">
      <span>Example 04</span>
      <DottedLine
          :line-width="300"
          :right-line-up-length="50"
          :right-line-down-length="0"
          :left-line-down-length="0"
          :left-line-up-length="50"
          :show-left-line-up="true"
          :show-right-line-up="true"/>
    </div>
    <div style="padding-top: 10px">
      <span>Example 05</span>
      <DottedLine
          :line-width="300"
          :right-line-up-length="0"
          :right-line-down-length="0"
          :left-line-down-length="0"
          :left-line-up-length="0"
      />
    </div>
    <div style="padding-top: 10px">
      <span>Example 06</span>
      <DottedLine
          :line-width="900"
          :right-line-up-length="100"
          :right-line-down-length="0"
          :left-line-down-length="0"
          :left-line-up-length="0"
          :show-right-line-up="true"
      />
    </div>
  </div>
</template>

<script>
import card from "~/components/services/cardImgLeft.vue";
import CardImgRight from "~/components/services/cardImgRight.vue";
import DottedLine from "../components/common/DottedLine";

const dummyData = [
  {
    boldtext: "MOOS",
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
  components: {DottedLine, card, CardImgRight},
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
