export const useAuth = () => {
  const isAuthenticated = ref(false);

  return { isAuthenticated };
};
