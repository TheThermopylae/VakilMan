<template>
  <AdminPanelTheDrawer></AdminPanelTheDrawer>
  <div
    class="container m-auto py-5 flex justify-between gap-5 items-start overflow-hidden"
  >
    <AdminPanelSideBar></AdminPanelSideBar>
    <div class="flex-grow overflow-x-auto">
      <slot />
    </div>
  </div>
</template>
