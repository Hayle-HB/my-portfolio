import React from "react";
import { Link } from "react-router-dom";

const FromLocalhostToProduction = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 text-sm"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path
              d="M12.5 15L8 10.5L12.5 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          From Localhost to Production: A Modern Deployment Guide
        </h1>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 border-b border-white/10 pb-4">
          <span>Published on June 1, 2024</span>
          <span>•</span>
          <span>10 min read</span>
          <span>•</span>
          <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">
            DevOps
          </span>
        </div>

        <div className="prose prose-invert max-w-none text-lg leading-relaxed text-gray-200">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300">
              Deploying your web application from your local machine to a live,
              production-ready environment can seem daunting. In this
              comprehensive guide, we'll break down the process into clear,
              actionable steps and provide real-world examples to help you
              confidently launch your project.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Prepare Your Application
            </h2>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-3">
                Environment Configuration
              </h3>
              <p className="text-gray-300 mb-4">
                First, ensure your environment variables are properly
                configured. Here's an example of a typical `.env` file:
              </p>
              <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  <span className="text-[#89DDFF]">
                    # Production Environment Variables
                  </span>
                  <span className="text-[#89DDFF]">NODE_ENV</span>=
                  <span className="text-[#C3E88D]">production</span>
                  <span className="text-[#89DDFF]">DATABASE_URL</span>=
                  <span className="text-[#C3E88D]">
                    postgresql://user:pass@host:5432/db
                  </span>
                  <span className="text-[#89DDFF]">API_KEY</span>=
                  <span className="text-[#C3E88D]">your-secret-key</span>
                  <span className="text-[#89DDFF]">REDIS_URL</span>=
                  <span className="text-[#C3E88D]">redis://localhost:6379</span>
                </code>
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Pre-deployment Checklist
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Run all tests:{" "}
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      npm test
                    </code>
                  </li>
                  <li>
                    • Build optimization:{" "}
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      npm run build
                    </code>
                  </li>
                  <li>
                    • Security audit:{" "}
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      npm audit
                    </code>
                  </li>
                  <li>
                    • Performance check:{" "}
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      lighthouse
                    </code>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Build Script Example
                </h3>
                <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    <span className="text-[#89DDFF]">// package.json</span>
                    <span className="text-[#89DDFF]">{"{"}</span>
                    <span className="text-[#89DDFF]"> "scripts"</span>:{" "}
                    <span className="text-[#89DDFF]">{"{"}</span>
                    <span className="text-[#89DDFF]"> "build"</span>:{" "}
                    <span className="text-[#C3E88D]">
                      "next build && next export"
                    </span>
                    ,<span className="text-[#89DDFF]"> "start"</span>:{" "}
                    <span className="text-[#C3E88D]">
                      "next start -p $PORT"
                    </span>
                    <span className="text-[#89DDFF]"> {"}"}</span>
                    <span className="text-[#89DDFF]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Choose a Hosting Provider
            </h2>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800 mb-6">
              <p className="text-lg">
                Modern hosting platforms offer powerful features for deployment.
                Here's a comparison of popular options:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Vercel
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Zero-config deployments</li>
                  <li>• Automatic HTTPS</li>
                  <li>• Edge Functions</li>
                  <li>• Great for Next.js</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Netlify
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Form handling</li>
                  <li>• Serverless functions</li>
                  <li>• Continuous deployment</li>
                  <li>• Great for static sites</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  AWS
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Highly scalable</li>
                  <li>• Full control</li>
                  <li>• Complex setup</li>
                  <li>• Enterprise-grade</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Set Up CI/CD
            </h2>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-3">
                GitHub Actions Example
              </h3>
              <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  <span className="text-[#89DDFF]">
                    # .github/workflows/deploy.yml
                  </span>
                  <span className="text-[#89DDFF]">name</span>:{" "}
                  <span className="text-[#C3E88D]">Deploy to Production</span>
                  <span className="text-[#89DDFF]">on</span>:
                  <span className="text-[#89DDFF]">push</span>:
                  <span className="text-[#89DDFF]">branches</span>: [{" "}
                  <span className="text-[#C3E88D]">main</span> ]
                  <span className="text-[#89DDFF]">jobs</span>:
                  <span className="text-[#89DDFF]">deploy</span>:
                  <span className="text-[#89DDFF]">runs-on</span>:{" "}
                  <span className="text-[#C3E88D]">ubuntu-latest</span>
                  <span className="text-[#89DDFF]">steps</span>: -{" "}
                  <span className="text-[#89DDFF]">uses</span>:{" "}
                  <span className="text-[#C3E88D]">actions/checkout@v2</span>-{" "}
                  <span className="text-[#89DDFF]">uses</span>:{" "}
                  <span className="text-[#C3E88D]">actions/setup-node@v2</span>-{" "}
                  <span className="text-[#89DDFF]">run</span>:{" "}
                  <span className="text-[#C3E88D]">npm install</span>-{" "}
                  <span className="text-[#89DDFF]">run</span>:{" "}
                  <span className="text-[#C3E88D]">npm run build</span>-{" "}
                  <span className="text-[#89DDFF]">run</span>:{" "}
                  <span className="text-[#C3E88D]">npm run deploy</span>
                </code>
              </pre>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Monitor and Maintain
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Monitoring Setup
                </h3>
                <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    <span className="text-[#89DDFF]">// monitoring.js</span>
                    <span className="text-[#89DDFF]">import</span>{" "}
                    <span className="text-[#C3E88D]">Sentry</span>{" "}
                    <span className="text-[#89DDFF]">from</span>{" "}
                    <span className="text-[#C3E88D]">'@sentry/nextjs'</span>;
                    <span className="text-[#C3E88D]">Sentry.init</span>({"{"}
                    <span className="text-[#89DDFF]">dsn</span>:{" "}
                    <span className="text-[#C3E88D]">
                      process.env.SENTRY_DSN
                    </span>
                    ,<span className="text-[#89DDFF]">tracesSampleRate</span>:{" "}
                    <span className="text-[#F78C6C]">1.0</span>,
                    <span className="text-[#89DDFF]">environment</span>:{" "}
                    <span className="text-[#C3E88D]">process.env.NODE_ENV</span>
                    {"}"});
                  </code>
                </pre>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Maintenance Tasks
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Set up error tracking (Sentry)</li>
                  <li>• Configure performance monitoring</li>
                  <li>• Schedule regular backups</li>
                  <li>• Keep dependencies updated</li>
                  <li>• Monitor server health</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">
                Moving from localhost to production is a journey every developer
                takes. With the right tools, best practices, and a solid
                understanding of the deployment process, you can make your
                deployments smooth and reliable. Remember to always test
                thoroughly, monitor your application, and keep security in mind
                throughout the process.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FromLocalhostToProduction;
