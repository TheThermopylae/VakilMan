<template>
  <div
    class="container m-auto py-5 flex justify-between gap-5 items-start overflow-hidden"
  >
    <UserPanelSideBar></UserPanelSideBar>
    <div class="flex-grow overflow-x-auto">
      <slot />
    </div>
  </div>
</template>
