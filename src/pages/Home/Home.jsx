import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import portrait from "../../assets/Images/Haylemesel_P1.jpg";
import avatar from "../../assets/Images/avatar.jpg";
import workshop from "../../assets/Images/Haylemeskel_Photo_1_Hardwares.jpg";
import { profile, experience, skills, education, awards, aiWork, listText } from "../../data/profile";
import { projects } from "../../data/projects";
import { Container, RailSection, RichText, Tag, ButtonLink } from "../../components/ui";
import TaskAnatomy from "../../components/TaskAnatomy";

const Hero = () => (
  <section className="pt-24 pb-16 sm:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
    <Container>
      <div className="grid gap-x-10 md:grid-cols-12 lg:gap-x-12">
        {/* Phones: a small portrait above the name keeps a face on the first screen. */}
        <img
          src={avatar}
          alt={`Portrait of ${profile.name}`}
          width="240"
          height="240"
          className="hero-settle mb-6 h-16 w-16 rounded-full object-cover md:hidden"
        />

        <h1 className="wide text-[clamp(2.5rem,12.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] md:col-span-12 lg:col-span-7 lg:row-start-1 lg:text-[clamp(3.5rem,6.4vw,5.75rem)]">
          <span className="hero-line">
            <span>{profile.firstName}</span>
          </span>
          <span className="hero-line">
            <span>{profile.lastName}</span>
          </span>
        </h1>

        <div className="hero-settle md:col-span-7 md:row-start-2">
          <p className="mt-6 text-[1.3125rem] font-semibold sm:mt-7 sm:text-[1.625rem]">{profile.title}</p>
          <p className="mt-4 max-w-[56ch] text-[1.0625rem] text-muted sm:text-[1.1875rem]">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resumeUrl} download>
              <FiDownload aria-hidden="true" />
              Download résumé
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
              <FiMail aria-hidden="true" />
              Email me
            </ButtonLink>
          </div>

          <dl className="mt-10 max-w-xl border-b border-rule text-[0.9375rem]">
            {[
              ["Based in", profile.location],
              ["Experience", "5+ years in backend, distributed and AI systems"],
              [
                "Now",
                <>
                  LLM training and evaluation,{" "}
                  <a href="#ai-work" className="link-underline">
                    Terminal-Bench tasks
                  </a>
                </>,
              ],
            ].map(([term, value]) => (
              <div key={term} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-rule py-3">
                <dt className="text-muted">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Tablets: beside the intro. Laptops: spans the full hero height. */}
        <figure className="hero-settle hidden md:col-span-5 md:col-start-8 md:row-start-2 md:mt-7 md:block lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-end">
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width="960"
            height="1280"
            className="aspect-[4/5] w-full rounded-lg object-cover object-[50%_30%]"
            fetchPriority="high"
          />
        </figure>
      </div>
    </Container>
  </section>
);

const AiWork = () => (
  <section id="ai-work" className="on-night bg-night py-20 text-night-text sm:py-28">
    <Container>
      <div className="grid gap-12 lg:grid-cols-12">
        <header className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="wide text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]">
              {aiWork.heading}
            </h2>
            <p className="mt-6 max-w-[46ch] text-[1.125rem] text-night-muted">{aiWork.intro}</p>
          </div>
        </header>

        <ul className="lg:col-span-7">
          {aiWork.roles.map((role) => (
            <li key={role.id} className="border-t border-night-line py-8 first:border-t-0 first:pt-0 lg:first:pt-2">
              <h3 className="text-[1.625rem] font-semibold tracking-[-0.01em]">{role.title}</h3>
              <p className="mt-3 max-w-[62ch] text-night-muted">{role.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${role.title} work`}>
                {role.tasks.map((t) => (
                  <li key={t}>
                    <Tag tone="night">{t}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 border-t border-night-line pt-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h3 className="wide text-[1.625rem] font-bold leading-tight tracking-[-0.01em] sm:text-[2.0625rem]">
            What goes into a <span className="whitespace-nowrap">Terminal-Bench</span> task
          </h3>
          <p className="mt-4 max-w-[42ch] text-night-muted">
            Every task has the same five parts. Select a file to see what it holds, using a
            simplified example.
          </p>
          <h4 className="mt-10 font-semibold">Before a task ships</h4>
          <ul className="mt-4 space-y-3">
            {aiWork.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] text-night-muted">
                <FiCheck aria-hidden="true" className="mt-1 shrink-0 text-night-signal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-8">
          <TaskAnatomy />
        </div>
      </div>
    </Container>
  </section>
);

const Experience = () => (
  <RailSection
    id="experience"
    title="Experience"
    lead="Five years building backend, distributed and cloud systems, most recently production AI services."
  >
    <ol className="space-y-0">
      {experience.map((job) => (
        <li
          key={job.company}
          className="grid gap-4 border-t border-rule py-10 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-8"
        >
          <div className="text-[0.9375rem] text-muted sm:col-span-3">
            <p className="font-medium text-ink">
              <time>{job.start}</time> to <time>{job.end}</time>
            </p>
            <p className="mt-1">{job.location}</p>
          </div>
          <div className="sm:col-span-9">
            <h3 className="text-[1.3125rem] font-semibold leading-snug">
              {job.role}
              <span className="font-normal text-muted">, {job.company}</span>
            </h3>
            <ul className="mt-4 space-y-3">
              {job.points.map((p) => (
                <li key={p} className="relative pl-5 leading-[1.65] before:absolute before:left-0 before:top-[0.7em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-rule">
                  <RichText text={p} />
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
              {job.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </RailSection>
);

const SelectedProjects = () => {
  const featured = projects.filter((p) => p.featured);
  return (
    <RailSection
      id="projects"
      title="Selected projects"
      lead="Client and personal work, from booking platforms to IoT dashboards."
      className="bg-mist"
      aside={
        <Link to="/projects" className="tap mt-6 inline-block font-semibold text-signal link-underline">
          All {projects.length} projects
        </Link>
      }
    >
      <ul>
        {featured.map((p) => (
          <li key={p.id} className="border-t border-rule py-8 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[1.3125rem] font-semibold">
                <Link to={`/projects/${p.id}`} className="tap link-underline">
                  {p.title}
                </Link>
              </h3>
              <p className="text-[0.9375rem] text-muted">
                {p.categoryLabel}, {p.role.toLowerCase()}
              </p>
            </div>
            <p className="mt-2 max-w-[62ch] text-muted">{p.description}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[0.9375rem]">{p.technologies.slice(0, 4).join(", ")}</p>
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap inline-flex items-center gap-1 text-[0.9375rem] font-semibold text-signal link-underline"
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
    </RailSection>
  );
};

const Skills = () => (
  <RailSection
    id="skills"
    title="Skills"
    lead="What I use day to day, grouped the way it shows up in my work."
  >
    <dl>
      {skills.map((s) => (
        <div
          key={s.group}
          className="grid gap-2 border-t border-rule py-6 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-8"
        >
          <dt className="font-semibold sm:col-span-4">{s.group}</dt>
          <dd className="text-muted sm:col-span-8">{listText(s.items)}</dd>
        </div>
      ))}
    </dl>
  </RailSection>
);

const Recognition = () => {
  const award = awards[0];
  return (
    <RailSection id="education" title="Recognition and education" className="bg-mist">
      <article className="grid gap-8 sm:grid-cols-12">
        <figure className="sm:col-span-5">
          <img
            src={workshop}
            alt="Haylemeskel at a workbench with a breadboard, sensors and wiring"
            width="1280"
            height="960"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <figcaption className="mt-3 text-[0.8125rem] text-muted">
            Prototyping IoT sensors at the Cassiopia Innovation and Skill Development Club, AASTU.
          </figcaption>
        </figure>
        <div className="sm:col-span-7">
          <p className="text-[0.9375rem] text-muted">
            <time>{award.date}</time>, {award.location}
          </p>
          <h3 className="mt-2 text-[1.625rem] font-semibold leading-tight tracking-[-0.01em]">
            {award.title}
          </h3>
          <p className="mt-1 font-medium">
            {award.prize}, {award.org}
          </p>
          <p className="mt-4 leading-[1.65]">
            <RichText text={award.description} />
          </p>
        </div>
      </article>

      <article className="mt-12 border-t border-rule pt-10">
        <h3 className="text-[1.3125rem] font-semibold">{education.degree}</h3>
        <p className="mt-1 text-muted">
          {education.school}, {education.location}
        </p>
        <p className="mt-5 text-[0.9375rem] font-semibold">Core coursework</p>
        <p className="mt-1 max-w-[62ch] text-muted">{listText(education.coursework)}</p>
      </article>
    </RailSection>
  );
};

const ContactCta = () => (
  <section className="py-20 sm:py-28">
    <Container>
      <div className="max-w-3xl">
        <h2 className="wide text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]">
          Get in touch
        </h2>
        <p className="mt-5 max-w-[52ch] text-[1.125rem] text-muted">{profile.availability}</p>
        <a
          href={`mailto:${profile.email}`}
          className="wide mt-8 inline-block break-all py-1.5 text-[1.3125rem] font-semibold text-signal link-underline sm:text-[2.0625rem]"
        >
          {profile.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink as={Link} to="/contact-me">
            Send a message
          </ButtonLink>
          <ButtonLink href={profile.links.github} variant="secondary" external>
            <FiGithub aria-hidden="true" />
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.links.linkedin} variant="secondary" external>
            <FiLinkedin aria-hidden="true" />
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </Container>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <AiWork />
    <Experience />
    <SelectedProjects />
    <Skills />
    <Recognition />
    <ContactCta />
  </>
);

export default Home;
