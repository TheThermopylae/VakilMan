<template>
  <AdminPanelTitleSection class="my-5" :flex="'xl'">
    <template #title>مدیریت دیدگاه ها</template>
    <template #action>
      <div class="relative">
        <input
          type="text"
          id="search-lawyer"
          class="py-2 px-3 border rounded w-full 2xl:w-72"
          placeholder="جستجو"
        />
        <svg
          class="absolute left-3 top-1/2 -translate-y-1/2"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <path
              d="M5.93973 11.2857C8.78005 11.2857 11.0826 8.98318 11.0826 6.14286C11.0826 3.30254 8.78005 1 5.93973 1C3.09941 1 0.796875 3.30254 0.796875 6.14286C0.796875 8.98318 3.09941 11.2857 5.93973 11.2857Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.796 13L10.2246 10.4286"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
    </template>
  </AdminPanelTitleSection>
  <AdminPanelCommentsTable></AdminPanelCommentsTable>
</template>
