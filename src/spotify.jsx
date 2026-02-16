const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "919b13de9c5a4350838e9abb85ca9b0c";
const redirectedUri = "https://music-player-ialx.vercel.app/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectedUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
