<template>
  <NuxtLayout name="user-layout">
    <nuxtPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  redirect: '/user-panel/dashboard',
})

useHead({
  titleTemplate: 'داشبورد کاربری | %s'
})
</script>
