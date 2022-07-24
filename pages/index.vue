<template>
  <div class="w-full h-screen">
    <div class="flex w-full flex-col items-center gap-5">
      <div class="w-full h-[200px]">
        <img
          src="https://res.cloudinary.com/dmgfxu4fg/image/upload/v1658700535/articles_it8z4t.jpg"
          alt=""
          class="w-full h-[400px] object-cover"
        />
      </div>
      <p class="text-3xl font-extrabold">Welcome to our Articles Page ...</p>
      <a
        :href="`/articles`"
        class="bg-green-700 px-6 text-white py-1 rounded-lg hover:drop-shadow-xl hover:bg-green-600"
      >
        read more</a
      >
    </div>
    <div class="mt-[160px]">
      <div class="flex flex-col items-center">
        <p class="text-2xl text-gray-500">
          Subscribe to get weekly newspaper and daily updates
        </p>
        <div class="pt-12 flex gap-5">
          <input
            type="text"
            placeholder="Email ..."
            class="border-2 border-green-700 px-2 rounded-md focus:outline-none focus:border-green-500 text-gray-500"
          />
          <a
            :href="`/articles`"
            class="bg-green-700 px-6 text-white py-1 rounded-lg hover:drop-shadow-xl hover:bg-green-600"
          >
            Subscribe</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/css/main.css';

useHead({
  title: `Kisi Articles`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: `Daily Kisi Articles` }],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://kisi-nuxt-app.herokuapp.com/',
    },
    { rel: 'icon', href: '/assets/images/articleLogo.png' },
  ],

  meta: [
    {
      name: 'og:image',
      content: `https://res.cloudinary.com/dmgfxu4fg/image/upload/v1658700535/articles_it8z4t.jpg`,
    },
    {
      name: 'og:url',
      content: `https://kisi-nuxt-app.herokuapp.com/`,
    },
  ],
});
</script>
