<template>
    <div class="container" v-if="blog">
        <p class="text-xs font-semibold text-[#5E5E5E]">
            {{ blog.source }}
        </p>
        <h1 class="text-xl lg:text-[32px] font-bold text-primary mt-2 lg:mt-5">
            {{ blog.title }}
        </h1>
        <p class="text-xs font-semibold text-[#5E5E5E] my-2 lg:my-5">
            {{ formatDate(blog.created_at) }}
        </p>
        <div v-html="blog.content" class="revert-tailwind"></div>
    </div>
</template>

<script setup>
const route = useRoute();
const blog = api(`/blogs/${route.params.id}`).data;

const { locale } = useI18n();

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const fdate = new Date(date).toLocaleDateString(
    `${locale.value}-${locale.value.toUpperCase()}`,
    options
  )
  const time = new Date(date).toLocaleTimeString(
    `${locale.value}-${locale.value.toUpperCase()}`,
    { hour: '2-digit', minute: '2-digit' }
  )
  return `${fdate} ${time}`;
};
</script>