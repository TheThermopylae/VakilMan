<template>
  <div class="bg-white p-4 rounded-xl cursor-pointer" @click="isOpen = !isOpen">
    <div class="flex gap-5 items-enter text-lg text-gray-700">
      <svg
        v-if="isOpen"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="text-green-500 text-2xl"
      >
        <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="text-secondary text-2xl"
      >
        <path
          fill="currentColor"
          d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
        />
      </svg>
      <div>
        {{ props.data.title }}
        <p class="mt-4 text-gray-600" v-if="isOpen">{{ props.data.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['data'])

let isOpen = ref(false)
</script>
