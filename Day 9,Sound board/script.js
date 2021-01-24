const sounds = ['applause','gasp','boo','tada','victory', "wrong"]

sounds.forEach(sound =>{
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound 

  btn.addEventListener(('click'),()=>{
stopSongs()

    document.getElementById(sound).play() //Api built into javascript
  })
  document.getElementById('buttons').appendChild(btn)
})
function stopSongs(){
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    
    // pauses the song then resets it time played to 0
    song.pause()
    song.currentTime = 0 
  })
}