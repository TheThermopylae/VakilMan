<template>
  <div>
    <HeaderTheHeader></HeaderTheHeader>
    <slot />
    <TheFooter></TheFooter>
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
