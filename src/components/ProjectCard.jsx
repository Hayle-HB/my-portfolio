import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * A simple, image-free project card used on the home page and the projects page.
 */
const ProjectCard = ({ project: p }) => (
  <article className="flex h-full flex-col rounded-lg border border-rule bg-white p-5 transition-colors hover:border-ink/30 sm:p-6">
    <p className="text-[0.8125rem] text-muted">
      {p.categoryLabel}, {p.duration}
    </p>
    <h3 className="mt-1.5 text-[1.0625rem] font-semibold leading-snug">
      <Link to={`/projects/${p.id}`} className="tap hover:text-signal-dark">
        {p.title}
      </Link>
    </h3>
    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.description}</p>
    <p className="mt-3 text-[0.8125rem] text-muted">{p.technologies.slice(0, 4).join(", ")}</p>
    <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-4 text-[0.875rem] font-semibold">
      <Link to={`/projects/${p.id}`} className="inline-flex min-h-11 items-center text-ink link-underline">
        Details
      </Link>
      {p.liveUrl && (
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1 text-signal link-underline"
        >
          Visit site
          <FiArrowUpRight aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </div>
  </article>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoryLabel: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
