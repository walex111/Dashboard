import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";

const NavLinkComponent = ({ router, href, children, key }) => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-white text-lg m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-lg text-grey-700 dark:text-grey-200 dark:hover:text-black hover:bg-light-gray m-2";

  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleSidebarNav = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <>
      <Link href={href} key={key} onClick={handleSidebarNav}>
        <a className={isCurrentPath ? activeLink : normalLink}>{children}</a>
      </Link>
    </>
  );
};

export default withRouter(NavLinkComponent);
