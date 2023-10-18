<template>
    <div style="direction: rtl;">
        <div class="flex flex-col lg:flex-row ">
            <div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-20 mx-auto lg:flex-row">
                <div class="flex flex-col items-start  lg:px-10">

                    <div>
                        <h2
                            class="text-normal-title-heading font-semibold text-center lg:w-3/4 self-center text-green-200 mb-4">
                            {{ pillTitle }}</h2>
                        <div class="flex items-center justify-center lg:w-4/5  transition-transform" id="pill-container"
                            dir="ltr">
                            <div class="pill left relative lg:rounded-l-full md:rounded-l-full border-2 border-r-0  border-black-100 h-auto py-1 round-pill expand-horizontal1"
                                :id="left_Pill" @mouseover="movePills" @mouseleave="resetPills">
                                <div class="flex flex-col items-start lg:w-full pl-10">
                                    <h3 class="text-small-title-heading mb-2 text-left">Old Way</h3>
                                    <ul class="text-sm list-disc text-left">
                                        <li v-for="(item, index) in oldWays" :key="index">{{ item.oldWayValueText }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="flex items-center justify-center w-1/6 expand-horizontal-image " id="image"
                                @mouseover="movePills" @mouseleave="resetPills"
                                style="margin-left: -20px; margin-right: -20px;">
                                <img src="@/assets/images/pillimage.png" alt="Image" class="h-auto" />
                            </div>

                            <div class="pill right relative lg:rounded-r-full md:rounded-r-full border-2 border-l-0 border-green-200 h-auto py-1 round-pill expand-horizontal"
                                :id="right_Pill" @mouseover="movePills" @mouseleave="resetPills">
                                <div class="flex flex-col items-start lg:w-full pl-10  text-green-200">
                                    <h3 class="text-small-title-heading mb-2 text-left">MOOS Way</h3>
                                    <ul class="text-sm list-disc text-left">
                                        <li v-for="(item, index) in mooseWays" :key="index">{{ item.moosWayValueText }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="justify-end px-10  self-end" v-if="isVisible" :class="{ 'dotted-animation': isVisible }">
                        <DottedLine :line-width="500" :right-line-up-length="100" :right-line-down-length="0"
                            :left-line-down-length="100" :left-line-up-length="0" :show-left-line-down="true"
                            :show-right-line-up="true" />
                    </div>
                </div>
                <div class="w-full sm:w-1/5 md:w-1/5 lg:w-1/6 ml-auto justify-end items-end self-end">
                    <!-- <img src="@/assets/images/VueJS.png" alt="Additional Image" class="w-full h-auto" /> -->
                </div>
            </div>
            <div class="justify-end items-end self-end">
                <img src="@/assets/images/VueJS.png" alt="Additional Image" class="h-20 w-50" />
            </div>
        </div>
    </div>
</template>
<script>
import DottedLine from "../components/common/DottedLine";
export default {
    name: "valueleft",
    props: ["left_Pill", "right_Pill","isVisible"],
    components: { DottedLine },
    data() {
        return {
            pillTitle: "Pill Title",
            oldWays: [
                {
                    oldWayValueText: "Count manually"
                },
                {
                    oldWayValueText: "Estimated with 60-70% accurate ERP+POS data"
                }
            ],
            mooseWays: [
                {
                    moosWayValueText: "Count manually"
                },
                {
                    moosWayValueText: "Estimated with 60-70% accurate ERP+POS data"
                }
            ],
        }
    },





    methods: {
        movePills() {

            const leftPill = document.getElementById(this.left_Pill);
            const rightPill = document.getElementById(this.right_Pill);

            leftPill.style.transform = "translateX(-10%)";
            rightPill.style.transform = "translateX(10%)";
        },
        resetPills() {
            const leftPill = document.getElementById(this.left_Pill);
            const rightPill = document.getElementById(this.right_Pill);

            leftPill.style.transform = "translateX(0)";
            rightPill.style.transform = "translateX(0)";
        },
    },
}
</script>

<style scoped>
.pill {

    transition: transform 0.3s;
    flex: 1;
}

#pill-container {
    display: flex;
    align-items: stretch;
}
@media (max-width: 640px) {
    .dotted-animation {
        display: none;
    }
}
</style>