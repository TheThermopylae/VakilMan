<template>
  <section class="bg-white rounded p-5 pb-0 mt-5">
    <div class="md:flex gap-5 border-b pb3 mb-3">
      <div class="relative flex text-sm mt-3 md:m-0">
        <button
          @click="currentTab = 0"
          class="ml-14 border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 0,
            'text-gray-500 border-transparent': currentTab != 0
          }"
        >
          همه
        </button>
        <button
          @click="currentTab = 1"
          class="ml-14 border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 1,
            'text-gray-500 border-transparent': currentTab != 1
          }"
        >
          پاسخ داده شده
        </button>
        <button
          @click="currentTab = 2"
          class="border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 2,
            'text-gray-500 border-transparent': currentTab != 2
          }"
        >
          لغو شده
        </button>
      </div>
    </div>
    <div class="overflow-auto">
      <table
        class="min-w-[800px] w-full table-auto "
      >
        <thead class="text-c-gray-2 font-peyda bg-white">
          <tr>
          <th class="font-thin py-3 rounded-r">ردیف</th>
          <th class="font-thin py-3">نام کاربر</th>
          <th class="font-thin py-3">تاریخ ثبت</th>
          <th class="font-thin py-3 !text-right">دیدگاه کاربر</th>
          <th class="font-thin py-3">وضعیت</th>
          <th class="font-thin py-3 rounded-l">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <AdminPanelCommentsCommentRow
            v-for="item in 5"
          ></AdminPanelCommentsCommentRow>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
let currentTab = ref(0)
</script>

<style scoped>
* {
  text-align: center;
}
</style>
