import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-serif flex items-center justify-between bg-orange-400 uppercase border-b border-stone-200 px-4 py-3  sm:px-6 w-screen">
      <Link to="/" className="tracking-widest">Fast React Pizza </Link>
      <SearchOrder/>
      <Username/>
    </header>
  );
}

export default Header;
