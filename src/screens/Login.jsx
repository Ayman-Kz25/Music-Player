import {loginEndPoint} from '../spotify'

function Login() {
  return (
    <div className="login-screen">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
        alt="spotify-logo"
        className="logo"
      />
      <a href={loginEndPoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}

export default Login;
