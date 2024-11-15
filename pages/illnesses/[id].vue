<template>
  <div class="container lg:mt-10">
    <div
      style="background-image: url('/images/illness-bg.png')"
      class="w-full flex flex-col lg:flex-row-reverse items-start aspect-[12/5] bg-center bg-cover bg-no-repeat px-4 lg:pr-[78px] lg:pl-[62px] pb-10"
    >
      <img class="w-full lg:w-[35%]" :src="illness?.image" :alt="illness?.title" />
      <div class="lg:w-[65%] lg:mt-10">
        <h1 class="text-xl lg:text-5xl font-bold text-[#323638]">{{ illness?.title }}</h1>
        <p class="text-sm lg:text-base text-[#5E5E5E] mt-2 lg:mt-5">{{ illness?.description }}</p>
      </div>
    </div>
    <div v-html="illness?.content" class="revert-tailwind"></div>
    <contact-us />
  </div>
</template>

<script setup>
const route = useRoute();
const illness = api(`/illnesses/${route.params.id}/`).data;

useSeoMeta({
  title: `Hayot Ildizi | ${illness?.value?.title}`,
  ogTitle: `Hayot Ildizi | ${illness?.value?.title}`,
  description:
    "🌿 Go'zallik va salomatlik bir flakonda! Spirulina va Ginseng Extract. 🚛 Bepul yetkazish xizmati.",
  ogDescription:
    "🌿 Go'zallik va salomatlik bir flakonda! Spirulina va Ginseng Extract. 🚛 Bepul yetkazish xizmati.",
});
</script>
