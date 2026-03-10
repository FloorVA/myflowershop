import styles from './App.module.css';
import Content from './Content.jsx';

import logo from "./assets/images/logo.png";

function App() {
  return (
    <div className={styles.appBody}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className={styles.siteHeader}>
        <nav className={styles.navbar}>
          <img className={styles.logo} src={logo} alt="logo" />
        </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p>2026 FloorVA🌷</p>
    </footer>
  )
}

export default App;