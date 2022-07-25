<template>
  <div>
    <div class="flex justify-center gap-5 pt-3">
      <input
        type="text"
        placeholder="search"
        class="border-2 px-2 rounded-xl"
        v-model="input"
      />
      <div>
        <!-- <div>
          <p>filter by category</p>
          <div
            v-for="(article, i) in data.data.filter((article) =>
              Object.keys(article)
            )"
            :key="i"
          >
            <p>{{ article }}</p>
          </div>
        </div> -->
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div
        v-if="input"
        class="w-full flex flex-wrap justify-center gap-3 h-full m-4 pb-8 max-w-[1240px]"
      >
        <ArticlesArticlecard
          v-for="(article, i) in data.data.filter((articles) =>
            articles.title.includes(input)
          )"
          :key="i"
          :title="article.title"
          :description="article.description"
          :image="article.image"
          :category="article.category"
          :author="article.author"
          :date="article.published_at"
        />
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div
        v-if="data"
        :class="
          input
            ? 'hidden'
            : `w-full flex flex-wrap justify-center gap-3 h-full m-4 pb-8 max-w-[1240px]`
        "
      >
        <ArticlesArticlecard
          v-for="(article, i) in data.data"
          :key="i"
          :title="article.title"
          :description="article.description"
          :image="article.image"
          :category="article.category"
          :author="article.author"
          :date="article.published_at"
        />
      </div>
    </div>
    <div
      v-if="
        data.data.filter((articles) => articles.title.includes(input))
          .length === 0
      "
      class="flex justify-center"
    >
      <div>
        <h1>No article found</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchData } from '~~/helpers/utils';

const data = fetchData();

const input = ref('');

let search = false;

useHead({
  title: 'Kis | Articles',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'find all information about kisi' }],
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
      content: `https://kisi-nuxt-app.herokuapp.com/articles`,
    },
  ],
});
</script>
