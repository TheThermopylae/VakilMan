<template>
  <tr class="bg-white">
    <td class="py-5 rounded-r">1</td>
    <td class="py-5 px-4">AmirBrzgr</td>
    <td class="py-5 px-4">1402/08/24</td>
    <td class="py-5 px-4 text-xs text-right w-[400px] pr-0 leading-6">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است
    </td>
    <td class="py-5 px-4 text-[#E88F00]">تایید نشده</td>
    <td>
      <div class="card inline-block">
        <Button class="inline-block" unstyled>
          <svg
            class="inline-block"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.796875"
              width="29"
              height="29"
              rx="4"
              fill="#3D96D1"
              fill-opacity="0.12"
            />
            <g clip-path="url(#clip0_1_11168)">
              <path
                d="M15.7969 10.2305C12.7399 10.2305 9.96768 11.903 7.92207 14.6195C7.75514 14.8421 7.75514 15.153 7.92207 15.3756C9.96768 18.0955 12.7399 19.768 15.7969 19.768C18.8538 19.768 21.6261 18.0955 23.6717 15.3789C23.8386 15.1563 23.8386 14.8454 23.6717 14.6228C21.6261 11.903 18.8538 10.2305 15.7969 10.2305ZM16.0162 18.3573C13.9869 18.4849 12.3111 16.8124 12.4388 14.7799C12.5435 13.1042 13.9018 11.7459 15.5776 11.6411C17.6068 11.5135 19.2826 13.186 19.155 15.2185C19.047 16.891 17.6887 18.2493 16.0162 18.3573ZM15.9147 16.8059C14.8215 16.8746 13.9182 15.9746 13.9902 14.8814C14.0458 13.978 14.779 13.2482 15.6823 13.1892C16.7755 13.1205 17.6788 14.0206 17.6068 15.1138C17.5479 16.0204 16.8148 16.7503 15.9147 16.8059Z"
                fill="#3B93E3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_11168">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(7.79688 7)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
      <Dialog
        v-model:visible="visibleAccept"
        modal
        header="ثبت نظر"
        class="w-11/12 max-w-[400px] text-secondary"
      >
        <template #closebutton>
          <svg
            @click="visibleAccept = false"
            class="cursor-pointer"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.05" cx="20.7969" cy="20" r="20" fill="#E71D36" />
            <path
              opacity="0.8"
              d="M21.713 19.9999L25.6068 23.8939C25.8602 24.1472 25.8602 24.5567 25.6068 24.81C25.3535 25.0633 24.944 25.0633 24.6907 24.81L20.7968 20.916L16.903 24.81C16.6496 25.0633 16.2402 25.0633 15.9869 24.81C15.7335 24.5567 15.7335 24.1472 15.9869 23.8939L19.8807 19.9999L15.9869 16.1059C15.7335 15.8526 15.7335 15.4431 15.9869 15.1898C16.1132 15.0635 16.2791 15 16.445 15C16.6108 15 16.7767 15.0635 16.903 15.1898L20.7968 19.0838L24.6907 15.1898C24.8171 15.0635 24.9829 15 25.1488 15C25.3146 15 25.4805 15.0635 25.6068 15.1898C25.8602 15.4431 25.8602 15.8526 25.6068 16.1059L21.713 19.9999Z"
              fill="#E71D36"
            />
          </svg>
        </template>
        <span class="text-surface-500 dark:text-surface-400 block mb-8"
          >آیا میخواهید این نظر را ثبت کنید؟</span
        >
        <div class="grid grid-cols-2 md:flex justify-end mt-7 gap-3">
          <button
            class="cancel-btn min-w-[150px]"
            @click="visibleAccept = false"
          >
            خیر
          </button>
          <button class="dash-btn min-w-[150px]" @click="acceptComment">
            بله
          </button>
        </div>
      </Dialog>
      <svg
        @click="visibleAccept = true"
        class="inline-block cursor-pointer mx-1"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.796875"
          width="29"
          height="29"
          rx="4"
          fill="#4BAE4F"
          fill-opacity="0.12"
        />
        <path
          d="M13.168 19.861C11.4238 18.2231 9.69037 16.5702 7.94089 14.9323C7.74887 14.752 7.74887 14.4514 7.94089 14.2711L9.95172 12.3828C10.1437 12.2024 10.4638 12.2024 10.6558 12.3828L13.5307 15.0825L20.9233 8.13524C21.1207 7.95492 21.4353 7.95492 21.6327 8.13524L23.6489 10.0286C23.8462 10.2139 23.8462 10.5094 23.6489 10.6898L13.872 19.861C13.68 20.0463 13.3653 20.0463 13.168 19.861Z"
          fill="#4BAE4F"
        />
      </svg>
      <Button @click="visibleRemove = true" unstyled>
        <svg
          class="inline-block cursor-pointer"
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.796875"
            width="29"
            height="29"
            rx="4"
            fill="#EE404C"
            fill-opacity="0.12"
          />
          <path
            d="M10.2194 19.5774C10.3514 19.7113 10.5087 19.8176 10.6821 19.8901C10.8556 19.9626 11.0417 20 11.2297 20C11.4176 20 11.6038 19.9626 11.7772 19.8901C11.9506 19.8176 12.1079 19.7113 12.2399 19.5774L15.2989 16.5184L18.358 19.5774C18.6259 19.8454 18.9893 19.9959 19.3682 19.9959C19.7471 19.9959 20.1105 19.8454 20.3784 19.5774C20.6464 19.3095 20.7969 18.9461 20.7969 18.5672C20.7969 18.1883 20.6464 17.8249 20.3784 17.557L17.3194 14.4979L20.3784 11.4389C20.5111 11.3062 20.6163 11.1487 20.6881 10.9754C20.7599 10.8021 20.7969 10.6163 20.7969 10.4287C20.7969 10.2411 20.7599 10.0553 20.6881 9.88194C20.6163 9.70861 20.5111 9.55111 20.3784 9.41845C20.2458 9.28578 20.0883 9.18055 19.9149 9.10875C19.7416 9.03695 19.5558 9 19.3682 9C19.1806 9 18.9948 9.03695 18.8215 9.10875C18.6481 9.18055 18.4906 9.28578 18.358 9.41845L15.2989 12.4775L12.2399 9.41845C12.1072 9.28578 11.9497 9.18055 11.7764 9.10875C11.6031 9.03695 11.4173 9 11.2297 9C11.042 9 10.8563 9.03695 10.6829 9.10875C10.5096 9.18055 10.3521 9.28578 10.2194 9.41845C10.0868 9.55111 9.98154 9.70861 9.90974 9.88194C9.83794 10.0553 9.80099 10.2411 9.80099 10.4287C9.80099 10.6163 9.83794 10.8021 9.90974 10.9754C9.98154 11.1487 10.0868 11.3062 10.2194 11.4389L13.2785 14.4979L10.2194 17.557C10.0856 17.689 9.97931 17.8463 9.90677 18.0197C9.83423 18.1931 9.79688 18.3792 9.79688 18.5672C9.79688 18.7552 9.83423 18.9413 9.90677 19.1147C9.97931 19.2882 10.0856 19.4454 10.2194 19.5774Z"
            fill="#EE404C"
          />
        </svg>
      </Button>
      <Dialog
        v-model:visible="visibleRemove"
        modal
        header="رد نظر"
        class="w-11/12 max-w-[400px] text-secondary"
      >
        <template #closebutton>
          <svg
            @click="visible = false"
            class="cursor-pointer"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.05" cx="20.7969" cy="20" r="20" fill="#E71D36" />
            <path
              opacity="0.8"
              d="M21.713 19.9999L25.6068 23.8939C25.8602 24.1472 25.8602 24.5567 25.6068 24.81C25.3535 25.0633 24.944 25.0633 24.6907 24.81L20.7968 20.916L16.903 24.81C16.6496 25.0633 16.2402 25.0633 15.9869 24.81C15.7335 24.5567 15.7335 24.1472 15.9869 23.8939L19.8807 19.9999L15.9869 16.1059C15.7335 15.8526 15.7335 15.4431 15.9869 15.1898C16.1132 15.0635 16.2791 15 16.445 15C16.6108 15 16.7767 15.0635 16.903 15.1898L20.7968 19.0838L24.6907 15.1898C24.8171 15.0635 24.9829 15 25.1488 15C25.3146 15 25.4805 15.0635 25.6068 15.1898C25.8602 15.4431 25.8602 15.8526 25.6068 16.1059L21.713 19.9999Z"
              fill="#E71D36"
            />
          </svg>
        </template>
        <span class="text-surface-500 dark:text-surface-400 block mb-8"
          >آیا میخواهید این نظر را رد کنید؟</span
        >
        <div class="grid grid-cols-2 md:flex justify-end mt-7 gap-3">
          <button
            class="cancel-btn min-w-[150px]"
            @click="visibleRemove = false"
          >
            خیر
          </button>
          <button class="dash-btn min-w-[150px]" @click="removeRequest">
            بله
          </button>
        </div>
      </Dialog>
    </td>
    <Toast />
  </tr>
</template>

<script setup>
const visible = ref(false)
const visibleRemove = ref(false)
const visibleAccept = ref(false)

let toast = useToast()

function acceptComment () {
  visibleAccept.value = false

  toast.add({
    severity: 'success',
    summary: 'موفقیت آمیز',
    detail: 'نظر با موفقیت ثبت شد',
    life: 5000
  })
}

function removeRequest () {
  visibleRemove.value = false

  toast.add({
    severity: 'success',
    summary: 'موفقیت آمیز',
    detail: 'نظر با موفقیت رد شد',
    life: 5000
  })
}
</script>
