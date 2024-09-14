export default async function getPostText() {
  const response = await fetch("http://doomreed.info/quotes/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  const { quote } = data;
  return quote;
}
