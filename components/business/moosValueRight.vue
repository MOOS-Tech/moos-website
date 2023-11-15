<template>
    <div style="direction: rtl;"  data-aos="fade-up" data-aos-duration="1000">
        <div class="flex flex-col lg:flex-row ">
            <div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10  mx-auto lg:flex-row">
                <div class="flex flex-col items-center   ">

                    <div>
                        <h2
                            class="text-normal-title-heading font-semibold text-center lg:w-4/6 self-center text-green-200 mb-4 ">
                            {{ pillTitle }}</h2>
                        <div class="grid gap-y-16 sm:gap-y-20 grid-cols-12" >
                           
                            <div class="flex items-center justify-center   transition-transform  col-span-12 md:col-span-8 px-4"
                                id="pill-container" dir="ltr">
                                <div class="pill left relative lg:rounded-l-full md:rounded-l-full border-2 border-r-0  border-black-100 h-auto py-1 round-pill expand-horizontal1"
                                    :id="left_Pill" @mouseover="movePills" @mouseleave="resetPills">
                                    <div class="flex flex-col items-start lg:w-full pl-10">
                                        <h3 class="text-small-title-heading mb-2 text-left">Old Way</h3>
                                        <ul class="text-sm list-disc text-left">
                                            <li v-for="(item, index) in oldWays" :key="index">{{ item}}
                                            </li>
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
                                            <li v-for="(item, index) in moosWays" :key="index">{{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex justify-center  col-span-12 md:col-span-4  " >
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271 271" fill="none">
                                    <path
                                        d="M266.236 124.815L146.028 4.6066C140.17 -1.25126 130.673 -1.25127 124.815 4.6066L4.60665 124.815C-1.25122 130.673 -1.25122 140.17 4.60664 146.028L124.815 266.236C130.673 272.094 140.17 272.094 146.028 266.236L266.236 146.028C272.094 140.17 272.094 130.673 266.236 124.815Z"
                                        fill="#444444" />
                                    <text x="50%" y="50%" text-anchor="middle" dy="0.5em" fill="white">- 80%</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="0.5em" fill="white">Your second &
                                        line</text>
                                </svg> -->
                            </div>
                        </div>
                       
                    </div>
                    <div class="justify-center px-10  self-center"  v-if="isVisible"
                            :class="{ 'dotted-animation': isVisible }">
                            <DottedLine :line-width="420" :right-line-up-length="100" :right-line-down-length="0"
                                :left-line-down-length="100" :left-line-up-length="0" :show-left-line-down="true"
                                :show-right-line-up="true"  :fromHorizontalLine="0" :toHorizontalLine="60" :fromRightLineUp="0"
                            :toRightLineUp="60" :fromRightLineDown="60" :toRightLineDown="0" :fromLeftLineUp="0"
                            :toLeftLineUp="60" :fromLeftLineDown="60" :toLeftLineDown="0" />
                        </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import DottedLine from "../components/common/DottedLine";
export default {
    name: "valueleft",
    props:{
        left_Pill : "",
        right_Pill: "", 
         isVisible: true,  
         oldWays:[],
         moosWays:[],
         pillTitle: ""
    },
    components: { DottedLine },
    data() {
        return {
            // pillTitle: "Pill Title",
            // oldWays: [
            //     {
            //         oldWayValueText: "Count manually"
            //     },
            //     {
            //         oldWayValueText: "Estimated with 60-70% accurate ERP+POS data"
            //     }
            // ],
            // moosWays: [
            //     {
            //         moosWayValueText: "Count manually"
            //     },
            //     {
            //         moosWayValueText: "Estimated with 60-70% accurate ERP+POS data"
            //     }
            // ],
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