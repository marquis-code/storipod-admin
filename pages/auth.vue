<template>
  <main :class="[spinner?.isVisible ? 'blur-sm filter' : '']">
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <login-component
          v-if="route.query.page === 'login'"
          @forgot-password="setActiveTab"
          @process-login="handleLogin"
        />
        <forgot-password-component
          v-else-if="route.query.page === 'forgot'"
          @success="handleForgotPasswordSuccess"
          @redirect-login="navigateToLogin"
        />
        <email-sent-success v-else-if="route.query.page === 'success'" @redirect-login="navigateToLogin" />
        <section
          class="relative hidden h-32 items-center justify-center bg-[#EBFFFF] lg:col-span-5 lg:flex lg:h-full xl:col-span-6"
        >
          <div class="absolute right-10 top-4 flex items-end justify-end">
            <div class="flex items-center gap-x-10">
              <nuxt-link to="/">Terms</nuxt-link>
              <nuxt-link to="/">Privacy</nuxt-link>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p v-if="route.query.page === 'login'" class="text-lg font-medium leading-loose tracking-wider">
              “Transforming data into actionable insights.”
            </p>
            <div class="">
              <img
                alt="Login Animated Image"
                src="@/assets/icons/animated-login.svg"
                class="object-cover object-center"
              />
            </div>
            <div v-if="route.query.page === 'login'" class="">
              <h2 class="mt-6 text-center text-2xl font-bold sm:text-3xl md:text-xl">Read. Write . Create</h2>

              <p class="mt-4 text-center leading-relaxed text-[#737876]">
                Homepod Tells us about Storipod and Storipod is feeling
              </p>
            </div>
            <p v-else-if="route.query.page === 'forgot'" class="mt-4 text-center leading-relaxed text-[#737876]">
              Easily retrieve your password via email recovery.
            </p>
            <div v-if="route.query.page === 'login'" class="flex w-full items-center justify-between pt-10">
              <div>
                <img src="@/assets/icons/arrow-left.svg" alt="" />
              </div>
              <div class="flex items-center justify-between gap-x-3">
                <img src="@/assets/icons/active-eclipse.svg" alt="" />
                <img src="@/assets/icons/eclipse.svg" alt="" />
                <img src="@/assets/icons/eclipse.svg" alt="" />
              </div>
              <div>
                <img src="@/assets/icons/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <loading-spinner ref="spinner" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
definePageMeta({
  layout: 'auth',
});
const spinner = ref(null) as any;
onMounted(() => {
  const newQuery = { page: 'login' };
  router.push({ query: newQuery });
});

const handleLogin = (val: boolean) => {
  spinner.value.isVisible = val;
};

const setActiveTab = () => {
  const newQuery = { page: 'forgot' };
  router.push({ query: newQuery });
};

const handleForgotPasswordSuccess = () => {
  const newQuery = { page: 'success' };
  router.push({ query: newQuery });
};

const navigateToLogin = () => {
  const newQuery = { page: 'login' };
  router.push({ query: newQuery });
};
</script>
