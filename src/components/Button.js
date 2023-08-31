import React from "react";

export default function Button({ children}) {
  return (
    <button className="px-4 py-2 mt-10 text-lg font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">{children}</button>
  );
}
