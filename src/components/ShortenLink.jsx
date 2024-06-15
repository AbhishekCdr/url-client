import { useState } from "react";
import styles from "./ShortenLink.module.css";

function ShortenLink(props) {
  const { data } = props;

  // console.log(data);

  // const DEFAULT_SHORTEN_LINKS_VALUE = {
  //   longurl: "",
  //   shorturl: "",
  //   count: "",
  // };

  // const [link, setLink] = useState([DEFAULT_SHORTEN_LINKS_VALUE]);

  // function addShortenUrl(data) {
  //   setLink((old) => [...old, data]);
  // }

  return (
    <>
      <h1 className="self-center text-2xl font-bold">Shorten Links</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full sm:w-3/4">
          <thead className="bg-green-900 text-white">
            <tr>
              <th className="border-[1px] border-black p-2">LongURL</th>
              <th className="border-[1px] border-black p-2">ShortURL</th>
              <th className="border-[1px] border-black p-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {data.toReversed().map((data) => (
              <tr key={data.id} id={data.id} className="bg-green-100 text-sm">
                <td className="text-wrap border-[1px] border-gray-800 p-2">
                  {data.longurl}
                </td>
                <td className="text-wrap border-[1px] border-gray-800 p-2 text-center text-red-600">
                  <a
                    href={"https://url-api-ashy.vercel.app/" + data.shorturlid}
                    target="_blank"
                  >
                    {data.shorturlid}
                  </a>
                </td>
                <td className="text-wrap border-[1px] border-gray-800 p-2 text-center">
                  {data.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShortenLink;
