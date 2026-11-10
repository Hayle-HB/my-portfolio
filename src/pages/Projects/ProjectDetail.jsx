import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, getProject } from "../../data/projects";
import { Container, Tag, ButtonLink } from "../../components/ui";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = getProject(projectId);

  if (!project) {
    return (
      <div className="pt-32 pb-24">
        <Container>
          <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.25rem]">Project not found</h1>
          <p className="mt-4 max-w-[52ch] text-muted">
            There&apos;s no project at this address. The full list is on the projects page.
          </p>
          <Link to="/projects" className="tap mt-8 inline-block font-semibold text-signal link-underline">
            See all projects
          </Link>
        </Container>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-24 pb-20 sm:pt-32">
      <Container>
        <Link
          to="/projects"
          className="-my-2 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-muted transition-colors hover:text-ink"
        >
          <FiArrowLeft aria-hidden="true" />
          All projects
        </Link>

        <header className="mt-6 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.25rem]">
              {project.title}
            </h1>
            <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-muted">{project.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} external>
                  Visit site
                  <FiArrowUpRight aria-hidden="true" />
                </ButtonLink>
              )}
              {project.githubUrl && (
                <ButtonLink href={project.githubUrl} variant="secondary" external>
                  <FiGithub aria-hidden="true" />
                  View code
                </ButtonLink>
              )}
            </div>
          </div>
          <dl className="self-start border-t border-rule text-[0.875rem] lg:col-span-4">
            {[
              ["Role", project.role],
              ["Duration", project.duration],
              ["Type", project.categoryLabel],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-rule py-2.5">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <section className="lg:col-span-4">
            <h2 className="text-[1.125rem] font-semibold">What it does</h2>
            <ul className="mt-3 space-y-1.5 text-[0.9375rem] text-muted">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section className="lg:col-span-8">
            <h2 className="text-[1.125rem] font-semibold">Problems and how I solved them</h2>
            <ul className="mt-4 border-b border-rule">
              {project.challenges.map((c, i) => (
                <li key={c} className="grid gap-1 border-t border-rule py-3 sm:grid-cols-2 sm:gap-8">
                  <p className="text-[0.9375rem] font-medium">{c}</p>
                  <p className="text-[0.9375rem] text-muted">{project.solutions[i]}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-[1.125rem] font-semibold">Built with</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Next project" className="mt-16 border-t border-rule pt-6">
          <p className="text-[0.9375rem] text-muted">Next project</p>
          <Link
            to={`/projects/${next.id}`}
            className="tap mt-1 inline-block text-[1.25rem] font-bold tracking-[-0.01em] link-underline"
          >
            {next.title}
          </Link>
        </nav>
      </Container>
    </article>
  );
};

export default ProjectDetail;
