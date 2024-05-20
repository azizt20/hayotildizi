<template>
  <div
    class="bg-white border border-[#E9E9E9] p-4 lg:p-10 lg:pb-6 h-full rounded-[10px] shadow"
  >
    <div class="flex items-center space-x-[10px]">
      <img class="size-10 lg:size-16" :src="illness.icon" alt="icon" />
      <span class="font-semibold text-sm lg:text-lg text-primary">
        {{ illness.title }}
      </span>
    </div>
    <p class="mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E] mb-4">
      {{ illness.description }}
    </p>
    <nuxt-link :to="`/${locale}/illnesses/${illness.id}`" class="text-success text-xs lg:text-base flex items-center font-semibold space-x-2">
      <span>{{ $t("more") }}</span>
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9L13 5M13 5L9 1M13 5L1 5"
          stroke="#03A64A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  illness: {
    type: Object,
    required: true,
  },
});

const { locale } = useI18n();
</script>
