const boxes = document.querySelectorAll('.box')

//  boxes can be anything and check boxes just checks to see if the box is on screen
window.addEventListener('scroll', checkBoxes)
 checkBoxes()
function checkBoxes(){
  const triggerBottom = window.innerHeight / 5 * 4 //gives you the bottom of the div
  boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top // function that returns the size and position of the given element
    if (boxTop < triggerBottom) // so if the browser has scrolled to where the given node list item should be add a class of show, otherwise remove it
    {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
 // then triggers the event based on where in the window you have scrolled to 
  

}