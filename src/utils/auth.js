export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getAccountNumber = () => {
  const user = getUser();
  return user?.account?.accountNumber;
};