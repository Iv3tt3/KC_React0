import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css"

export default function Layout({children}:{children : ReactNode}) {
    return <div className={styles.layout}>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </div>
}