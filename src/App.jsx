import { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Blog from "./pages/Blog/Blog";
import FromLocalhostToProduction from "./pages/Blog/BlogDetail.jsx/from_localhost_to_production";
import Salvation from "./pages/Blog/BlogDetail.jsx/Salivation";
import How_TO_USE_GIT from "./pages/Blog/BlogDetail.jsx/How_TO_USE_GIT";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact Me/ContactMe";
import { Container } from "./components/ui";

// Scrolls to #anchors after navigation, or to the top on a new page.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const NotFound = () => (
  <section className="pt-40 pb-32">
    <Container>
      <h1 className="wide text-[2.625rem] font-bold tracking-[-0.015em]">Page not found</h1>
      <p className="mt-4 max-w-[52ch] text-muted">
        This address doesn&apos;t match any page on the site. Go back to the home page to find
        projects, experience and contact details.
      </p>
      <Link to="/" className="mt-8 inline-block font-semibold text-signal link-underline">
        Go to the home page
      </Link>
    </Container>
  </section>
);

const Article = ({ children }) => <div className="legacy-article">{children}</div>;

Article.propTypes = { children: PropTypes.node };

const App = () => (
  <BrowserRouter>
    <ScrollManager />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
    >
      Skip to content
    </a>
    <NavBar />
    <main id="main" className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/#experience" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/from_localhost_to_production"
          element={
            <Article>
              <FromLocalhostToProduction />
            </Article>
          }
        />
        <Route
          path="/blog/how_to_use_git"
          element={
            <Article>
              <How_TO_USE_GIT />
            </Article>
          }
        />
        <Route
          path="/blog/salivation"
          element={
            <Article>
              <Salvation />
            </Article>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
