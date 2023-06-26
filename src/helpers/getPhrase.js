export const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const {slip} = await res.json();
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
   return slip

};


