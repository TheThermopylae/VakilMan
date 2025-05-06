<template>
  <div class="card flex justify-center lg:hidden">
    <Drawer
      v-model:visible="visible"
      position="right"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
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
