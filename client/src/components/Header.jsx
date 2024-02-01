import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center wax-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth app</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
