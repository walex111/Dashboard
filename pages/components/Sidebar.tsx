import React from "react";
import Link from "next/link";
import NavLinkComponent from "./NavLinkComponent";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../data/dummy";

const Sidbar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ml-3 mt-4 text-3xl font-extrabold tracking-wide dark:text-white text-[#017973]">
            <Link href="/" onClick={() => {}}>
              <a>ALT</a>
            </Link>
            <button
              type="button"
              className="p-3 hover:text-red-400 block md:"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Close"
              data-container="body"
              data-animation="true"
              onClick={() => {}}
            >
              <FontAwesomeIcon icon={faRectangleXmark} />
            </button>
          </div>
          <div className="mt-20">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-grey-400 m-3 mt-4 uppercase">{link.title}</p>
                {link.links.map((aLink) => (
                  <NavLinkComponent href={`/${aLink.href}`} key={aLink.name}>
                    <>
                      {aLink.icon}
                      <span className="capitalize">{aLink.name}</span>
                    </>
                  </NavLinkComponent>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidbar;
