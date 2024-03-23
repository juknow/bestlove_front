import React from "react";

export default function FriendCard() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              친구 아이디
            </th>
            <th scope="col" className="px-6 py-3">
              친구 이름
            </th>
            <th scope="col" className="px-6 py-3">
              친구 성별
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              adel77
            </th>
            <td className="px-6 py-4">문준호</td>
            <td className="px-6 py-4">남</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              asd123
            </th>
            <td className="px-6 py-4">김병현</td>
            <td className="px-6 py-4">남</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              gsaf2
            </th>
            <td className="px-6 py-4">류희철</td>
            <td className="px-6 py-4">여</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              dfkgkkggkgkgk
            </th>
            <td className="px-6 py-4">윤형석</td>
            <td className="px-6 py-4">여</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
