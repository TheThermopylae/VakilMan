<template>
  <div class="card flex justify-center lg:hidden">
    <Drawer
      v-model:visible="visible"
      position="right"
      pt:content="flex flex-col justify-between"
    >
      <ul class="text-secondary leading-8">
        <li>
          <nuxtLink
            @click="visible = false"
            class="block py-1 px-2 rounded"
            to="/"
            active-class="bg-secondary text-white"
          >
            صفحه اصلی
          </nuxtLink>
        </li>
        <li>
          <nuxtLink
            @click="visible = false"
            class="block py-1 px-2 rounded"
            to="/counseling"
            active-class="bg-secondary text-white"
          >
            مشاوره
          </nuxtLink>
        </li>
        <li>
          <nuxtLink
            @click="visible = false"
            class="block py-1 px-2 rounded"
            to="/contact-us"
            active-class="bg-secondary text-white"
          >
            تماس با ما
          </nuxtLink>
        </li>
        <li>
          <nuxtLink
            @click="visible = false"
            class="block py-1 px-2 rounded"
            to="/about-us"
            active-class="bg-secondary text-white"
          >
            درباره ما
          </nuxtLink>
        </li>
      </ul>
      <ul class="text-center">
        <li class="mb-1">
          <NuxtLink to="/user-panel" class="bg-primary p-2 rounded block">عضویت</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin-panel">ورود</NuxtLink>
        </li>
      </ul>
    </Drawer>
    <Button class="flex items-center" :unstyled="true" @click="visible = true">
      <template #icon>
        <slot></slot>
      </template>
    </Button>
  </div>
</template>

<script setup>
const visible = ref(false)
</script>
