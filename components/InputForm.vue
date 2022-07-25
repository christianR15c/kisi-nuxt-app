<template>
  <div class="mt-[10px] pb-12">
    <div class="flex justify-center">
      <div class="w-[500px] p-10 rounded-xl shadow-xl">
        <p class="text-2xl text-gray-500">
          Subscribe to get weekly newspaper and daily updates
          <span class="text-red-400">
            (email can not be sent because of less secure apps are not currently
            authorized to send emails)</span
          >
        </p>
        <div class="flex justify-center">
          <div class="pt-12 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter your name"
              class="border-2 w-[300px] border-green-700 px-2 rounded-md focus:outline-none focus:border-green-500 text-gray-500"
              v-model="username"
            />
            <input
              type="text"
              placeholder="Enter your email"
              class="border-2 w-[300px] border-green-700 px-2 rounded-md focus:outline-none focus:border-green-500 text-gray-500"
              v-model="email"
            />
            <input
              type="text"
              placeholder="Enter your favorite category"
              class="border-2 w-[300px] border-green-700 px-2 rounded-md focus:outline-none focus:border-green-500 text-gray-500"
              v-model="favCategory"
            />
          </div>
        </div>
        <div class="flex justify-center pt-6">
          <button
            class="bg-green-700 px-6 text-white py-1 rounded-lg hover:drop-shadow-xl hover:bg-green-600"
          >
            Subcribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref('');
const email = ref('');
const favCategory = ref('');
</script>
