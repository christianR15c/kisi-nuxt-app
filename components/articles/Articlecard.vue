<template>
  <div
    class="sm:w-[420px] w-[380px] flex bg-white rounded-xl flex-col shadow-xl"
  >
    <div class="h-64 sm:w-[420px] w-[380px]">
      <img
        :src="
          image
            ? image
            : 'https://res.cloudinary.com/dmgfxu4fg/image/upload/v1658700535/articles_it8z4t.jpg'
        "
        alt="article image"
        class="object-cover h-full w-full"
      />
    </div>
    <div class="p-2 h-fit">
      <div class="h-24">
        <h1 class="text-xl py-2 font-semibold text-gray-700">
          {{
            title.split('').length > 80
              ? `${title.split('').splice(0, 80).join('')} ...`
              : title
          }}
        </h1>
      </div>
      <div class="pb-2">
        <p>
          Author: <span>{{ author }}</span>
        </p>
        <div class="flex gap-4">
          <p class="text-sm text-gray-600">{{ date.split('T')[0] }}</p>
          <p class="text-sm text-gray-600">
            {{ date.split('T')[1].split('+')[0] }}
          </p>
        </div>
      </div>
      <p class="text-gray-600">
        {{ description.split('').splice(0, 80).join('') }}
      </p>
    </div>
    <div class="flex justify-center pt-2 pb-6">
      <a
        :href="`/articles/${category}/${title.split(' ').join('-')}`"
        class="bg-green-700 px-6 text-white py-1 rounded-lg hover:drop-shadow-xl hover:bg-green-600"
      >
        read more</a
      >
    </div>
  </div>
  <div class="hidden"></div>
</template>

<script>
export default {
  props: ['description', 'author', 'date', 'title', 'image', 'category'],
};
</script>
