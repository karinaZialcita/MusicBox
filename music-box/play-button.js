// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.container = document.querySelector("#button");
    this.playing = true;

    //binding toggle
    this.toggle = this.toggle.bind(this);
    //event listener for switching with images when event is triggered
    this.container.addEventListener('click', this.toggle);
  }
  
  // TODO(you): Add methods as necessary.
  toggle(event) { //toggle conditions
    if (this.playing) {//if button is clicked while its playing 
      this.pause(); //then pause
    }
    else { //else play
      this.play();
    }
    this.playing = !this.playing;
  }
  //using the images provided for the buttons..
  pause() {
    this.container.style.backgroundImage = "url(images/play.png)";
    app.music.aud.pause();
  }
  play() {            
    this.container.style.backgroundImage = "url(images/pause.png)";
    app.music.aud.play();
  }
}

