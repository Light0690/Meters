import { ReactNode } from "react";

import Header from "../Header";
import Bottom from '../Bottom';

import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
        {children}
      <Bottom />
    </div>
  );
};

export default Layout;
