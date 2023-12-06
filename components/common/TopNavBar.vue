<template>
  <div v-if="loading" class="loading">
    <img src="@/assets/images/navbarLogo.png" alt="Loading" />
  </div>
  <nav v-else class="flex items-center bg-green-200 p-2 flex-wrap flex-no-wrap sticky top-0 z-10 w-full  ">
    <NuxtLink to="/" class="mr-6 ml-3 inline-flex items-center">
      <img src="@/assets/images/navbarLogo.png" alt="Image Alt Text" class="h-12 w-15 mr-2" />
    </NuxtLink>
    <button
      class="text-white inline-flex p-3 bg-opacity-25 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      data-target="#navigation" @click="toggleNav">
      <i class="fa-solid fa-bars text-white"></i>
    </button>
    <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation"
      :class="{ block: isNavOpen, hidden: !isNavOpen }">

      <div class="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <div v-for="(item, index) in navItems" :key="index">
          <div v-if="item.attributes.navbar_sub_topics.data.length === 0"
            class="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NuxtLink :to="item.attributes.url"
              class="lg:inline-flex lg:w-auto w-full flex-grow px-5 py-2 mr-5  rounded text-white items-center  hover:bg-white hover:bg-opacity-25 hover:text-white text-left"
              style="border: 1px solid transparent; transition: border-color 0.3s;" @mouseover="setBorderColor('white')"
              @mouseleave="setBorderColor('transparent')">
              <span>{{ item.attributes.nav_title }}</span>
            </NuxtLink>
          </div>

          <div v-else class="relative inline-block text-left dropdown">
            <span class="rounded-md shadow-sm">
              <button
                class="lg:inline-flex lg:w-auto w-full flex-grow px-5 py-2 mr-5 rounded text-white items-center justify-between hover:bg-white hover:bg-opacity-25 hover:text-white text-left"
                type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117"
                style="border: 1px solid transparent; transition: border-color 0.3s;" @mouseover="setBorderColor('white')"
                @mouseleave="setBorderColor('transparent')"  @click="toggleDropdown">
                <div class="flex items-center group">
                  <span class="flex-grow">{{ item.attributes.nav_title }}</span>
                  <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
                </div>
              </button>
            </span>
            <div v-if="isDropdownOpen"
              class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-left -translate-y-2 scale-95">
              <div
                class="absolute left-0 w-60 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu"
                style="width: 350px;">
                <div class="" v-for="(sub, i) in item.attributes.navbar_sub_topics.data" :key="i">
                  <NuxtLink :to="sub.attributes.url"
                    class="block px-4 py-2 hover:bg-green-200 hover:border hover:border-green-200 hover:text-white !important"
                    @click="closeDropdown">
                    <i :class="`fa fa-${sub.attributes.font_awsome_Icon_name} mr-2`" aria-hidden="true"></i>
                    {{ sub.attributes.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <div v-for="(action, index) in navActions" :key="index">
          <div
            class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a v-if="action.attributes.type === 'link'"
              class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center underline"
              :href="action.attributes.url" target="_blank" rel="noopener noreferrer">
              <span>{{ action.attributes.name }}</span>
            </a>
          </div>
          <div
            class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a v-if="action.attributes.type === 'button'"
              class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center" href="#">
              <NuxtLink :to="action.attributes.url"  target="_blank"
                class="lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5  rounded text-white items-center justify-center bg-white bg-opacity-25 border border-white hover:bg-white  hover:bg-opacity-25 hover:text-white">
                <span> {{ action.attributes.name }}</span>
              </NuxtLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import FormButton from "@/components/common/Form/FormButton";
import { loading } from '@/store/store';
import { getNavbarActions, getNavbar } from "../../services/navigation";

export default {
  name: "TopNavBar",
  components: {
    FormButton,
  },
  computed: {
    loading() {
      return loading.value;
    },
  },
  data() {
    return {
      isNavOpen: false,
      isDropdownOpen: false,
      navItems: [],
      navActions: [],
      buttonText:"",
      newTabLink: "",

    };
  },
  methods: {
    toggleNav() {
      // Toggle the navigation state when the button is clicked
      this.isNavOpen = !this.isNavOpen;

    },
    // Toggle the dropdown state when the button is clicked
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    setBorderColor(color) {
      event.target.style.borderColor = color;
    }
  },
  async mounted() {
    this.navItems = await getNavbar();
    this.navActions = await getNavbarActions();
    if (this.navActions[0].id == 2){
        this.buttonText = this.navActions[0].attributes.name
        this.newTabLink = this.navActions[0].attributes.url
        localStorage.setItem("ButtonText",  this.buttonText);
        localStorage.setItem("ButtonLink",this.newTabLink)
      }else{
        this.buttonText = this.navActions[1].attributes.name
        this.newTabLink = this.navActions[1].attributes.url
        localStorage.setItem("ButtonText",  this.buttonText);
        localStorage.setItem("ButtonLink",this.newTabLink)
      }
  }
};
</script>

<style scoped>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

@media (min-width: 1024px) {
  .top-navbar {
    display: inline-flex !important;
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #109888;
}</style>
