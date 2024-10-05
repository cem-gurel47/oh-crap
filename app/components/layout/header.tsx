import { Link } from "@remix-run/react";

const header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/">
        <h1>Dog tracker</h1>
      </Link>
      <div className="flex gap-4">
        <Link to="/new-profile">New Profile</Link>
        <Link to="/profiles">Profiles</Link>
      </div>
    </header>
  );
};

export default header;
