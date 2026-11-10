import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { Container } from "../ui";

const Footer = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Site",
      links: [
        { label: "AI work", to: "/#ai-work" },
        { label: "Experience", to: "/#experience" },
        { label: "Projects", to: "/projects" },
        { label: "Writing", to: "/blog" },
        { label: "Gallery", to: "/gallery" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "GitHub", href: profile.links.github },
        { label: "LinkedIn", href: profile.links.linkedin },
        { label: "Twitter", href: profile.links.twitter },
      ],
    },
  ];

  return (
    <footer className="border-t border-rule bg-paper">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="wide text-[1.3125rem] font-bold tracking-[-0.01em]">{profile.name}</p>
            <p className="mt-2 text-muted">
              {profile.title}, {profile.location}
            </p>
            <a href={`mailto:${profile.email}`} className="mt-4 inline-block font-semibold text-signal link-underline">
              {profile.email}
            </a>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-3">
              <h2 className="text-[0.9375rem] font-semibold">{col.title}</h2>
              <ul className="mt-3 space-y-2 text-[0.9375rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="text-muted transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-12 border-t border-rule pt-6 text-[0.8125rem] text-muted">
          © {year} {profile.name}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
