import { nprogress } from "@mantine/nprogress";
import { IFC } from "@ts/global.types";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props extends LinkProps, IFC {
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget;
}

const NextLink: React.FC<Props> = ({ children, ...linkProps }) => {
  const pathname = usePathname();

  // Handle NProgress
  const handleClick = () => {
    if (pathname !== linkProps.href) {
      nprogress.start();
    }
  };

  return (
    <Link
      {...linkProps}
      onClick={handleClick}
      target={linkProps?.target || "_self"}
    >
      {children}
    </Link>
  );
};

export default NextLink;
