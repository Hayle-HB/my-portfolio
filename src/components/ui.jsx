import PropTypes from "prop-types";
import { type } from "../styles/type";

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>
);

Container.propTypes = { className: PropTypes.string, children: PropTypes.node };

/**
 * Renders text where [[double brackets]] mark a résumé metric.
 */
export const RichText = ({ text }) => {
  const parts = text.split(/(\[\[.+?\]\])/g);
  return parts.map((part, i) =>
    part.startsWith("[[") ? (
      <mark key={i} className="metric">
        {part.slice(2, -2)}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

RichText.propTypes = { text: PropTypes.string.isRequired };

/**
 * Two-column section: heading in the left rail, content on the right.
 */
export const RailSection = ({ id, title, lead, className = "", children, aside }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>
    <Container>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <h2 className={type.h2}>{title}</h2>
            {lead && <p className={`mt-3 max-w-[36ch] ${type.small} text-muted`}>{lead}</p>}
            {aside}
          </div>
        </header>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </Container>
  </section>
);

RailSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  lead: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  aside: PropTypes.node,
};

export const Tag = ({ children, tone = "light" }) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.8125rem] leading-5 ${
      tone === "night"
        ? "border-night-line text-night-muted"
        : "border-rule bg-white text-muted"
    }`}
  >
    {children}
  </span>
);

Tag.propTypes = { children: PropTypes.node, tone: PropTypes.oneOf(["light", "night"]) };

export const ButtonLink = ({ href, to, variant = "primary", children, external, download, as: As }) => {
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-signal-dark"
      : "border border-ink/25 text-ink hover:border-ink hover:bg-white";
  const className = `inline-flex min-h-11 items-center gap-2 rounded-md px-4 text-[0.875rem] font-semibold transition-colors ${styles}`;
  if (As && to) {
    return (
      <As to={to} className={className}>
        {children}
      </As>
    );
  }
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  external: PropTypes.bool,
  download: PropTypes.bool,
  as: PropTypes.elementType,
};
