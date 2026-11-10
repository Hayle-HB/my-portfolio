import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../data/projects";
import { Container } from "../../components/ui";

const filters = [
  { id: "all", label: "All" },
  { id: "business", label: "Business platforms" },
  { id: "web", label: "Websites" },
  { id: "tools", label: "Tools" },
];

const Projects = () => {
  const [active, setActive] = useState("all");
  const shown = projects.filter((p) => active === "all" || p.category === active);

  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container>
        <header className="max-w-3xl">
          <h1 className="wide text-[2.625rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.5rem]">
            Projects
          </h1>
          <p className="mt-5 max-w-[56ch] text-[1.125rem] text-muted">
            Client and personal work I built or led, most of it live. Open a project for what it
            does, my role and the problems I solved.
          </p>
        </header>

        <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const count =
              f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
            const on = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f.id)}
                className={`rounded-full border px-4 py-1.5 text-[0.9375rem] transition-colors ${
                  on
                    ? "border-ink bg-ink text-paper"
                    : "border-rule bg-white text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {f.label} <span className={on ? "text-paper/70" : "text-muted/70"}>{count}</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-12 border-b border-rule">
          {shown.map((p) => (
            <li key={p.id} className="grid gap-4 border-t border-rule py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <h2 className="text-[1.3125rem] font-semibold">
                  <Link to={`/projects/${p.id}`} className="link-underline">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-1 text-[0.9375rem] text-muted">
                  {p.categoryLabel}, {p.duration}
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="max-w-[60ch]">{p.description}</p>
                <p className="mt-3 text-[0.9375rem] text-muted">
                  {p.role}. {p.technologies.slice(0, 5).join(", ")}
                </p>
              </div>
              <div className="flex gap-5 text-[0.9375rem] font-semibold md:col-span-2 md:flex-col md:items-end md:gap-2">
                <Link to={`/projects/${p.id}`} className="text-ink link-underline">
                  Details
                </Link>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-signal link-underline"
                  >
                    Visit site
                    <FiArrowUpRight aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Projects;
