<template>
  <div>
    <Button
      class="w-[45px] h-[45px] flex justify-center items-center border rounded-md"
      icon="pi pi-arrow-up"
      @click="visibleBottom = true"
      :unstyled="true"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
          />
        </svg>
      </template>
    </Button>
    <Drawer
      v-model:visible="visibleBottom"
      header="Bottom Drawer"
      position="bottom"
      style="height: auto"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Drawer>
  </div>
</template>

<script setup>
const visibleBottom = ref(false)
</script>
