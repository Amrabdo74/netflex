import { Link } from "react-router-dom";
import { Authuser } from "../context/Authcontext";

function Navbar() {
  const { user, logOut } = Authuser();
  const handelLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className=" p-2 sm:p-4  flex justify-between w-full items-center z-[100] absolute">
        <Link
          to="/"
          className="text-red-600 font-bold cursor-pointer text-4xl "
        >
          Netflex
        </Link>

        {user ? (
          <div className="">
            <Link
              to="/Account"
              className="cursor-pointer px-6 py-2 rounded text-xl text-white"
            >
              Account
            </Link>
            <Link
              onClick={handelLogOut}
              to="/"
              className="bg-red-600 cursor-pointer px-6 py-2 rounded text-xl text-white"
            >
              logOut
            </Link>
          </div>
        ) : (
          <div className="">
            <Link
              to="/Login"
              className="cursor-pointer px-6 py-2 rounded text-xl text-white"
            >
              Sign in
            </Link>
            <Link
              to="/Signup"
              className="bg-red-600 cursor-pointer px-6 py-2 rounded text-xl text-white"
            >
              Sign out
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
