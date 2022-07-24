<template>
  <div class="flex w-full justify-center">
    <div
      v-if="data.results !== 0"
      class="w-full flex flex-wrap justify-center gap-3 h-full m-4 pb-8 max-w-[1240px]"
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
</template>

<script setup>
import { fetchData } from '~~/helpers/utils';

const data = fetchData();

definePageMeta({
  title: 'Articles',
});
</script>
