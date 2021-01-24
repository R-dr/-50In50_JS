const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


jokeBtn.addEventListener('click', getJoke)
getJoke();

//async method
async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
// .then method 
// function getJoke() {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     });
// }
