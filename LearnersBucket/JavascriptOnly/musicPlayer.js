const playlist = [
    { songName: "First", time: 1000 },
    { songName: "Second", time: 2000 },
    { songName: "Third", time: 3000 }
  ];
  
  function playSong(song) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Now playing: ${song.songName}`);
        resolve();
      }, song.time);
    });
  }
  
  async function playMusic() {
    for (const song of playlist) {
      await playSong(song);
    }
    console.log("End of playlist.");
  }
  
  // Start playing the music
  playMusic();
  