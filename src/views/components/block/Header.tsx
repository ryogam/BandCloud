import React from "react";
import "style/tailwind.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-24 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
          BandCloud
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <Link
              to="/"
              className="py-2 px-6 flex text-indigo-500 border-b-2 border-indigo-500"
            >
              ホーム
            </Link>
            <span className="py-2 px-6 flex hover:text-indigo-500">
              スタジオ検索
            </span>
            <span className="py-2 px-6 flex hover:text-indigo-500">
              バンドメンバー募集
            </span>
            <Link
              to="/contact"
              className="py-2 px-6 flex hover:text-indigo-500"
            >
              お問い合わせ
            </Link>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
