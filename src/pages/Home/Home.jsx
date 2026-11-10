import { Link } from "react-router-dom";
import { FiCheck, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import portrait from "../../assets/Images/Haylemesel_P1.jpg";
import avatar from "../../assets/Images/avatar.jpg";
import workshop from "../../assets/Images/Haylemeskel_Photo_1_Hardwares.jpg";
import { profile, experience, skills, education, awards, aiWork, listText } from "../../data/profile";
import { projects } from "../../data/projects";
import { Container, RailSection, RichText, Tag, ButtonLink } from "../../components/ui";
import { type } from "../../styles/type";
import TaskAnatomy from "../../components/TaskAnatomy";
import ProjectCard from "../../components/ProjectCard";

const Hero = () => (
  <section className="pt-24 pb-14 sm:pt-32 sm:pb-20">
    <Container>
      <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-12">
        <div className="md:col-span-7 lg:col-span-7">
          {/* Phones: a small portrait above the name keeps a face on the first screen. */}
          <img
            src={avatar}
            alt={`Portrait of ${profile.name}`}
            width="240"
            height="240"
            className="hero-settle mb-5 h-14 w-14 rounded-full object-cover md:hidden"
          />

          <h1 className={type.hero}>
            <span className="hero-line">
              <span>{profile.name}</span>
            </span>
          </h1>

          <div className="hero-settle">
            <p className="mt-3 text-[1.0625rem] font-medium text-ink sm:text-[1.1875rem]">{profile.title}</p>
            <p className={`mt-4 max-w-[58ch] ${type.lead}`}>{profile.intro}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={profile.resumeUrl} download>
                <FiDownload aria-hidden="true" />
                Download résumé
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
                <FiMail aria-hidden="true" />
                Email me
              </ButtonLink>
            </div>

            <dl className="mt-8 max-w-lg border-b border-rule text-[0.875rem]">
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
                <div key={term} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-rule py-2.5">
                  <dt className="text-muted">{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="hero-settle hidden md:col-span-5 md:block lg:col-span-4 lg:col-start-9">
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
  <section id="ai-work" className="on-night bg-night py-16 text-night-text sm:py-20">
    <Container>
      <header className="max-w-2xl">
        <h2 className={type.h2}>{aiWork.heading}</h2>
        <p className="mt-3 text-[0.9375rem] text-night-muted sm:text-base">{aiWork.intro}</p>
      </header>

      <ul className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-6">
        {aiWork.roles.map((role) => (
          <li key={role.id} className="border-t border-night-line pt-5">
            <h3 className={type.h3}>{role.title}</h3>
            <p className="mt-2 max-w-[68ch] text-[0.9375rem] leading-relaxed text-night-muted">{role.body}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${role.title} work`}>
              {role.tasks.map((t) => (
                <li key={t}>
                  <Tag tone="night">{t}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid grid-cols-1 gap-8 border-t border-night-line pt-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-[1.25rem] font-bold leading-snug tracking-[-0.01em]">
            What goes into a <span className="whitespace-nowrap">Terminal-Bench</span> task
          </h3>
          <p className="mt-2 max-w-[42ch] text-[0.9375rem] text-night-muted">
            Every task has the same five parts. Select a file to see what it holds, using a
            simplified example.
          </p>
          <h4 className="mt-8 text-[0.9375rem] font-semibold">Before a task ships</h4>
          <ul className="mt-3 space-y-2.5">
            {aiWork.checklist.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.875rem] text-night-muted">
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
    <ol>
      {experience.map((job) => (
        <li
          key={job.company}
          className="grid gap-3 border-t border-rule py-8 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-6"
        >
          <div className="text-[0.875rem] text-muted sm:col-span-3">
            <p className="font-medium text-ink">
              <time>{job.start}</time> to <time>{job.end}</time>
            </p>
            <p className="mt-0.5">{job.location}</p>
          </div>
          <div className="sm:col-span-9">
            <h3 className={type.h3}>
              {job.role}
              <span className="font-normal text-muted">, {job.company}</span>
            </h3>
            <ul className="mt-3 space-y-2">
              {job.points.map((p) => (
                <li
                  key={p}
                  className="relative pl-4 text-[0.9375rem] leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted/50"
                >
                  <RichText text={p} />
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
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

const AllProjects = () => (
  <section id="projects" className="bg-mist py-16 sm:py-20">
    <Container>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className={type.h2}>Projects</h2>
          <p className={`mt-2 max-w-[52ch] ${type.small} text-muted`}>
            Client and personal work, from booking platforms to IoT dashboards.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex min-h-11 items-center text-[0.875rem] font-semibold text-signal link-underline"
        >
          Filter by type
        </Link>
      </header>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {projects.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const Skills = () => (
  <RailSection id="skills" title="Skills" lead="What I use day to day, grouped the way it shows up in my work.">
    <dl>
      {skills.map((s) => (
        <div
          key={s.group}
          className="grid gap-1 border-t border-rule py-4 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-6"
        >
          <dt className="text-[0.9375rem] font-semibold sm:col-span-4">{s.group}</dt>
          <dd className="text-[0.9375rem] text-muted sm:col-span-8">{listText(s.items)}</dd>
        </div>
      ))}
    </dl>
  </RailSection>
);

const Recognition = () => {
  const award = awards[0];
  return (
    <RailSection id="education" title="Recognition and education" className="bg-mist">
      <article className="grid gap-6 sm:grid-cols-12">
        <figure className="sm:col-span-5">
          <img
            src={workshop}
            alt="Haylemeskel at a workbench with a breadboard, sensors and wiring"
            width="1280"
            height="960"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <figcaption className="mt-2 text-[0.8125rem] text-muted">
            Prototyping IoT sensors at the Cassiopia Innovation and Skill Development Club, AASTU.
          </figcaption>
        </figure>
        <div className="sm:col-span-7">
          <p className="text-[0.8125rem] text-muted">
            <time>{award.date}</time>, {award.location}
          </p>
          <h3 className={`mt-1 ${type.h3}`}>{award.title}</h3>
          <p className="mt-0.5 text-[0.9375rem] font-medium">
            {award.prize}, {award.org}
          </p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed">
            <RichText text={award.description} />
          </p>
        </div>
      </article>

      <article className="mt-10 border-t border-rule pt-8">
        <h3 className={type.h3}>{education.degree}</h3>
        <p className="mt-0.5 text-[0.9375rem] text-muted">
          {education.school}, {education.location}
        </p>
        <p className="mt-4 text-[0.875rem] font-semibold">Core coursework</p>
        <p className="mt-1 max-w-[62ch] text-[0.9375rem] text-muted">{listText(education.coursework)}</p>
      </article>
    </RailSection>
  );
};

const ContactCta = () => (
  <section className="py-16 sm:py-20">
    <Container>
      <div className="max-w-2xl">
        <h2 className={type.h2}>Get in touch</h2>
        <p className={`mt-3 ${type.lead}`}>{profile.availability}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-block break-all py-2 text-[1.125rem] font-semibold text-signal link-underline sm:text-[1.25rem]"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
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
    <AllProjects />
    <Skills />
    <Recognition />
    <ContactCta />
  </>
);

export default Home;
