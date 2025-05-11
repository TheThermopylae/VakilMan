<template>
  <NuxtLayout name="user-layout">
    <nuxtPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  
})

useHead({
  titleTemplate : 'داشبورد کاربری | %s'
})
</script>
