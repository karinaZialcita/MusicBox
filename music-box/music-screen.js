// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement) {
  	this.song;
  	this.gif;
  	this.url;
  	this.theme;
	this.containerElement = containerElement;
    // TODO(you): Implement the constructor and add fields as necessary.
    this.aud = new AudioPlayer();
    let play = new PlayButton();
  }
  // TODO(you): Add methods as necessary.

  show () {
  	this.containerElement.classList.remove('inactive');
  	for (const key in songs) {
  		if (songs[key]['title'] === this.song) {
				this.url = songs[key]['songUrl'];
 			}
 		}
 		console.log(this.url);
    this.aud.setSong(this.url);
  }
  hide() {
	this.containerElement.classList.add('inactive');
}

}
