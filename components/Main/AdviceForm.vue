<template>
  <section class="container m-auto mb-10">
    <div
      class="before-line"
    >
      <h2
        class="font-bold mb-3 text-2xl text-secondary relative before:content-[''] before:absolute before:w-[5px] before:bg-secondary before:h-full before:bg-purple-c before:top-0 before:right-0 pr-6 before:rounded-full"
      >
        فرم مشاوره آنلاین
      </h2>
      <p class="text-[#3D3D3D] mr-6">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
    </div>
    <form class="lg:flex justify-between gap-5">
      <div class="bg-[#FFDDAB8A] lg:w-1/3 px-10 py-7 rounded-xl">
        <div class="grid grid-cols-2 gap-3">
          <input
            type="text"
            id="first-name"
            placeholder="نام : "
            class="placeholder:text-black p-2 rounded border w-full"
          />
          <input
            type="text"
            id="last-name"
            placeholder="نام خانوادگی : "
            class="placeholder:text-black p-2 rounded border"
          />
          <input
            type="text"
            id="phone-number"
            placeholder="شماره تماس : "
            class="placeholder:text-black p-2 rounded border w-full col-span-2"
          />
        </div>
      </div>
      <div class="lg:w-2/3 bg-secondary rounded-xl p-5 relative mt-2 lg:m-0">
        <div
          class="border-2 border-dashed h-full border-[#FFFFFF4A] rounded-xl p-5"
        >
          <label for="text" class="text-white text-lg block"
            >متن پیام :</label
          >
          <input
            type="text"
            id="text"
            class="bg-transparent block w-full outline-none mt-1 text-[#eee]"
            placeholder="در این قسمت خلاصه ای از پرونده ی حقوقی خود را وارد کنید ..."
          />
        </div>
        <button
          class="w-full lg:w-auto px-10 py-3 bg-primary flex items-center justify-center rounded-xl absolute left-0 lg:left-16 lg:bottom-0 translate-y-1/2 text-white gap-2 text-lg"
        >
          ارسال درخواست
          <span
            class="h-[30px] w-[30px] rounded-lg bg-[#8E6119] text-white flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m12 19l-7-7l7-7m7 7H5"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  </section>
</template>
