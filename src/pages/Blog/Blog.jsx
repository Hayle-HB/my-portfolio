import React, { useState } from "react";
import { Link } from "react-router-dom";

const FILTERS = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Git",
  "Trends",
  "Design Patterns",
  "EOTC",
  "Christianity",
  "Bible",
  "Faith",
  "Spirituality",
  "History",
];

const blogPosts = [
  {
    title: "From Localhost to Production: A Modern Deployment Guide",
    summary:
      "Learn how to take your web app from your local machine to a live, production-ready environment with best practices.",
    slug: "from_localhost_to_production",
    date: "2024-06-01",
    imageExist: false,
    tags: ["DevOps", "Backend", "Trends", "Git"],
  },
  {
    title: "Mastering Git: Tips, Tricks, and Workflow Strategies",
    summary:
      "Discover advanced Git techniques and workflows that can supercharge your team's productivity and reduce merge conflicts.",
    slug: "mastering_git_workflows",
    date: "2024-06-10",
    imageExist: false,
    tags: ["Git", "DevOps", "Backend", "Trends"],
  },
  {
    title: "The Future of Frontend: Trends to Watch in 2025",
    summary:
      "Explore emerging frontend development trends like micro frontends, edge rendering, and AI-assisted design tools.",
    slug: "frontend_trends_2025",
    date: "2024-06-15",
    imageExist: false,
    tags: ["Frontend", "Trends", "Design Patterns"],
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    summary:
      "A hands-on guide to structuring, securing, and scaling your backend services using Node.js and Express.",
    slug: "scalable_apis_node_express",
    date: "2024-06-20",
    imageExist: false,
    tags: ["Backend", "DevOps", "Design Patterns"],
  },
  {
    title: "Design Patterns Every JavaScript Developer Should Know",
    summary:
      "Uncover the power of design patterns like Singleton, Observer, and Factory to write cleaner, reusable code.",
    slug: "javascript_design_patterns",
    date: "2024-06-25",
    imageExist: false,
    tags: ["Design Patterns", "Frontend", "Backend", "Trends"],
  },
  {
    title: "Automating Your Workflow with GitHub Actions",
    summary:
      "Learn how to create powerful CI/CD pipelines and automate tasks using GitHub Actions with real-world examples.",
    slug: "github_actions_workflow_automation",
    date: "2024-06-30",
    imageExist: false,
    tags: ["DevOps", "Git", "Backend"],
  },
  // Religious blogs
  {
    title: "The Mystery of the Holy Trinity in EOTC Faith",
    summary:
      "Explore the profound doctrine of the Holy Trinity as taught by the Ethiopian Orthodox Tewahedo Church, its biblical roots, and its impact on Christian spirituality.",
    slug: "eotc_holy_trinity",
    date: "2024-07-01",
    imageExist: false,
    tags: ["EOTC", "Christianity", "Bible", "Faith", "Spirituality"],
  },
  {
    title: "The Ark of the Covenant: Ethiopia's Sacred Heritage",
    summary:
      "A historical and spiritual journey into the Ark of the Covenant, its biblical significance, and its unique place in Ethiopian Orthodox tradition.",
    slug: "ark_of_the_covenant_eotc",
    date: "2024-07-02",
    imageExist: false,
    tags: ["EOTC", "Christianity", "Bible", "History"],
  },
  {
    title: "The Power of Prayer in the Christian Life",
    summary:
      "Discover the transformative power of prayer in the Bible and the Ethiopian Orthodox tradition, with practical guidance for deepening your spiritual life.",
    slug: "power_of_prayer_christianity",
    date: "2024-07-03",
    imageExist: false,
    tags: ["Christianity", "Bible", "Faith", "Spirituality"],
  },
];

const Blog = () => {
  const [selectedFilters, setSelectedFilters] = useState(["All"]);

  const handleFilterClick = (filter) => {
    if (filter === "All") {
      setSelectedFilters(["All"]);
    } else {
      setSelectedFilters((prev) => {
        const next = prev.includes(filter)
          ? prev.filter((f) => f !== filter && f !== "All")
          : [...prev.filter((f) => f !== "All"), filter];
        return next.length === 0 ? ["All"] : next;
      });
    }
  };

  const filteredPosts = selectedFilters.includes("All")
    ? blogPosts
    : blogPosts.filter((post) =>
        post.tags.some((tag) => selectedFilters.includes(tag))
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181a20] to-[#23272b] text-white pt-32 pb-20">
      {/* Editorial Header */}
      <div className="max-w-3xl mx-auto px-4 mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-100">
          Insights & Engineering
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the latest in web development, engineering best practices,
          tech trends, and Christian faith. Curated guides, deep dives, and
          spiritual reflections for modern minds.
        </p>
      </div>
      {/* Filter Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-10 flex flex-wrap gap-3 justify-center">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/30
              ${
                selectedFilters.includes(filter)
                  ? "bg-blue-200 text-blue-900"
                  : "bg-white/5 text-blue-200 hover:bg-blue-100 hover:text-blue-900"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 text-lg py-20">
            No blog is found.
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group block transition-all duration-300 rounded-2xl relative overflow-hidden h-full bg-white/2 min-h-[320px]"
            >
              {/* Hover border overlay */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
              {/* Image or Placeholder */}
              <div className="relative w-full h-28 md:h-32 mb-4 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#23272b] to-[#181a20] flex items-center justify-center shadow-sm">
                {post.imageExist && post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <>
                    <svg width="80" height="40" fill="none" viewBox="0 0 80 40">
                      <rect width="80" height="40" rx="12" fill="#23272b" />
                      <g>
                        <circle cx="40" cy="20" r="12" fill="#374151" />
                        <text
                          x="40"
                          y="27"
                          textAnchor="middle"
                          fontSize="18"
                          fill="#9ca3af"
                          fontWeight="bold"
                        >
                          B
                        </text>
                      </g>
                    </svg>
                    <span className="absolute top-2 right-2 bg-gray-800/80 text-xs text-gray-300 px-2 py-0.5 rounded-full select-none">
                      No Image
                    </span>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-2 px-4 pb-4 pt-1 min-h-[180px] h-full">
                <span className="text-xs text-gray-400 font-mono tracking-widest uppercase mb-1">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <h2 className="text-lg font-bold leading-tight mb-1 group-hover:underline group-hover:decoration-blue-400 group-hover:decoration-2 transition-all">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-2 line-clamp-3">
                  {post.summary}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2 mb-3 justify-center">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-blue-900/40 text-blue-200 text-xs font-semibold tracking-wide border border-blue-400/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex-1"></div>
                {/* Read more bottom right */}
                <div className="flex justify-end mt-auto">
                  <span className="text-blue-500 text-sm font-medium group-hover:underline inline-flex items-center gap-1">
                    Read more
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <path
                        d="M7 5l4 4-4 4"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
