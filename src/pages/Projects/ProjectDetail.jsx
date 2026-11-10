import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, getProject } from "../../data/projects";
import { Container, Tag, ButtonLink } from "../../components/ui";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = getProject(projectId);

  if (!project) {
    return (
      <div className="pt-40 pb-32">
        <Container>
          <h1 className="wide text-[2.625rem] font-bold tracking-[-0.015em]">Project not found</h1>
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
    <article className="pt-28 pb-24 sm:pt-36">
      <Container>
        <Link
          to="/projects"
          className="-my-2 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-muted transition-colors hover:text-ink"
        >
          <FiArrowLeft aria-hidden="true" />
          All projects
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="wide text-[2.625rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.5rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-[60ch] text-[1.125rem] text-muted">{project.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
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
          <dl className="self-start border-t border-rule text-[0.9375rem] lg:col-span-4">
            {[
              ["Role", project.role],
              ["Duration", project.duration],
              ["Type", project.categoryLabel],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-rule py-3">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <section className="lg:col-span-4">
            <h2 className="text-[1.3125rem] font-semibold">What it does</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section className="lg:col-span-8">
            <h2 className="text-[1.3125rem] font-semibold">Problems and how I solved them</h2>
            <ul className="mt-4 border-b border-rule">
              {project.challenges.map((c, i) => (
                <li key={c} className="grid gap-1 border-t border-rule py-4 sm:grid-cols-2 sm:gap-8">
                  <p className="font-medium">{c}</p>
                  <p className="text-muted">{project.solutions[i]}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-16">
          <h2 className="text-[1.3125rem] font-semibold">Built with</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Next project" className="mt-24 border-t border-rule pt-8">
          <p className="text-[0.9375rem] text-muted">Next project</p>
          <Link
            to={`/projects/${next.id}`}
            className="tap wide mt-1 inline-block text-[1.625rem] font-bold tracking-[-0.01em] link-underline sm:text-[2.0625rem]"
          >
            {next.title}
          </Link>
        </nav>
      </Container>
    </article>
  );
};

export default ProjectDetail;
