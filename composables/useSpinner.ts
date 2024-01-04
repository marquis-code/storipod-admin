export const useSpinner = () => {
  const isVisible = ref(false);

  const toggleSpinner = () => {
    isVisible.value = !isVisible.value;
  };

  return { isVisible, toggleSpinner };
};
