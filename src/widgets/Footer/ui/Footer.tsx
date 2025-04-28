import styles from "../style/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles["footer__tech-stack"]}>
            <span>Tech stack:</span>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <a
              href="https://redux-toolkit.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <a
              href="https://reactrouter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router
            </a>
            <a
              href="https://postcss.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              PostCSS
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} My React App | Feature-Sliced Design
          </p>
        </div>
      </div>
    </footer>
  );
};
