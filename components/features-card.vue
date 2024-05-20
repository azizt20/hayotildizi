<template>
  <div class="bg-[#F6FBE9] border border-[#E5F5BD] p-4 lg:p-10 h-full rounded-[10px]">
    <div class="flex items-center space-x-[10px]">
      <div
        class="bg-[#CBEA7B] flex items-center justify-center size-[28px] lg:size-[54px] rounded-md"
      >
        <img :src="feature.icon" alt="icon" class="size-4 lg:size-auto" />
      </div>
      <span class="font-semibold text-sm lg:text-lg text-primary">
        {{ feature.title }}
      </span>
    </div>
    <p class="mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E]">
      {{ feature.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
});
</script>
