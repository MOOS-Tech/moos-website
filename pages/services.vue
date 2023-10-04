<template>
  <div>
    <div>services page</div>
    <card :CardTitle="'Title'" :CardBody="CardBody"/>
    <card :CardTitle="'Title2'" :CardBody="CardBody"/>
    <card :CardTitle="'Title3'" :CardBody="CardBody"/>
  </div>
</template>

<script>
import card from "~/components/common/services/card.vue";

export default {
  components: {card},
  name: "services",

  data() {
    return {
      CardBody: [
        "Point 1",
        "Point 2",
        "Point 3",
      ],
    };
  },
};
</script>

<style scoped>
</style>
