import { ChevronRight } from "lucide-react";
import { useState, type ChangeEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className="w-full h-full p-4 bg-[url('/header.jpg')] mt-5">
      <div className="flex justify-between w-full h-full">
        <div className="w-1/4 h-full">
          <div className="flex flex-col justify-around h-full">
            <div>
              <img src="/iconeHeader.png" alt="logo" />
            </div>
            <span>
              Grand moullin, DOUALA <br /> New York, NY 10001
            </span>
            <p>Call us: (+237) 658341359</p>
          </div>
        </div>
        <div className="w-1/4 h-full">
          <legend className="uppercase font-bold">resources</legend>
          <ul className="w-full h-full *:ml-4 *:text-gray-400 cursor-pointer *:w-[70%] *:my-2 *:borde *:hover:rounded-sm *:hover:text-gray-50 *:duration-500 *:hover:bg-white/20 *:hover:pl-2">
            <li>About</li>
            <li>Blockbuster</li>
            <li>Contact us</li>
            <li>Forums</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="w-1/4 h-full">
          <legend className="uppercase font-bold">Legal</legend>
          <ul className="w-full h-full *:ml-4 *:text-gray-400 cursor-pointer *:w-[70%] *:my-2 *:borde *:hover:rounded-sm *:hover:text-gray-50 *:duration-500 *:hover:bg-white/20 *:hover:pl-2">
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="w-1/4 h-full">
          <legend className="uppercase font-bold">account</legend>
          <ul className="w-full h-full *:ml-4 *:text-gray-400 cursor-pointer *:w-[70%] *:my-2 *:borde *:hover:rounded-sm *:hover:text-gray-50 *:duration-500 *:hover:bg-white/20 *:hover:pl-2">
            <li>My Account</li>
            <li>Watchlist</li>
            <li>Collections</li>
            <li>User guide</li>
          </ul>
        </div>
        <div className="w-1/4 h-full pb-8">
          <legend className="uppercase font-bold">Newsettler</legend>
          <div className="flex flex-col justify-around px-2 h-full">
            <p className="text-red-500">Subscribe to our newsletter system now to get latest news from us.</p>
            <input
                type="text"
                placeholder="Ente your email..."
                value={email}
                onChange={handlechange}
                className="w-full h-10 pl-2 border-2 border-gray-400 rounded-sm shadow-2xl backdrop-blur-sm text-gray-400 outline-none"
            />
            <span className="w-full flex justify-between">
                SUBSCRITE NOW <ChevronRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
