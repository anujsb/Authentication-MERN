import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="font-bold">Atuh template</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            {" "}
            <li>About</li>
          </Link>
          <Link to="/SignIn">
            <li>Sign in</li>
          </Link>
          <Link to="/SignUp">
            <li>Sign up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
