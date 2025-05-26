<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      id="profile"
      @change="handleFile"
    />
    <button
      @click="triggerFileInput"
      class=" flex justify-between items-center w-full bg-[#0ABAB50F] text-[#0ABAB5] border-2 border-dashed border-[#0ABAB54D] rounded p-[10.5px] mt-2"
    >
      <span></span>
      بارگذاری تصویر پروفایل
      <svg
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_7186)">
          <path
            d="M12.8796 19.3334H17.7129C18.3775 19.3334 18.9212 18.7896 18.9212 18.125V12.0834H20.8425C21.9179 12.0834 22.4616 10.7784 21.7004 10.0171L16.1541 4.47087C15.6829 3.99962 14.9216 3.99962 14.4504 4.47087L8.90414 10.0171C8.14289 10.7784 8.67456 12.0834 9.74997 12.0834H11.6712V18.125C11.6712 18.7896 12.215 19.3334 12.8796 19.3334ZM8.04622 21.75H22.5462C23.2108 21.75 23.7546 22.2938 23.7546 22.9584C23.7546 23.623 23.2108 24.1667 22.5462 24.1667H8.04622C7.38164 24.1667 6.83789 23.623 6.83789 22.9584C6.83789 22.2938 7.38164 21.75 8.04622 21.75Z"
            fill="#0ABAB5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_7186">
            <rect
              width="29"
              height="29"
              fill="white"
              transform="translate(0.796875)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  console.log('فایلی که انتخاب شد:', file)
}
</script>
