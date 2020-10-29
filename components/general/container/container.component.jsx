import React, { Fragment, useMemo } from "react";

export default function Container({ children, Background }) {
  const BackgroundComponent = useMemo(() => Background || React.Fragment, [
    Background,
  ]);

  return (
    <Fragment>
      <BackgroundComponent>
        <header className="fixed w-full bg-white h-16 flex items-center">
          <div className="container mx-auto flex items-center">
            <nav className="w-100 block flex items-center">
              <a class="navbar-brand" href="/">
                <img src="http://placehold.it/150x50?text=Logo" alt="" />
              </a>
              <ul className="flex items-center">
                <li className="inline mx-2 uppercase text-black">Home</li>
                <li className="inline mx-2 uppercase text-black">
                  Características
                </li>
                <li className="inline mx-2 uppercase text-black">Productos</li>
                <li className="inline mx-2 uppercase text-black">Home</li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="container mx-auto mt-20">{children}</div>
      </BackgroundComponent>

      {/* <div
      className="px-2 min-h-full py-4"
      style={{ background: "linear-gradient(to right, #001f44, #002f60)" }}
    > */}
      {/* </div> */}
    </Fragment>
  );
}
