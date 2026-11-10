import { Link } from "react-router-dom";
import { Container } from "../../components/ui";

// Published posts. Drafts stay commented out until their pages exist.
const blogPosts = [
  {
    title: "How to Use Git for Team Work: A Comprehensive Guide",
    summary:
      "A detailed guide covering essential Git workflows for team collaboration - from cloning and branching to resolving conflicts and maintaining a clean repository. Learn best practices for working with remote repositories, handling pull requests, and ensuring smooth team coordination.",
    slug: "How_TO_USE_GIT",
    date: "2024-03-14",
    imageExist: false,
    tags: ["Git", "DevOps", "Backend", "Trends"],
  },
  // {
  //   title: "From Localhost to Production: A Modern Deployment Guide",
  //   summary:
  //     "Learn how to take your web app from your local machine to a live, production-ready environment with best practices.",
  //   slug: "from_localhost_to_production",
  //   date: "2024-06-01",
  //   imageExist: false,
  //   tags: ["DevOps", "Backend", "Trends", "Git"],
  // },
  // {
  //   title: "Mastering Git: Tips, Tricks, and Workflow Strategies",
  //   summary:
  //     "Discover advanced Git techniques and workflows that can supercharge your team's productivity and reduce merge conflicts.",
  //   slug: "mastering_git_workflows",
  //   date: "2024-06-10",
  //   imageExist: false,
  //   tags: ["Git", "DevOps", "Backend", "Trends"],
  // },
  // {
  //   title: "The Future of Frontend: Trends to Watch in 2025",
  //   summary:
  //     "Explore emerging frontend development trends like micro frontends, edge rendering, and AI-assisted design tools.",
  //   slug: "frontend_trends_2025",
  //   date: "2024-06-15",
  //   imageExist: false,
  //   tags: ["Frontend", "Trends", "Design Patterns"],
  // },
  // {
  //   title: "Building Scalable APIs with Node.js and Express",
  //   summary:
  //     "A hands-on guide to structuring, securing, and scaling your backend services using Node.js and Express.",
  //   slug: "scalable_apis_node_express",
  //   date: "2024-06-20",
  //   imageExist: false,
  //   tags: ["Backend", "DevOps", "Design Patterns"],
  // },
  // {
  //   title: "Design Patterns Every JavaScript Developer Should Know",
  //   summary:
  //     "Uncover the power of design patterns like Singleton, Observer, and Factory to write cleaner, reusable code.",
  //   slug: "javascript_design_patterns",
  //   date: "2024-06-25",
  //   imageExist: false,
  //   tags: ["Design Patterns", "Frontend", "Backend", "Trends"],
  // },
  // {
  //   title: "Automating Your Workflow with GitHub Actions",
  //   summary:
  //     "Learn how to create powerful CI/CD pipelines and automate tasks using GitHub Actions with real-world examples.",
  //   slug: "github_actions_workflow_automation",
  //   date: "2024-06-30",
  //   imageExist: false,
  //   tags: ["DevOps", "Git", "Backend"],
  // },
  // {
  //   title: "The Mystery of the Holy Trinity in EOTC Faith",
  //   summary:
  //     "Explore the profound doctrine of the Holy Trinity as taught by the Ethiopian Orthodox Tewahedo Church, its biblical roots, and its impact on Christian spirituality.",
  //   slug: "eotc_holy_trinity",
  //   date: "2024-07-01",
  //   imageExist: false,
  //   tags: ["EOTC", "Christianity", "Bible", "Faith", "Spirituality"],
  // },
  // {
  //   title: "The Ark of the Covenant: Ethiopia's Sacred Heritage",
  //   summary:
  //     "A historical and spiritual journey into the Ark of the Covenant, its biblical significance, and its unique place in Ethiopian Orthodox tradition.",
  //   slug: "ark_of_the_covenant_eotc",
  //   date: "2024-07-02",
  //   imageExist: false,
  //   tags: ["EOTC", "Christianity", "Bible", "History"],
  // },
  // {
  //   title: "The Power of Prayer in the Christian Life",
  //   summary:
  //     "Discover the transformative power of prayer in the Bible and the Ethiopian Orthodox tradition, with practical guidance for deepening your spiritual life.",
  //   slug: "power_of_prayer_christianity",
  //   date: "2024-07-03",
  //   imageExist: false,
  //   tags: ["Christianity", "Bible", "Faith", "Spirituality"],
  // // },
  // {
  //   title: "The Gift of Salvation: Hope, Faith, and Grace",
  //   summary:
  //     "A deep dive into the meaning of salvation in Christianity and the Ethiopian Orthodox Tewahedo Church, with biblical references, quotes, and practical guidance.",
  //   slug: "salivation",
  //   date: "2024-07-04",
  //   imageExist: false,
  //   tags: ["Christianity", "Bible", "Faith", "EOTC", "Salvation"],
  // },
];

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  const posts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="pt-24 pb-20 sm:pt-32">
      <Container>
        <header className="max-w-3xl">
          <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.25rem]">
            Writing
          </h1>
          <p className="mt-3 max-w-[52ch] text-base text-muted">
            Practical guides from my engineering work, written for the teams I work with.
          </p>
        </header>

        <ol className="mt-10 max-w-3xl border-b border-rule">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-rule py-6">
              <p className="text-[0.8125rem] text-muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <h2 className="mt-1.5 text-[1.125rem] font-semibold leading-snug">
                <Link to={`/blog/${post.slug.toLowerCase()}`} className="tap link-underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">{post.summary}</p>
              <p className="mt-3 text-[0.8125rem] text-muted">
                <span className="sr-only">Topics: </span>
                {post.tags.join(", ")}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
};

export default Blog;
