import React, { useState } from "react";
import { PageTransitionButton } from "views/components/atoms/Button";
import { FormWithButton } from "views/components/block/Form";

type JsonObjType = {
  group: string;
  name: string;
  phone: string;
  address: string;
};

type ListProps = {
  list: JsonObjType[];
  name: string;
};

{
  /*<div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>*/
}

export const JsonObjs = (props: JsonObjType) => {
  console.log(props.name);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <span className="text-gray-900 whitespace-no-wrap">
              {props.group}
            </span>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="text-gray-900 whitespace-no-wrap">{props.name}</span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{props.phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden="true" className="absolute inset-0"></span>
          <span className="relative">{props.address}</span>
        </span>
      </td>
    </tr>
  );
};

export const List = (props: ListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNum = Math.floor(props.list.length / 4);
  const range = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const pageList = range(1, pageNum, 1);

  console.log(props.list);

  const listHead = (
    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
      <span className="text-2xl leading-tight">Studio List</span>
      <div className="text-end">
        <FormWithButton buttonLabel="Filter" />
      </div>
    </div>
  );

  const attributes = (
    <thead>
      <tr>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Group
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Phone Number
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Address
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        ></th>
      </tr>
    </thead>
  );

  const studioList = (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-8">
        {listHead}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              {attributes}
              <tbody>
                {props.list.map((e, i) => {
                  return (
                    <JsonObjs
                      group={e.group}
                      name={e.name}
                      phone={e.phone}
                      address={e.address}
                      key={props.name + i}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                {pageList.map((num, i) => {
                  return (
                    <PageTransitionButton
                      num={num}
                      onChange={() => setCurrentPage(num)}
                      key={i}
                    />
                  );
                })}
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return studioList;
};
