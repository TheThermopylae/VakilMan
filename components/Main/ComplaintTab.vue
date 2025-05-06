<template>
  <div class="w-1/3">
    <button
      @click="$emit('changeTab', 0)"
      class="w-full p-4 rounded-2xl flex gap-5 items-center border text-2xl mb-3 transition-all"
      :class="{
        'bg-secondary text-white': props.tab == 0,
        'bg-white text-black': props.tab != 0
      }"
    >
      <div class="w-10 h-10 rounded-full" :class="{'bg-[#FCC265]' : props.tab == 0 ,'bg-[#001A4640]' : props.tab != 0}"></div>
      تنظیم دادخواست
    </button>
    <button
      @click="$emit('changeTab', 1)"
      class="w-full p-4 rounded-2xl flex gap-5 items-center border text-2xl mb-3 transition-all"
      :class="{
        'bg-secondary text-white': props.tab == 1,
        'bg-white text-black': props.tab != 1
      }"
    >
      <div class="w-10 h-10 rounded-full" :class="{'bg-[#FCC265]' : props.tab == 1 ,'bg-[#001A4640]' : props.tab != 1}"></div>
      تنظیم شکواییه
    </button>
    <button
      @click="$emit('changeTab', 2)"
      class="w-full p-4 rounded-2xl flex gap-5 items-center border text-2xl mb-3 transition-all"
      :class="{
        'bg-secondary text-white': props.tab == 2,
        'bg-white text-black': props.tab != 2
      }"
    >
      <div class="w-10 h-10 rounded-full" :class="{'bg-[#FCC265]' : props.tab == 2 ,'bg-[#001A4640]' : props.tab != 2}"></div>
      تنظیم اظهار نامه
    </button>
    <button
      @click="$emit('changeTab', 3)"
      class="w-full p-4 rounded-2xl flex gap-5 items-center border text-2xl transition-all"
      :class="{
        'bg-secondary text-white': props.tab == 3,
        'bg-white text-black': props.tab != 3
      }"
    >
      <div class="w-10 h-10 rounded-full" :class="{'bg-[#FCC265]' : props.tab == 3 ,'bg-[#001A4640]' : props.tab != 3}"></div>
      تنظیم لایحه
    </button>
  </div>
</template>

<script setup>
let props = defineProps(['tab'])
</script>
