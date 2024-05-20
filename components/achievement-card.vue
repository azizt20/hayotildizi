<template>
  <div class="bg-[#F6FBE9] border border-[#E5F5BD] p-4 lg:p-10 h-full rounded-[10px]">
    <div class="flex items-center space-x-[10px]">
      <div
        class="bg-success flex items-center justify-center size-[28px] lg:size-[54px] rounded-md"
      >
        <img :src="achievement.icon" alt="icon" class="size-4 lg:size-auto" />
      </div>
      <span class="font-semibold text-sm lg:text-lg text-primary">
        {{ achievement.title }}
      </span>
    </div>
    <p class="mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E]">
      {{ achievement.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  achievement: {
    type: Object,
    required: true,
  },
});
</script>
