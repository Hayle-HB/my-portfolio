"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BlogPost() {
  const [readingTime, setReadingTime] = useState("5 min");

  // Calculate reading time on component mount
  useEffect(() => {
    // A typical reading speed is 200-250 words per minute
    const wordCount = 1200; // Approximate word count of the article
    const time = Math.ceil(wordCount / 200);
    setReadingTime(`${time} min read`);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Theological Insights
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Articles
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Creation of Adam - hands reaching toward each other"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent">
            <div className="max-w-4xl mx-auto h-full flex flex-col justify-end px-4 sm:px-6 pb-16">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <span className="uppercase text-sm font-semibold tracking-wider">
                    Theology
                  </span>
                  <span>•</span>
                  <span>
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{readingTime}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                  Created in the Image of God: A Divine Purpose
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Exploring humanity's divine origin, purpose, and the profound
                  implications of being made in God's image.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed">
              In Genesis 1:26-27, God says,{" "}
              <em>"Let Us make man in Our image, after Our likeness…"</em> This
              is not just poetry. To be made in God's image (in Hebrew,{" "}
              <em>tselem Elohim</em>) means human beings were created to reflect
              God's character—His wisdom, creativity, love, and moral goodness.
              But it's more than just looking like God: we were created for
              communion. That means we were designed to live with God, in God,
              and through God.
            </p>

            <blockquote className="my-10 border-l-4 border-emerald-500 pl-6 italic text-2xl font-serif text-gray-300">
              "To be made in God's image means human beings were created to
              reflect God's character—His wisdom, creativity, love, and moral
              goodness."
            </blockquote>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Eden: More Than Just a Garden
            </h2>

            <div className="my-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <p>
                  In Genesis 2, God places Adam in Eden—not just a nice garden,
                  but a sacred space, almost like a temple. God walks with man
                  there, talks with him. This was not religion—it was union,
                  face-to-face relationship. Adam and Eve didn't just know about
                  God; they knew Him in the most intimate way.
                </p>
                <p>
                  They were also given a divine vocation: to{" "}
                  <em>"be fruitful, multiply, fill the earth and subdue it"</em>{" "}
                  (Genesis 1:28). Humanity was meant to extend Eden, to make the
                  whole world a dwelling place of God, as His co-workers, His
                  icons. They were to live in harmony with each other, creation,
                  and God. This was shalom—the wholeness and peace of divine
                  order.
                </p>
              </div>
              <div className="md:col-span-2 relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Garden of Eden"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Test of Love: Freedom and the Tree
            </h2>

            <p>
              But love without freedom is impossible. So God gave them a
              test—not to trap them, but to give them the dignity of choice. In
              the garden, there were two symbolic trees:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition duration-300">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">
                  The Tree of Life
                </h3>
                <p className="text-gray-300">
                  Symbolizing union with God and immortality.
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition duration-300">
                <h3 className="text-xl font-bold text-amber-400 mb-3">
                  The Tree of the Knowledge of Good and Evil
                </h3>
                <p className="text-gray-300">
                  Not just about information—it represented the decision to
                  define good and evil apart from God.
                </p>
              </div>
            </div>

            <p>
              God said:{" "}
              <em>
                "You shall not eat of the tree... for in the day that you eat of
                it, you shall surely die."
              </em>{" "}
              (Genesis 2:17)
            </p>

            <p>
              The test was simple: Will you trust God's wisdom, or will you
              seize autonomy?
            </p>

            <div className="my-12 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Fall: What Really Happened?
            </h2>

            <div className="relative w-full h-[400px] rounded-xl overflow-hidden my-8">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Adam and Eve with the serpent"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent/0"></div>
            </div>

            <p>
              In Genesis 3, the serpent (Satan) tempts Eve by challenging God's
              trustworthiness:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <em>"Did God really say…?"</em>
              </li>
              <li>
                <em>"You will not surely die... You will be like God…"</em>
              </li>
            </ul>

            <p>
              That's the core of sin: a desire for godhood without God. Adam and
              Eve took and ate—not because they wanted fruit, but because they
              wanted independence, self-rule, control. This was the first
              sin—not merely breaking a rule, but breaking communion. They chose
              self over God.
            </p>

            <div className="my-10 bg-gradient-to-r from-emerald-900/20 to-emerald-700/10 rounded-xl p-8 border-l-4 border-emerald-500">
              <blockquote className="text-2xl font-serif italic text-gray-200">
                "The core of sin: a desire for godhood without God."
              </blockquote>
            </div>

            <p>And what was the result?</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="bg-gray-900 rounded-xl p-6 border-t-2 border-red-500">
                <h4 className="font-bold text-white mb-2">
                  Their eyes were opened
                </h4>
                <p className="text-gray-400">Not to wisdom, but to shame.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border-t-2 border-red-500">
                <h4 className="font-bold text-white mb-2">They hid from God</h4>
                <p className="text-gray-400">
                  The first sign of spiritual death—alienation.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border-t-2 border-red-500">
                <h4 className="font-bold text-white mb-2">
                  They blamed each other
                </h4>
                <p className="text-gray-400">Relationships were shattered.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border-t-2 border-red-500">
                <h4 className="font-bold text-white mb-2">
                  They were expelled from Eden
                </h4>
                <p className="text-gray-400">
                  Not because God stopped loving them, but because sin made that
                  intimacy impossible.
                </p>
              </div>
            </div>

            <p>
              And just as God warned: they began to die. Not instantly
              physically—but spiritually. The divine light that covered them
              faded. Death entered their bodies. Their soul became clouded by
              fear, pride, and selfishness. The human nature was now
              corrupted—not totally destroyed, but weakened, inclined to sin.
              And this fallen nature would be passed down to all humanity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What Is the "Human Crisis"?
            </h2>

            <p>
              The early Church Fathers understood the Fall as far more than just
              a legal problem or broken rule. Here's how they describe it:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/80 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <span className="text-blue-400 text-xl font-bold">A</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    St. Athanasius (4th century)
                  </h3>
                </div>
                <p className="text-gray-300">
                  Humanity was made for immortality, but sin brought us back to
                  non-being, to corruption. Christ had to restore what we lost.
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/80 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <span className="text-purple-400 text-xl font-bold">I</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    St. Irenaeus (2nd century)
                  </h3>
                </div>
                <p className="text-gray-300">
                  We lost the likeness of God. The image remained (our reason,
                  conscience, desire for God), but the likeness (our holiness,
                  harmony, and grace) was damaged. Salvation is about restoring
                  the likeness.
                </p>
              </div>
            </div>

            <p>So the human crisis is this:</p>

            <div className="my-8 bg-gray-900 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
                <div className="p-6 hover:bg-gray-800/50 transition duration-300">
                  <h4 className="font-bold text-emerald-400 mb-2">
                    Spiritual Death
                  </h4>
                  <p className="text-gray-300">
                    Separation from God, who is the source of life.
                  </p>
                </div>
                <div className="p-6 hover:bg-gray-800/50 transition duration-300">
                  <h4 className="font-bold text-emerald-400 mb-2">
                    Moral Corruption
                  </h4>
                  <p className="text-gray-300">
                    We still have reason and will, but they are weakened; we
                    fall into selfishness and sin.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
                <div className="p-6 hover:bg-gray-800/50 transition duration-300">
                  <h4 className="font-bold text-emerald-400 mb-2">
                    Physical Death
                  </h4>
                  <p className="text-gray-300">
                    As a sign of this rupture, even our bodies return to dust.
                  </p>
                </div>
                <div className="p-6 hover:bg-gray-800/50 transition duration-300">
                  <h4 className="font-bold text-emerald-400 mb-2">
                    Exile from Paradise
                  </h4>
                  <p className="text-gray-300">
                    We are born outside of Eden, into a world where sin
                    dominates.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A Deep Wound, Not Just a Legal Debt
            </h2>

            <div className="relative w-full h-[400px] rounded-xl overflow-hidden my-8">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Christ the Healer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent/0"></div>
            </div>

            <p>
              This is crucial: the early Church did not say, "God is angry, and
              we need someone to pay Him off." They said, "Humanity is wounded,
              enslaved, dying—and we need to be healed, freed, and brought back
              to life."
            </p>

            <div className="my-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border-l-4 border-emerald-500">
              <blockquote className="text-2xl font-serif italic text-gray-200">
                "Salvation, from the beginning, was not just about forgiveness.
                It was about rescue. A physician to heal our soul. A new Adam to
                re-create our nature. A Shepherd to bring us home."
              </blockquote>
            </div>

            <p>
              So salvation, from the beginning, was not just about forgiveness.
              It was about rescue. A physician to heal our soul. A new Adam to
              re-create our nature. A Shepherd to bring us home.
            </p>
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-emerald-500 ring-offset-2 ring-offset-gray-950">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">John Doe</h3>
                <p className="text-gray-400">Theological Writer & Researcher</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              John has been studying and writing about theological concepts for
              over 15 years. He holds a Master's degree in Divinity and is
              passionate about making complex theological ideas accessible to
              everyone.
            </p>
          </div>

          {/* Share and Comments Section */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 border-t border-gray-800">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Share this article:</span>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-900 transition">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Reading time:</span>
              <span className="text-white">{readingTime}</span>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-emerald-500 transition duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Article ${item}`}
                    alt={`Related Article ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    The Mystery of Divine Grace
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Exploring the depths of God's unmerited favor toward
                    humanity...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-400 text-sm">Theology</span>
                    <span className="text-gray-500 text-sm">4 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">
                Theological Insights
              </h3>
              <p className="text-gray-400 mb-4">
                Exploring the depths of faith, scripture, and tradition through
                thoughtful articles and reflections.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition"
                  >
                    Theology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition"
                  >
                    Biblical Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition"
                  >
                    Church History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition"
                  >
                    Spirituality
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Subscribe
              </h3>
              <p className="text-gray-400 mb-4">
                Get the latest articles delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white w-full"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Theological Insights. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
