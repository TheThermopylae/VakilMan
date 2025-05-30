<template>
  <div>
    <HeaderTheHeader></HeaderTheHeader>
    <slot />
    <TheFooter></TheFooter>
    <SpeedInsights />
  </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>
