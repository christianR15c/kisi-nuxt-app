<script setup>
import { fetchData } from '~~/helpers/utils';

const data = fetchData();

const route = useRoute();
const categoryName = route.params.categoryName;
const articleTitleParams = route.params.articleName;
const articleName = route.params.articleName.split('-').join(' ');
let article;
if (data) {
  article = data._rawValue?.data?.filter(
    (article) => article.title === articleName
  );
}
article &&
  useHead({
    title: article[0].title,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [{ name: 'description', content: article[0].description }],
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
        content: article[0].image
          ? article[0].image
          : `https://res.cloudinary.com/dmgfxu4fg/image/upload/v1658700535/articles_it8z4t.jpg`,
      },
      {
        name: 'og:url',
        content: `https://kisi-nuxt-app.herokuapp.com/articles/${categoryName}/${articleTitleParams}`,
      },
    ],
  });
</script>

<template>
  <div v-if="data">
    <div
      v-for="(articl, i) in data.data.filter(
        (article) => article.title === articleName
      )"
      :key="i"
      class="min-h-screen"
    >
      <div class="flex justify-center py-3">
        <div class="max-w-[1240px] md:px-0 px-5 pb-10">
          <div class="h-[450px] md:w-[900px] flex justify-center sm:w-fit">
            <img
              :src="
                articl.image
                  ? articl.image
                  : 'https://res.cloudinary.com/dmgfxu4fg/image/upload/v1658700535/articles_it8z4t.jpg'
              "
              alt=""
              class="h-[450px] w-full object-cover"
            />
          </div>
          <div class="py-2">
            <p class="text-xl font-semibold">
              {{ articl?.title }}
            </p>
          </div>
          <div>
            <div class="flex gap-3">
              <p class="text-gray-700 font-bold">Author:</p>
              <p class="text-gray-600">{{ articl.author }}</p>
            </div>
            <p class="py-2 text-gray-600">
              {{ articl.published_at.split('T')[0] }}
            </p>
          </div>
          <div>
            <p>
              {{ articl.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="flex justify-center">
    <h1>Loading ...</h1>
  </div>
  <div v-if="data">
    <InputForm />
  </div>
</template>
