<template>
  <div class="overflow-auto min-h-[500px]">
    <table
      class="min-w-[800px] w-full table-auto border-separate border-spacing-y-4"
    >
      <thead class="text-c-gray-2 font-peyda bg-white">
        <tr>
          <th class="font-thin py-3 rounded-r">نام و نام خانوادگی</th>
          <th class="font-thin py-3">عنوان درخواست</th>
          <th class="font-thin py-3">نوع درخواست</th>
          <th class="font-thin py-3">تاریخ درخواست</th>
          <th class="font-thin py-3">وضعیت</th>
          <th class="font-thin py-3 rounded-l">عملیات</th>
        </tr>
      </thead>
      <tbody>
        <AdminPanelLegalRequestsRequestRow v-for="item in 5"></AdminPanelLegalRequestsRequestRow>
      </tbody>
    </table>
  </div>
</template>



<style scoped>
* {
  text-align: center;
}
</style>
