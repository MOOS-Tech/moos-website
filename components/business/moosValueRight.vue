<template>
    <div style="direction: rtl;">
        <div class="flex flex-col lg:flex-row ">
            <div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-20 mx-auto lg:flex-row">
                <div class="flex flex-col items-start  lg:px-10">

                    <div>
                        <h2
                            class="text-normal-title-heading font-semibold text-center lg:w-3/5 self-center text-green-200 mb-4">
                            Pill
                            Structure</h2>
                        <div class="flex items-center justify-center lg:w-4/5  transition-transform" id="pill-container" dir="ltr">
                            <div class="pill left relative lg:rounded-l-full md:rounded-l-full border-2 border-r-0  border-black-100 h-auto py-1 round-pill expand-horizontal1"
                                id="left_Pill">
                                <div class="flex flex-col items-start lg:w-full pl-10">
                                    <h3 class="text-small-title-heading mb-2 text-left">Old Way</h3>
                                    <ul class="text-sm list-disc text-left">
                                        <li>Count manually</li>
                                        <li>Estimated with 60-70% accurate ERP+POS data</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="flex items-center justify-center w-1/6 expand-horizontal-image " id="image"
                                @mouseover="movePills" @mouseleave="resetPills"
                                style="margin-left: -20px; margin-right: -20px;">
                                <img src="@/assets/images/pillimage.png" alt="Image" class="h-auto" />
                            </div>

                            <div class="pill right relative lg:rounded-r-full md:rounded-r-full border-2 border-l-0 border-green-200 h-auto py-1 round-pill expand-horizontal"
                                id="right_Pill">
                                <div class="flex flex-col items-start lg:w-full pl-10  text-green-200">
                                    <h3 class="text-small-title-heading mb-2 text-left">MOOS Way</h3>
                                    <ul class="text-sm list-disc text-left">
                                        <li>Automatic, real-time, remote & accurate stock insight</li>
                                        <li>Right Point 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

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

export default {
    name: "valueleft",


    methods: {
        movePills() {
            const leftPill = document.getElementById("left_Pill");
            const rightPill = document.getElementById("right_Pill");

            leftPill.style.transform = "translateX(-10%)";
            rightPill.style.transform = "translateX(10%)";
        },
        resetPills() {
            const leftPill = document.getElementById("left_Pill");
            const rightPill = document.getElementById("right_Pill");

            leftPill.style.transform = "translateX(0)";
            rightPill.style.transform = "translateX(0)";
        },
    },
}
</script>

<style scoped>
.pill {

    transition: transform 0.3s;
}
</style>