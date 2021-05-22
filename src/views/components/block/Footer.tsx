import React from "react";

function Header() {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between items-center">
          <li className="uppercase text-gray-800 dark:text-white font-black text-xl ">
            BandCloud
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              よくある質問
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              お問い合わせ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Header;
