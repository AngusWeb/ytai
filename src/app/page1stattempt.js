// pages/index.js
"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const features = [
    {
      id: "outline",
      title: "Video Outline & Timestamps",
      description:
        "Navigate videos efficiently with an organized structure showing main topics, subtopics, and key moments. Clickable timestamps let you jump directly to sections that matter most.",
      icon: "📑",
    },
    {
      id: "questions",
      title: "Ask Questions",
      description:
        "Get instant answers about video content without rewatching. Simply ask what you want to know, and receive concise responses based directly on the video's information.",
      icon: "❓",
    },
    {
      id: "factcheck",
      title: "Fact Checker",
      description:
        "Verify claims in videos with AI-powered analysis. Includes sources and overall reliability score for either the full video or just segments you select.",
      icon: "✓",
    },
    {
      id: "vocabulary",
      title: "Key Vocabulary",
      description:
        "Instantly identify and understand important terminology and jargon with clear definitions and context. Never miss the meaning of specialized terms again.",
      icon: "📚",
    },
    {
      id: "simplify",
      title: "Simplify Content",
      description:
        "Complex topics made easy! Get step-by-step breakdowns of difficult concepts with plain language explanations, helpful analogies, and key takeaways.",
      icon: "🔍",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>YouTube AI Companion | Smart Analysis for YouTube Videos</title>
        <meta
          name="description"
          content="Enhance your YouTube experience with AI-powered analysis tools that provide instant insights like fact-checking, content simplification, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/icon.png"
              alt="YouTube AI Companion Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-bold text-xl text-gray-800">
              YouTube AI Companion
            </span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition"
          >
            Add to Chrome
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Enhance Your YouTube Experience with AI Analysis
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Get instant insights like fact-checking, key vocabulary
                definitions, content simplification, video outlines with
                timestamps, and Q&A functionality directly within the YouTube
                interface.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-lg transition"
                >
                  <span>Add to Chrome</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#how-it-works"
                  className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium text-lg transition"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/promo-large.png"
                  alt="YouTube AI Companion Demo"
                  width={700}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful AI Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our Chrome extension enhances your YouTube viewing with these
              intelligent tools
            </p>
          </div>

          <div className="mt-8 mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "all"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-gray-300`}
              >
                All Features
              </button>
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`px-4 py-2 text-sm font-medium ${
                    index === features.length - 1 ? "rounded-r-lg" : ""
                  } ${
                    activeTab === feature.id
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  } border border-gray-300 border-l-0`}
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features
              .filter(
                (feature) => activeTab === "all" || activeTab === feature.id
              )
              .map((feature) => (
                <div
                  key={feature.id}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Get started with YouTube AI Companion in just a few simple steps
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 text-2xl font-bold">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Watch Any YouTube Video
              </h3>
              <p className="mt-2 text-gray-600">
                Simply browse to your favorite YouTube videos as you normally
                would.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 text-2xl font-bold">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Click the AI Companion Button
              </h3>
              <p className="mt-2 text-gray-600">
                Find our button on the YouTube playbar and select your desired
                analysis feature.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 text-2xl font-bold">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                View Results in Sidebar
              </h3>
              <p className="mt-2 text-gray-600">
                AI-generated insights appear in a convenient sidebar without
                disrupting your viewing.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/screenshot-annotated.png"
                alt="YouTube AI Companion Screenshot"
                width={1280}
                height={800}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Privacy & Security
            </h2>
            <div className="mt-8 bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Private and Secure
                  </h3>
                  <p className="mt-1 text-gray-600">
                    All processing happens locally. We don&apos;t collect
                    personal information or track browsing history.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Required Permissions
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We only request access to youtube.com and clipboard
                    permissions to paste your API key.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Easy Setup
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Follow our simple guide to obtain a free API key. Find it
                    under the &apos;How to obtain free API key&apos; button in
                    the extension menu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Enhance Your YouTube Experience?
          </h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Get instant AI-powered insights directly within your YouTube videos.
          </p>
          <div className="mt-8">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-md font-medium text-lg transition"
            >
              <span>Add to Chrome</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/icon.png"
                  alt="YouTube AI Companion Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <span className="font-bold text-xl text-white">
                  YouTube AI Companion
                </span>
              </div>
              <p className="mt-2 max-w-md">
                Enhance YouTube videos with AI-powered analysis tools for
                instant insights and better comprehension.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Features</h3>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature.id}>
                      <a
                        href={`#${feature.id}`}
                        className="hover:text-white transition"
                      >
                        {feature.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#privacy" className="hover:text-white transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="hover:text-white transition">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} YouTube AI Companion. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
