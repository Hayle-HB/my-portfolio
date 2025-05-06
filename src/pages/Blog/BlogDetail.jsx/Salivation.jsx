import React from "react";
import { Link } from "react-router-dom";
import featuredImage from "../../../assets/open-holy-bible-candle-old-oak-wooden-table-beautiful-gold-background-religion-concept.jpg";

const tags = ["Christianity", "Bible", "Faith", "EOTC", "Salvation"];

const Salvation = () => (
  <div className="min-h-screen bg-[#13151a] text-white pt-0 pb-20 font-sans">
    {/* Header Section */}
    <div className="relative w-full h-[340px] md:h-[420px] lg:h-[500px] flex items-end justify-center mb-0">
      <img
        src={featuredImage}
        alt="Salvation"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10" />
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 pb-12">
        <h1 className="text-center font-extrabold text-gray-100 drop-shadow-lg leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto mb-4">
          Are You Saved? From What? – Understanding Salvation in the Bible and
          the Orthodox Faith
        </h1>
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full bg-blue-900/40 text-blue-200 text-xs font-semibold tracking-wide border border-blue-400/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-gray-300 text-sm mb-0">
          By <span className="font-semibold">Haylemeskel</span> • July 4, 2024
        </div>
      </div>
    </div>
    {/* Main Content - Open, Centered Editorial Layout */}
    <div className="flex justify-center w-full mt-16 px-4 md:px-12 lg:px-24">
      <article
        className="prose prose-invert max-w-5xl w-full text-base md:text-lg leading-relaxed text-gray-200 mx-auto"
        style={{ background: "none", boxShadow: "none", border: "none" }}
      >
        <div className="space-y-12">
          <section className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-xl text-blue-200">
              "Are you saved?" It's a short question, asked with conviction, but
              rarely with explanation.
            </blockquote>

            <p className="text-gray-300">
              For many, it sounds like a deep and meaningful question, but for
              others — especially those unfamiliar with the context or theology
              behind it — it can feel abrupt, confusing, or even judgmental. The
              problem isn't just the question itself, but how it's presented
              without clarity.
            </p>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-blue-200 mb-3">
                Key Questions to Consider:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Saved? From what?</li>
                <li>When did this salvation occur?</li>
                <li>How does salvation work?</li>
                <li>In what way are we saved?</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
              The Challenge of Understanding
            </h2>

            <p className="text-gray-300">
              This leads to a bigger issue — one that affects not just religion,
              but human communication in general. The root of many of our
              world's problems is not just ignorance or lack of understanding.
              It's misunderstanding.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Common Communication Barriers
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• We interpret through our own assumptions</li>
                  <li>• We misinterpret intentions</li>
                  <li>• We talk past each other</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Where This Happens
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• In politics</li>
                  <li>• In relationships</li>
                  <li>• In culture</li>
                  <li>• In matters of faith</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
              The Diversity of Christianity
            </h2>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <p className="text-lg">
                Today, there are over{" "}
                <span className="font-bold text-blue-200">
                  25,000 different Christian denominations
                </span>{" "}
                globally. Despite this massive variety, nearly all of them claim
                the same foundations: faith in Jesus Christ, and adherence to
                the Bible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Orthodox
                </h3>
                <p className="text-gray-300">
                  Emphasizes tradition and ancient teachings
                </p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Catholic
                </h3>
                <p className="text-gray-300">
                  Focuses on church authority and sacraments
                </p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Protestant
                </h3>
                <p className="text-gray-300">
                  Emphasizes personal faith and scripture
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
              The Power of Interpretation
            </h2>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-xl text-blue-200">
              "You are a sheep" - The same words, but two totally different
              interpretations, depending on context and mindset.
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Negative Interpretation
                </h3>
                <p className="text-gray-300">
                  Implies weakness, ignorance, or blind following
                </p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  Biblical Interpretation
                </h3>
                <p className="text-gray-300">
                  Means gentle, humble, and obedient
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
              The Orthodox Approach
            </h2>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">
                In the Orthodox Church — and especially in the Ethiopian
                Orthodox Tewahedo tradition — we don't rush to bold declarations
                without deep study, prayer, and guidance from the Church
                Fathers. We respect the ancient teachings and interpret
                Scripture through the lens of tradition, community, and holy
                guidance.
              </p>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-xl text-blue-200">
              Words carry weight. Meaning matters.
            </blockquote>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
              The Path Forward
            </h2>

            <p className="text-gray-300">
              In the end, it's not about who asks the question louder, but who
              lives the truth more humbly. There is one Christ. One Bible. But
              as long as there are many minds, many cultures, and many
              interpretations, there will always be room for disagreement and
              division — unless we return to the spirit of unity, love, and
              truth.
            </p>
          </section>
        </div>
      </article>
    </div>
    <div className="mt-12 flex justify-center">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors text-base"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path
            d="M12.5 15L8 10.5L12.5 6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to Blog
      </Link>
    </div>
  </div>
);

export default Salvation;
