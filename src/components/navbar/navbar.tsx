import "./navbar.css";

const endpointUrl = process.env.NEXT_PUBLIC_endpoint_url;
const tokenUrl = endpointUrl + "/oauth2/token";
const me = endpointUrl + "/users/@me";

type base_data = {
  client_id: string | undefined;
  client_secret: string | undefined;
  redirect_uri: string | undefined;
  scope: string;
};
const base_data_value: base_data = {
  client_id: process.env.NEXT_PUBLIC_client_id,
  client_secret: process.env.NEXT_PUBLIC_client_secret,
  redirect_uri: process.env.NEXT_PUBLIC_redirect_uri,
  scope: "identify email",
};

const navbar = () => {
  return (
    <div className="parent-navbar">
      <div className="components-navbar">
        <div className="navbar-title">Pepper</div>
        <ul>
          <li>Home</li>
          <li>Join Our Discord</li>
          <li>Commands</li>
          <li>Support</li>
          <li>Status</li>
        </ul>
        <div className="navbar-title2">
          <h1>Invite</h1>
          <h1>
            <a
              href={`https://discord.com/api/oauth2/authorize?client_id=${base_data_value.client_id}&redirect_uri=${base_data_value.redirect_uri}&response_type=code&scope=${base_data_value.scope}`}
            >
              Login
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default navbar;
