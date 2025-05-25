<template>
  <NuxtLayout name="admin-layout">
    <nuxtPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  redirect: '/admin-panel/dashboard'
})

useHead({
  titleTemplate: 'داشبورد ادمین %s'
})
</script>
