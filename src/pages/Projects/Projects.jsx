import { useState } from "react";
import { projects } from "../../data/projects";
import { Container } from "../../components/ui";
import ProjectCard from "../../components/ProjectCard";

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
    <div className="pt-24 pb-20 sm:pt-32">
      <Container>
        <header className="max-w-3xl">
          <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.25rem]">
            Projects
          </h1>
          <p className="mt-3 max-w-[56ch] text-base text-muted">
            Client and personal work I built or led, most of it live.
          </p>
        </header>

        <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
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
                className={`min-h-11 rounded-full border px-4 text-[0.875rem] transition-colors ${
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

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {shown.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Projects;
