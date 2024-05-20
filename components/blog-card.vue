<template>
  <div>
    <nuxt-link :to="`/${locale}/blogs/${blog.id}`">
      <img :src="blog.image" :alt="blog.title" class="w-full" />
    </nuxt-link>
    <div class="mt-3 lg:mt-8">
      <p class="text-xs lg:text-sm text-success font-semibold mb-1.5 lg:mb-3">
        {{ blog.source }} • {{ formatDate(blog.created_at) }}
      </p>
      <div class="flex items-start justify-between space-x-2">
        <span class="text-base lg:text-xl font-bold text-primary">{{ blog.title }}</span>

        <nuxt-link :to="`/${locale}/blogs/${blog.id}`">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.959641 10.2929C0.569117 10.6834 0.569117 11.3166 0.959641 11.7071C1.35017 12.0976 1.98333 12.0976 2.37385 11.7071L0.959641 10.2929ZM11.6667 1H12.6667C12.6667 0.447715 12.219 0 11.6667 0V1ZM1.66675 0C1.11446 0 0.666748 0.447715 0.666748 1C0.666748 1.55228 1.11446 2 1.66675 2V0ZM10.6667 11C10.6667 11.5523 11.1145 12 11.6667 12C12.219 12 12.6667 11.5523 12.6667 11H10.6667ZM2.37385 11.7071L12.3739 1.70711L10.9596 0.292893L0.959641 10.2929L2.37385 11.7071ZM1.66675 2H11.6667V0H1.66675V2ZM10.6667 1V11H12.6667V1H10.6667Z"
              fill="#101828"
            />
          </svg>
        </nuxt-link>
      </div>
      <p class="mt-1.5 lg:mt-3 text-xs lg:text-[15px] text-[#5E5E5E]">{{ blog.short_description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const { locale } = useI18n();

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(
    `${locale.value}-${locale.value.toUpperCase()}`,
    options
  );
};
</script>
