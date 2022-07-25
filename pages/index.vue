<template>
  <div class="w-full pb-36">
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
  </div>
  <InputForm />
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
    {
      rel: 'icon',
      href: 'https://res.cloudinary.com/dmgfxu4fg/image/upload/v1658757660/articleLogo_prev_ui_c8vfox.png',
    },
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
