<template>
  <div>
    <!-- hero section -->
    <section class="relative py-10 lg:py-20 bg-white">
      <div class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-36">

        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

          <h1 class="text-3xl leading-tight sm:text-4xl md:text-4xl xl:text-5xl
             text-gray">
            MOOS for effortless
            inventory operations
          </h1>
          <p class="mt-8 text-gray-700">
            Digitize your shelves & racks for full visibility where it happens: the MOOS effortless inventory operating
            system​.
          </p>

          <div class="mt-10  flex flex-col items-center gap-4 lg:flex-row">
            <button
              class="flex items-center py-4 text-sm font-bold text-white px-7 bg-green-200 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
              Book a Meeting
            </button>
          </div>

        </div>
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359"
            class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96">
        </div>
      </div>
    </section>

    <!-- ====== Blog Section Start -->
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="container mx-auto">
        <div class="mx-4 flex flex-wrap flex-col gap-5 md:flex-row 
    items-center justify-center ">
          <div class="w-full px-4 md:w-1/2 py-4 lg:w-1/4 bg-white shadow-md rounded-lg" v-for="(item, index) in items"
            :key="index">
            <div class="mx-auto mb-10 ">

              <div>
                <span
                  class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                  {{ item.date }}
                </span>
                <h3>
                  <a href="javascript:void(0)"
                    class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                    {{ item.title }}
                  </a>
                </h3>
                <p class="text-body-color text-base">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Blog Section End -->
    <section class="lg:max-w-10xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row">
      <div class="w-full rounded-lg bg-white px-8 py-4 m-4">
        <div class="px-1 py-4">
          <h3 class="font-bold text-2xl font-sans">Share with others</h3>
        </div>
        <div class="flex flex-wrap items-center justify-center">
          <div v-for="(item, index) in users" :key="index" class="flex flex-col items-center mx-2">
            <img :src="item.avatar" alt="" class="rounded-full w-16 h-16 object-cover">
            <h5 class="font-semibold">{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:max-w-10xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row py-10 ">
    <div class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-10 rounded-lg bg-white shadow-md ">
      
        <div 
        class="flex flex-col  sm:shrink-0 sm:grow sm:basis-0   items-center"
        v-for="(card, index) in cards" :key="index">
        <a href="#!">
          <img src="@/assets/images/navbarLogo.png" alt="Image Alt Text" class="h-12 w-15 mr-2" />
        </a>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {{ card.title }}
          </h5>
          <p class="mb-4 text-base text-neutral-600">
            {{ card.description }}
          </p>

        </div>
    
      </div>
    


    </div>
    </section>
    <section class=" flex items-center justify-center mb-10">
  <div class="mx-auto w-full max-w-screen-lg bg-blue-700 px-5 ">
    <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      
      <div class=" bg-red-600  flex items-center p-12 py-6">
        <div class="mx-auto md:mx-0">
          <h3 class="text-4xl font-bold text-white">Subscribe</h3>
          <p class="mt-2 max-w-[20rem] text-lg text-white/80">Join our weekly digest. You'll also receive some of our best posts today.</p>
          <form action="" class="mt-4 flex flex-col">
            <input type="email" name="email" id="email" placeholder="Enter your email" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <button type="submit" class="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="flex justify-center md:justify-end">
       
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style=""></iframe>
      </div>
    </div>
  </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      items: [
        {
          date: 'Dec 22, 2023',
          title: 'Meet AutoManage, the best AI management tools',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          date: 'Jan 15, 2024',
          title: 'New Feature Announcement: AutoManage Pro',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          date: 'Feb 10, 2024',
          title: 'Learn How to Use AutoManage for Your Business',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
      ],
      users: [
        {
          name: 'Alex',
          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        {
          name: 'Alex',
          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        {
          name: 'Alex',
          avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        },

      ],
      cards: [
        {
          imageUrl:
            "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
          title: "Card Title 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        },
        {
          imageUrl:
            "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        },
        {
          imageUrl:
            "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        },
        // Add more card objects as needed
      ],
    };
  },
}
</script>

<style scoped></style>
