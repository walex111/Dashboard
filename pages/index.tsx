import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Home: NextPage = (href) => {
  const activeMenu = false;

  const router = useRouter();

  const handlePagesClick = (e: any) => {
    e.preventDefault();
    router.replace(href);
  };

  return (
    <div className="">
      <Head>
        <title>SDASH</title>
      </Head>
      <div className="flex relative dark:bg-main-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            className="text-3xl p-6 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: "green", borderRadius: "50%" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Settings"
            data-container="body"
            data-animation="true"
          >
            <FontAwesomeIcon icon={faSliders} />
          </button>
        </div>
        {/* // ** Sidebar */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            Sidebar
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
        )}
        {/* // ** Navbar */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu} ? md:ml-72 : flex-2`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>

        {/* // ** Router */}
        <div className="flex flex-col">
          {/* // ** Dashboard routes */}
          <Link onClick={handlePagesClick} href="/">
            <a>ECommerce</a>
          </Link>
          <Link onClick={handlePagesClick} href="/eCommerce">
            ECommerce
          </Link>

          {/* // ** Pages routes */}
          <Link onClick={handlePagesClick} href="/orders">
            Orders
          </Link>
          <Link onClick={handlePagesClick} href="/employees">
            Employees
          </Link>
          <Link onClick={handlePagesClick} href="/customers">
            customers
          </Link>
          {/* // ** Apps routes */}

          <Link onClick={handlePagesClick} href="/kanban">
            KanBan
          </Link>
          <Link onClick={handlePagesClick} href="/editor">
            Editor
          </Link>
          <Link onClick={handlePagesClick} href="/calender">
            Calender
          </Link>
          <Link onClick={handlePagesClick} href="/color-picker">
            ColorPicker
          </Link>

          {/* //** Charts */}
          <Link onClick={handlePagesClick} href="/line">
            Line
          </Link>
          <Link onClick={handlePagesClick} href="/area">
            Area
          </Link>
          <Link onClick={handlePagesClick} href="/bar">
            Bar
          </Link>
          <Link onClick={handlePagesClick} href="/pie">
            Pie
          </Link>
          <Link onClick={handlePagesClick} href="/financial">
            Financial
          </Link>
          <Link onClick={handlePagesClick} href="/color-mapping">
            ColorMapping
          </Link>
          <Link onClick={handlePagesClick} href="/pyramid">
            Pyramid
          </Link>
          <Link onClick={handlePagesClick} href="/stacked">
            Stacked
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
