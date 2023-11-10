<template>
    <div  data-aos="fade-up" data-aos-duration="1000">
        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10  mx-auto lg:flex-row">
                <div class="flex flex-col items-center  ">
                    <div>
                        <h2
                            class="text-normal-title-heading font-semibold text-center lg:w-4/6 self-center text-green-200 mb-4">
                            {{ pillTitle }}</h2>
                        <div class="grid   gap-y-10 sm:gap-y-10 grid-cols-12 ">
                            <div class="flex items-center justify-center transition-transform col-span-12 md:col-span-8 px-4"
                                id="pill-container">
                                <div class="pill left relative lg:rounded-l-full md:rounded-l-full border-2 border-r-0  border-black-100 h-auto py-1 round-pill expand-horizontal1"
                                    :id="leftPill" @mouseover="movePills" @mouseleave="resetPills">
                                    <div class="flex flex-col items-start lg:w-full pl-10">
                                        <h3 class="text-small-title-heading mb-2 text-left">Old Way</h3>
                                        <ul class="text-sm list-disc text-left">
                                            <li v-for="(item, index) in oldWays" :key="index">{{ item}}
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-1/6  expand-horizontal-image " id="image"
                                    @mouseover="movePills" @mouseleave="resetPills"
                                    style="margin-left: -20px; margin-right: -20px;">
                                    <img src="@/assets/images/pillimage.png" alt="Image" class="h-auto" />
                                </div>

                                <div class="pill right relative lg:rounded-r-full md:rounded-r-full border-2 border-l-0 border-green-200 h-auto py-1 round-pill expand-horizontal"
                                    :id="rightPill" @mouseover="movePills" @mouseleave="resetPills">
                                    <div class="flex flex-col items-start lg:w-full pl-10  text-green-200">
                                        <h3 class="text-small-title-heading mb-2 text-left">MOOS Way</h3>
                                        <ul class="text-sm list-disc text-left">
                                            <li v-for="(item, index) in moosWays" :key="index">{{ item}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex items-center justify-center col-span-12 md:col-span-4 value">
                                <div class="diamond ">
                                    <div class="text-top ">{{valuePercentage}}
                                        ​</div>
                                    <div class="text-bottom text-xs pl-5">{{valueDes}}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="justify-center px-10  self-center" v-if="isVisible"
                        :class="{ 'dotted-animation': isVisible }">
                        <DottedLine :line-width="420" :right-line-up-length="0" :right-line-down-length="100"
                            :left-line-down-length="0" :left-line-up-length="100" :show-left-line-up="true"
                            :show-right-line-down="true" />
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
    components: { DottedLine },
    props:{
        leftPill : "",
         rightPill: "", 
         isVisible: true,  
         oldWays:[],
         moosWays:[],
         pillTitle: "",
         valuePercentage: "",
         valueDes:""
    },
   

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
            //     },


            // ],
            // valuePercentage: "24%-80%",
            // valueDes: "Manual counting & ordering time​"

        }
    },

    methods: {
        movePills() {

            const leftPill = document.getElementById(this.leftPill);
            const rightPill = document.getElementById(this.rightPill);

            leftPill.style.transform = "translateX(-10%)";
            rightPill.style.transform = "translateX(10%)";
        },
        resetPills() {
            const leftPill = document.getElementById(this.leftPill);
            const rightPill = document.getElementById(this.rightPill);

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

.diamond {
    width: 120px;
    height: 120px;
    transform: rotate(45deg);
    background-color: #444444;
    /* position: relative; */
   
    border-radius: 10px;
}

.text-top,
.text-bottom {
    position: absolute;
    left: 0;

    transform: rotate(-45deg);
    text-align: center;
}

.text-top {
    top: 20px;
    color: white;
}

.text-bottom {
    bottom: 20px;
    color: white;
}








@media (max-width: 640px) {
    .dotted-animation {
        display: none;
    }

 .value{
    padding-bottom: 20px;
 }
}
</style>