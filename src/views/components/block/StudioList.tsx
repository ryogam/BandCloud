import React from "react";

function StudioList() {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
          BandCloud
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <a
              href="#"
              className="py-2 px-6 flex text-indigo-500 border-b-2 border-indigo-500"
            >
              ホーム
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
              スタジオ検索
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
              バンド仲間募集
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
              お問い合わせ
            </a>
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

export default StudioList;
