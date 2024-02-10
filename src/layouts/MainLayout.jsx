import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.MainLayout}>
        <nav className={styles.NavBar}>
          <ul className={styles.NavigationBtn}>
            <li>
              <Link className={styles.logoHomepage} href="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                  alt="Icon"
                />
              </Link>
            </li>
          </ul>

          <ul className={styles.NavigationBtn}>
            <li>
              <Link href="/copyright">Copyright</Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
