<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
onMounted(() => {
  router.push({
    path: '/auth',
    query: { path: 'login' },
  });
});
</script>
