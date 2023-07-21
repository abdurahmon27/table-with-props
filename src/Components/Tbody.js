import React from "react";

const Tbody = (props) => {
  return (
    <>
      <tbody className="divide-y divide-gray-200 hover:bg-gray-200">
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
            {props.tableitems.name}
          </td>
          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {props.tableitems.age}
          </td>
          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {props.tableitems.address}
          </td>
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap flex items-center justify-center">
            <span className="flex items-center justify-center">
              {props.tableitems.tags === "looser" ? (
                <span className="text-orange-600 border-orange-500 bg-orange-200 rounded font-thin uppercase p-1">
                  {props.tableitems.tags}
                </span>
              ) : props.tableitems.tags === "nice" ? (
                <span className="text-green-600 border-green-500 bg-green-200 rounded font-thin uppercase p-1">
                  {props.tableitems.tags}
                </span>
              ) : props.tableitems.tags === "cool" ? (
                <span className="text-green-600 border-green-500 bg-green-200 rounded font-thin uppercase p-1">
                  {props.tableitems.tags}
                </span>
              ) : (
                <span className="text-purple-600 border-purple-500 bg-purple-200 rounded font-thin uppercase p-1">
                  {props.tableitems.tags}
                </span>
              )}
            </span>

            <span className="text-purple-600 border-purple-500 bg-purple-200 rounded font-thin uppercase p-1 mx-1">
              {props.tableitems.tags2 === "looser" ? (
                <span className="text-red-500">{props.tableitems.tags2}</span>
              ) : props.tableitems.tags2 === "nice" ? (
                <span className="text-green-600 border-green-500 bg-green-200 rounded font-thin uppercase p-1">
                  {props.tableitems.tags2}
                </span>
              ) : props.tableitems.tags2 === " " ? (<span className="opacity-0"></span>) : (
                <span className="text-purple-600 border-purple-500 bg-purple-200 rounded font-thin uppercase p-1">
                  {props.tableitems.tags2}
                </span>
              )}
            </span>
          </td>
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <a
              className="text-blue-500 hover:text-blue-700"
              href={props.tableitems.link}
            >
              Invite {props.tableitems.name}{" "}
            </a>
            <a
              className="text-blue-500 hover:text-blue-700"
              href={props.tableitems.link}
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Tbody;
