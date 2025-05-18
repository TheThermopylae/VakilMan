<template>
  <div>
    <input type="file" ref="fileInput" class="hidden" id="profile" @change="handleFile" />
    <button
      @click="triggerFileInput"
      class="font-bold text-[#0ABAB5] mt-2 border-2 border-dashed w-full flex justify-center items-center flex-col p-5 gap-1 rounded-xl border-gray-300 bg-[#F7F7F8]"
    >
      <svg
        width="44"
        height="43"
        viewBox="0 0 44 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_5457)">
          <path
            d="M18.7142 28.6668H25.8809C26.8663 28.6668 27.6725 27.8605 27.6725 26.8751V17.9168H30.5213C32.1159 17.9168 32.9221 15.9818 31.7934 14.853L23.5696 6.62929C22.8709 5.93054 21.7421 5.93054 21.0434 6.62929L12.8196 14.853C11.6909 15.9818 12.4792 17.9168 14.0738 17.9168H16.9225V26.8751C16.9225 27.8605 17.7288 28.6668 18.7142 28.6668ZM11.5475 32.2501H33.0475C34.0329 32.2501 34.8392 33.0564 34.8392 34.0418C34.8392 35.0272 34.0329 35.8335 33.0475 35.8335H11.5475C10.5621 35.8335 9.75586 35.0272 9.75586 34.0418C9.75586 33.0564 10.5621 32.2501 11.5475 32.2501Z"
            fill="#0ABAB5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_5457">
            <rect
              width="43"
              height="43"
              fill="white"
              transform="translate(0.796875)"
            />
          </clipPath>
        </defs>
      </svg>
      انتخاب تصویر پروفایل
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
