const search = document.querySelector('.search')
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener('click', () => {
  search.classList.toggle('active') // the toggle class adds and removes a class, also returns a boolean doesnt need the . before it as you can see here
  input.focus() // thee focus function just brings something into focus like here it makes the text input go straight to the input field so the user doesnt need to click it 
})