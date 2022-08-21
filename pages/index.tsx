import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "../pages";
import Line from "./Charts/Line";

const Home: NextPage = (href) => {
  const activeMenu = true;

  const router = useRouter();

  const handlePagesClick = (e: any) => {
    e.preventDefault();
    router.push(href, undefined, { shallow: true });
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
            style={{ background: "#1E1B55", borderRadius: "50%" }}
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
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        {/* // ** Navbar */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu} ? md:ml-72 : flex-2`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>

        {/* // ** Router */}
        <div className="flex flex-col">
          {/* // ** Dashboard routes */}
          <Link onClick={handlePagesClick} href="/">
            <a>ECommerce</a>
          </Link>
          <Link onClick={handlePagesClick} href="/Ecommerce">
            <a>Ecommerce</a>
          </Link>

          {/* // ** Pages routes */}
          <Link onClick={handlePagesClick} href="/Orders">
            <a>Orders</a>
          </Link>
          <Link onClick={handlePagesClick} href="/Employees">
            <a>Employees</a>
          </Link>
          <Link onClick={handlePagesClick} href="/Customers">
            <a>Customers</a>
          </Link>
          {/* // ** Apps routes */}

          <Link onClick={handlePagesClick} href="/Kanban">
            <a>Kanban</a>
          </Link>
          <Link onClick={handlePagesClick} href="/editor">
            <a>Editor</a>
          </Link>
          <Link onClick={handlePagesClick} href="/Calendar">
            <a>Calendar</a>
          </Link>
          <Link onClick={handlePagesClick} href="/ColorPicker">
            <a>ColorPicker</a>
          </Link>

          {/* //** Charts */}
          <Link onClick={handlePagesClick} href="./Charts/Line">
            <a>Line</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/Area">
            <a>Area</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/bar">
            <a>Bar</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/Pie">
            <a>Pie</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/Financials">
            <a>Financial</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/ColorMapping">
            <a>ColorMapping</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/Pyramid">
            <a>Pyramid</a>
          </Link>
          <Link onClick={handlePagesClick} href="./Charts/Stacked">
            <a>Stacked</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

export { default as Ecommerce } from "./Ecommerce";
export { default as Kanban } from "./Kanban";
export { default as Orders } from "./Orders";
export { default as Employees } from "./Employees";
export { default as Editor } from "./Editor";
export { default as Customers } from "./Customers";
export { default as ColorPicker } from "./ColorPicker";
export { default as Calendar } from "./Calendar";
export { default as Area } from "./Charts/Area";
export { default as Bar } from "./Charts/Bar";
export { default as ColorMapping } from "./Charts/ColorMapping";
export { default as Financial } from "./Charts/Financials";
export { default as Line } from "./Charts/Line";
export { default as Pie } from "./Charts/Pie";
export { default as Pyramid } from "./Charts/Pyramid";
export { default as Stacked } from "./Charts/Stacked";
