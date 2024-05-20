<template>
  <nuxt-link v-if="to" :to="to" :class="classes">
    <slot />
  </nuxt-link>
  <button v-else :class="classes" :disabled="disabed">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  to: String,
  size: {
    type: String,
    default: "md",
  },
  disabed: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => {
  return [
    props.outline
      ? `border border-success text-success hover:bg-success hover:text-white`
      : `bg-success text-white hover:bg-success/90 border border-success`,
    props.full ? "w-full !px-0" : "",
    props.size === "xs"
      ? "!text-[8px] leading-[10.36px] !py-1.5 !px-3 lg:leading-1 lg:!text-base lg:!px-5 lg:!py-3"
      : "",
    "inline-flex items-center justify-center text-sm lg:text-base px-3 py-1.5 lg:px-5 lg:py-3 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-success",
  ];
});
</script>
