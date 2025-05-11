<template>
  <div class="container m-auto py-5 flex justify-between gap-5 items-start">
    <UserPanelSideBar></UserPanelSideBar>
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>
