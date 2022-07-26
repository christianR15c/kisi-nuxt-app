<template>
  <div>
    <div class="flex justify-center gap-5 pt-3">
      <input
        type="text"
        placeholder="search"
        class="border-2 px-2 rounded-2xl py-1"
        v-model="input"
      />
    </div>
    <div class="flex justify-center gap-3 pt-4">
      <p>filter by category:</p>
      <div class="flex gap-2">
        <div
          v-for="(article, i) in Array.from(
            new Set(data.data.map((a) => a.category))
          ).map((id) => {
            return data.data.find((a) => a.category === id);
          })"
          :key="i"
        >
          <p
            class="px-2 border-2 rounded-xl text-gray-400 cursor-pointer"
            :class="article.category === selected && 'filtered-category'"
            @click="onSelect(article.category)"
          >
            {{ article.category }}
          </p>
        </div>
        <p
          class="px-2 border-2 rounded-xl text-gray-400 cursor-pointer"
          :class="selected === 'all' && 'filtered-category'"
          @click="selected = 'all'"
        >
          All
        </p>
      </div>
    </div>
    <div class="flex justify-center gap-3 pt-4">
      <p>sort by:</p>
      <div class="flex gap-2">
        <p
          class="px-2 border-2 rounded-xl text-gray-400 cursor-pointer"
          :class="sorted === 'Asc' && 'filtered-category'"
          @click="sorted = 'Asc'"
        >
          Asc
        </p>
        <p
          class="px-2 border-2 rounded-xl text-gray-400 cursor-pointer"
          :class="sorted === 'Desc' && 'filtered-category'"
          @click="sorted = 'Desc'"
        >
          Desc
        </p>
        <p
          class="px-2 border-2 rounded-xl text-gray-400 cursor-pointer"
          :class="sorted === 'Newest' && 'filtered-category'"
          @click="sorted = 'Newest'"
        >
          Newest
        </p>
        <p
          class="px-2 border-2 rounded-xl text-gray-400 cursor-pointer"
          :class="sorted === 'Oldest' && 'filtered-category'"
          @click="sorted = 'Oldest'"
        >
          Oldest
        </p>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div
        v-if="input"
        class="w-full flex flex-wrap justify-center gap-3 h-full m-4 pb-8 max-w-[1240px]"
      >
        <ArticlesArticlecard
          v-for="(article, i) in filteredArticles"
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
        v-if="selected === 'all'"
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
    <div class="flex w-full justify-center">
      <div
        v-if="data"
        :class="
          input || selected
            ? 'hidden'
            : `w-full flex flex-wrap justify-center gap-3 h-full m-4 pb-8 max-w-[1240px]`
        "
      >
        <ArticlesArticlecard
          v-for="(article, i) in sorted === 'Asc'
            ? data.data.sort((a, b) => {
                if (a.title < b.title) {
                  return -1;
                }
                if (a.title > b.title) {
                  return 1;
                }
                return 0;
              })
            : sorted === 'Desc'
            ? data.data.sort((a, b) => {
                if (a.title < b.title) {
                  return 1;
                }
                if (a.title > b.title) {
                  return -1;
                }
                return 0;
              })
            : sorted === 'Newest'
            ? data.data.sort(
                (a, b) =>
                  new Date(a.published_at).getTime() -
                  new Date(b.published_at).getTime()
              )
            : sorted === 'Oldest'
            ? data.data.sort(
                (a, b) =>
                  new Date(b.published_at).getTime() -
                  new Date(a.published_at).getTime()
              )
            : data.data"
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
        v-if="selected"
        class="w-full flex flex-wrap justify-center gap-3 h-full m-4 pb-8 max-w-[1240px]"
      >
        <ArticlesArticlecard
          v-for="(article, i) in data.data.filter(
            (articles) => articles.category === selected
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
// tried to use functions but couldn't work
// console.log('data:', data._rawValue.data);

// const filteredArticles = data._rawValue.data.filter((articles) =>
//   articles.title.includes(input)
// );

const input = ref('');
const selected = ref('');
const sorted = ref('');

const onSelect = (name) => {
  selected.value = name;
};
const onSort = (sortChoose) => {
  sorted.value = sortChoose;
};

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

<style>
.filtered-category {
  background-color: rgb(48, 105, 48);
  color: white;
}
</style>
