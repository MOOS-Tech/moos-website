<template>
  <div>
    <Card :CardTitle="data[0].CardTitle" :CardBody="data[0].CardBody" :imageUrl="data[0].imageUrl"
      :ComTitle="data[0].ComTitle" :Para="data[0].Para" :boldText="data[0].boldtext" />
    <div>
      <div class="pt-10 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row ">
        <section class=" lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 py-10  mx-auto lg:max-w-7xl  bg-white">
          <!-- Title in a new row -->

          <h2 class="text-sub-title-heading font-semibold text-black-200 ">Values of the MOOS Way</h2>
        </section>
      </div>
      <MoosValueLeft />
      <MoosValueRight />
      <MoosValueLeft />
      <MoosValueRight />
      <MoosValueLeft />
      <MoosValueRight />
    </div>
    <div>
      <GetStart />
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

const dummyData = [
  {
    ComTitle: "<br/>for unmanned retail​",
    boldtext: "MOOS",
    CardTitle: "Typical challenges for unmanned retail companies​",
    Para: "​Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",
    CardBody: [
      "In lorem mi, hendrerit a malesuada in, eleifend.",
      "Maecenas volutpat tristique nibh.",
      "Nam sit amet diam in orci consequat placerat.",
    ],
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
  },
];

export default {
  components: { Card, GetStart, MapAndContact, MoosValueLeft, MoosValueRight },
  name: "business_solutions",

  data() {
    return {
      data: dummyData,
    };
  },
};
</script>
  
<style ></style>
  