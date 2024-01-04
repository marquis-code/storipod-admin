<template>
  <div
    class="z-0 flex h-screen w-full items-center justify-center bg-[#0BA9B9] px-8 py-8 sm:px-12 lg:col-span-7 lg:h-auto lg:px-16 lg:py-12 xl:col-span-6"
  >
    <div class="flex h-full w-full max-w-xl items-center justify-center lg:max-w-2xl">
      <div class="mt-8 w-full space-y-10">
        <div class="space-y-4">
          <h1 class="text-2xl font-semibold text-white">Login</h1>
          <p class="text-sm text-white">Enter your credentials to login</p>
        </div>
        <div class="col-span-6 w-full">
          <label for="Email" class="block text-sm font-medium text-white"> Email </label>

          <input
            id="Email"
            v-model="form.email"
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            class="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-3.5 text-sm text-gray-700 shadow-sm outline-none"
          />
        </div>

        <div class="relative col-span-6 w-full">
          <label for="Password" class="block text-sm font-medium text-white"> Password </label>

          <input
            id="Password"
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            placeholder="Enter Your Password..."
            class="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-3.5 text-sm text-gray-700 shadow-sm outline-none"
          />
          <img
            v-if="showPassword"
            src="@/assets/icons/eye-open.svg"
            alt=""
            class="absolute right-4 top-10 h-6 w-6 cursor-pointer"
            @click="showPassword = !showPassword"
          />
          <img
            v-if="!showPassword"
            src="@/assets/icons/eye-close.svg"
            alt=""
            class="absolute right-4 top-10 h-6 w-6 cursor-pointer"
            @click="showPassword = !showPassword"
          />
          <div class="flex items-end justify-end pt-3">
            <button class="text-sm font-medium text-gray-600" @click="setActiveTab">Forgot Password?</button>
          </div>
        </div>
        <div class="w-full pt-10">
          <button
            :disabled="!isFormEmpty || processing"
            class="flex w-full shrink-0 items-center justify-center gap-x-3 rounded-md border border-white bg-[#0BA9B9] px-12 py-4 text-sm font-medium text-white transition hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-25"
            @click="handleLogin"
          >
            <img src="@/assets/icons/arrow-right-white.svg" alt="" />
            {{ processing ? 'processing...' : 'Login' }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <loading-spinner ref="spinner" class="z-50" />
</template>

<script setup lang="ts">
const emit = defineEmits(['forgotPassword', 'processLogin']);
const showPassword = ref(false);
const processing = ref(false);
const form = reactive({
  email: '',
  password: '',
});
const handleLogin = () => {
  processing.value = true;
  emit('processLogin', processing.value);
  setTimeout(() => {
    processing.value = false;
  }, 4000);
};

watch(processing, (val) => {
  emit('processLogin', val);
});
const isFormEmpty = computed(() => {
  return !!(form.email && form.password);
});

const setActiveTab = () => {
  emit('forgotPassword');
};
</script>
