import React from "react";

const Thead = () => {
  return (
    <>
      <thead className="bg-gray-100">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
          >
            Age
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
          >
            Address
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
          >
            Tags
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
          >
            Action
          </th>
        </tr>
      </thead>
    </>
  );
};

export default Thead;
