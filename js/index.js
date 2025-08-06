// let signOut = document.getElementById('sign_out');

// signOut.addEventListener('click', (e) => {
//     localStorage.removeItem('currentUsers');
//     location.href = '../login.html';  
// });



// fetch api test
  function renderTrendingSongs(songs) {
    const list = document.getElementById('trending-songs');
    list.innerHTML = '';
    songs.forEach(song => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${song.thumbnail}" alt="${song.title}">
        <div>
          <strong>${song.title}</strong>
          <div class="author">${song.artist}</div>
        </div>
      `;
      list.appendChild(li);
    });
  }

  function renderTrendingArtists(artists) {
    const list = document.getElementById('trending-artists');
    list.innerHTML = '';
    artists.forEach(artist => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${artist.thumbnail}" alt="${artist.name}">
        <div class="author">🎤 ${artist.name}</div>
      `;
      list.appendChild(li);
    });
  }

  function renderTrendingAlbums(albums) {
    const list = document.getElementById('trending-albums');
    list.innerHTML = '';
    albums.forEach(album => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${album.thumbnail}" alt="${album.title}">
        <div>
          <strong>${album.title}</strong>
          <div class="author">${album.artist}</div>
        </div>
      `;
      list.appendChild(li);
    });
  }



//DIFF-SONGS-TEST


function renderOtherSongs(songs) {
  const list = document.getElementById('other-songs');
  list.innerHTML = '';

  songs.forEach(song => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="card d-flex flex-row align-items-center p-2 mb-2">
        <img src="${song.thumbnail}" alt="${song.title}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px;">
        <div class="info flex-grow-1">
          <strong>${song.title}</strong><br>
          <small class="author text-muted">${song.artist?.map(a => a.username).join(", ") || "Không rõ tác giả"}</small>
        </div>
        <button class="play-btn btn btn-success" data-thumbnail="${song.thumbnail}" data-src="${song.url}" data-title="${song.title}" data-artist="${song.artist?.map(a => a.username).join(", ")}">▶</button>
      </div>
    `;
    list.appendChild(li);
  });

  // Gắn sự kiện play cho từng nút
  const playButtons = document.querySelectorAll(".play-btn");
  playButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");
      const title = btn.getAttribute("data-title");
      const artist = btn.getAttribute("data-artist");
      const thumbnail = btn.getAttribute("data-thumbnail");

      const audioPlayer = document.getElementById("audio-player");
      const banner = document.getElementById("player-banner");
      const nowPlaying = document.getElementById("now-playing-info");
      const playerThumbnail = document.getElementById("player-thumbnail");
      
      playerThumbnail.src = thumbnail || "default-thumbnail.jpg"; // Thay thế bằng hình ảnh mặc định nếu không có thumbnail

      audioPlayer.src = src;
      audioPlayer.play();

      nowPlaying.innerHTML = `<strong>${title}</strong> - ${artist}`;
      banner.style.display = "flex";
    });
  });
}






  function renderOtherArtists(artists) {
    const list = document.getElementById('other-artists');
    list.innerHTML = '';
    artists.forEach(artist => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="card">
          <img src="${artist.thumbnail}" alt="${artist.name}">
          <div class="info">
            <strong>${artist.name}</strong>
            <div class="author">Nghệ sĩ</div>
          </div>
          <button class="play-btn">▶</button>
        </div>`;
      list.appendChild(li);
    });
  }

  function renderOtherAlbums(albums) {
    const list = document.getElementById('other-albums');
    list.innerHTML = '';
    albums.forEach(album => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="card">
          <img src="${album.thumbnail}" alt="${album.title}">
          <div class="info">
            <strong>${album.title}</strong>
            <div class="author">${album.artist}</div>
          </div>
          <button class="play-btn">▶</button>
        </div>`;
      list.appendChild(li);
    });
  }
// fetch api test
async function fetchSongs() {
  try {
    const response = await fetch("https://sonnguyen741.pythonanywhere.com/api/songs/");
    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu từ API");
    }

    const data = await response.json();
    renderOtherSongs(data);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error.message);
  }
}

// Gọi hàm khi trang tải
document.addEventListener("DOMContentLoaded", () => {
  fetchSongs();
});
