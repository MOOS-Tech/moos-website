<template>
    <div style="direction: rtl;">
        <div class="flex flex-col lg:flex-row " >
            <div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-20 mx-auto lg:flex-row">
                <div class="flex flex-col items-start  lg:px-10"  >
                    
                    <div  >
                        <h2 class="text-normal-title-heading font-semibold text-center lg:w-3/5 self-center text-green-200 mb-4">Pill
                            Structure</h2>
                        <div
                            class="relative lg:rounded-full md:rounded-full  flex items-center justify-center border-2 border-green-200 h-auto lg:w-3/5 py-1" dir="ltr">
                          
                            <div class="flex flex-col items-start lg:w-2/4 pl-10" >
                                <!-- Left content -->
                                <h3 class="text-small-title-heading  mb-2 text-left">Old Way</h3>
                                <ul class="text-sm  list-disc text-left">
                                    <li>Count manually</li>
                                    <li>Estimated with 60-70%
                                        accurate ERP+POS data</li>
                                </ul>
                            </div>
                            <!-- Middle column (Image) -->
                            <div class="flex items-center justify-center lg:w-2/5 ">
                                <img src="@/assets/images/pillimage.png" alt="Image" class="w-2/3 h-auto" />
                            </div>
                            <div class="flex flex-col text-green-200 items-start justify-end lg:w-3/5 pl-5 pr-5">
                                <!-- Right content -->
                                <h3 class="text-small-title-heading mb-2 text-left">MOOS Way</h3>
                                <ul class=" text-sm list-disc text-left">
                                    <li>Automatic, real-time, remote & accurate stock insight</li>
                                    <li>Right Point 2</li>
                                </ul>
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