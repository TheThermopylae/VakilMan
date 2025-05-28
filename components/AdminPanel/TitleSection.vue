<template>
  <section class="justify-between items-end" :class="props.flex +':flex'">
    <div class="mb-3 2xl:m-0">
      <h1 class="text-[22px] font-yekSB mb-2"><slot name="title"></slot></h1>
      <p class="text-c-gray-2 text-sm xl:text-[16px]">
        <slot name="text"></slot>
      </p>
    </div>
    <slot name="action" v-if="$slots.action"></slot>
  </section>
</template>

<script setup>
let props = defineProps(['flex'])
</script>
