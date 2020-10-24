import React from "react";

export default function Detail({
  name,
  product,
  subtitle,
  description,
  list,
  captions,
  image,
}) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white text-left shadow-xl transform transition-all sm:my-8 sm:align-middle container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="block md:flex relative">
            <div className="block bg-white p-2 md:w-3/5">
              <span className="block text-primary font-black uppercase text-2xl">
                {name}
              </span>
              <hr className="text-primary" />
              <span className="block text-primary font-black text-xl">
                {product}
              </span>
              <span className="block text-primary font-bold text-lg">
                {subtitle}
              </span>
              <span className="text-muted font-regular"> {description} </span>
              <ul className="list-disc ml-6 py-2">
                {list.map((item, index) => (
                  <li className="text-muted" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="block relative md:w-2/5">
              <img className="w-100" src={image} />
              <div
                className="absolute inset-x-0 text-white pl-4 py-1"
                style={{
                  top: "10px",
                  background:
                    "linear-gradient(to left, transparent 25%, black 100%)",
                }}
              >
                {captions &&
                  captions.map((item, index) => (
                    <span key={index} className="block">
                      {item}
                    </span>
                  ))}
              </div>
            </div>
            <div
              className="rounded-full flex items-center justify-center bg-white font-black absolute shadow cursor-pointer"
              style={{
                top: "-10px",
                right: "-10px",
                width: "20px",
                height: "20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                width="10"
                viewBox="0 0 512 512"
              >
                <title>Close</title>
                <path
                  fill="none"
                  stroke="#938f8f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="64"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
