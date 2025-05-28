<template>
  <td class="py-3 px-4 rounded-l relative">
    <svg
      @click="showMenu = !showMenu"
      width="15"
      height="4"
      viewBox="0 0 15 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="cursor-pointer"
    >
      <path
        d="M14.2843 0.512567C13.6009 -0.170848 12.4929 -0.170848 11.8094 0.512567C11.126 1.19598 11.126 2.30402 11.8094 2.98744C12.4929 3.67085 13.6009 3.67085 14.2843 2.98744C14.9677 2.30405 14.9677 1.19601 14.2843 0.512567Z"
        fill="#001A46"
      />
      <path
        d="M9.03431 0.512567C8.3509 -0.170848 7.24286 -0.170848 6.55944 0.512567C5.87603 1.19598 5.87603 2.30402 6.55944 2.98744C7.24286 3.67085 8.3509 3.67085 9.03431 2.98744C9.71773 2.30405 9.71773 1.19601 9.03431 0.512567Z"
        fill="#001A46"
      />
      <path
        d="M3.78431 0.512567C3.1009 -0.170848 1.99285 -0.170848 1.30944 0.512567C0.626023 1.19598 0.626023 2.30402 1.30944 2.98744C1.99285 3.67085 3.1009 3.67085 3.78431 2.98744C4.46773 2.30405 4.46773 1.19601 3.78431 0.512567Z"
        fill="#001A46"
      />
    </svg>
    <Transition>
      <AdminPanelExpertsActionMenu
        :id="props.id"
        v-if="showMenu"
      ></AdminPanelExpertsActionMenu>
    </Transition>
  </td>
</template>
<script setup>
let showMenu = ref(false)

let props = defineProps(['id'])
</script>
