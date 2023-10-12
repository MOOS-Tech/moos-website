<template>
  <div class="custom-svg">
    <svg :width="svgWidth" :height="svgHeight">
      <!-- Horizontal line -->
      <path
          :d="`M${lineXStart} ${lineY} L${lineXEnd} ${lineY}`"
          stroke="#109888"
          fill="transparent"
          stroke-dasharray="10"
          stroke-dashoffset="0"
      >
        <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="60"
            dur="1s"
            repeatCount="indefinite"
        />
      </path>

      <!-- Right side lines -->
      <path
          :d="`M${lineXEnd} ${lineY} L${lineXEnd} ${lineY - rightLineUpLength}`"
          stroke="#109888"
          fill="transparent"
          stroke-dasharray="10"
          stroke-dashoffset="0"
          v-if="showRightLineUp"
      >
        <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="60"
            dur="1s"
            repeatCount="indefinite"
        />
      </path>

      <path
          :d="`M${lineXEnd} ${lineY} L${lineXEnd} ${lineY + rightLineDownLength}`"
          stroke="#109888"
          fill="transparent"
          stroke-dasharray="10"
          stroke-dashoffset="0"
          v-if="showRightLineDown"
      >
        <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="60"
            dur="1s"
            repeatCount="indefinite"
        />
      </path>

      <!-- Left side lines -->
      <path
          :d="`M${lineXStart} ${lineY} L${lineXStart} ${lineY - leftLineUpLength}`"
          stroke="#109888"
          fill="transparent"
          stroke-dasharray="10"
          stroke-dashoffset="0"
          v-if="showLeftLineUp"
      >
        <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="60"
            dur="1s"
            repeatCount="indefinite"
        />
      </path>

      <path
          :d="`M${lineXStart} ${lineY} L${lineXStart} ${lineY + leftLineDownLength}`"
          stroke="#109888"
          fill="transparent"
          stroke-dasharray="10"
          stroke-dashoffset="0"
          v-if="showLeftLineDown"
      >
        <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="60"
            dur="1s"
            repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "DottedLine",
  props: {
    lineWidth: {
      type: Number,
      default: 280,
    },
    rightLineUpLength: {
      type: Number,
      default: 40,
    },
    rightLineDownLength: {
      type: Number,
      default: 40,
    },
    leftLineUpLength: {
      type: Number,
      default: 40,
    },
    leftLineDownLength: {
      type: Number,
      default: 40,
    },
    showRightLineUp:{
      type:Boolean,
      default:false
    },
    showRightLineDown:{
      type:Boolean,
      default:false
    },
    showLeftLineUp:{
      type:Boolean,
      default:false
    },
    showLeftLineDown:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    svgWidth() {
      return this.lineWidth + 20;
    },
    svgHeight() {
      return (
          Math.max(
              this.leftLineUpLength + this.leftLineDownLength,
              this.rightLineUpLength + this.rightLineDownLength
          ) + 20
      );
    },
    lineXStart() {
      return 10;
    },
    lineXEnd() {
      return this.lineWidth + 10;
    },
    lineY() {
      return this.svgHeight / 2;
    },
  },
};
</script>

<style scoped>
.custom-svg {
  width: 100%;
  height: 100px;
}
</style>
