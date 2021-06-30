import React, { ReactNode } from 'react';
import Link from 'next/link';

type LinkProps = {
  path: string;
  children: ReactNode;
};

const CustomLink = ({ path, children }: LinkProps) => {
  return (
    <Link href={path}>
      <a className="d-f">{children}</a>
    </Link>
  );
};

export default CustomLink;
