// pages/index.js
"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
// --- UPDATE THESE LINKS ---
const CHROME_STORE_LINK =
  "https://chromewebstore.google.com/detail/youtube-factcheck/ajapllhjmmdfbilfbjpnnpnjhogajmio?hl=en"; // Replace with your actual Chrome Store URL
const PRIVACY_POLICY_LINK =
  "https://docs.google.com/document/d/e/2PACX-1vS1nnpAH-MaZ66UzisMPMm8vesErMGoxZiK0mrX-y5nbYr4-zIRwKBCsN67bYVdp4_OygPfnaHXL2uP/pub"; // Replace or link to Chrome Store privacy section
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
            href={CHROME_STORE_LINK}
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
                  href={CHROME_STORE_LINK}
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
                <Link
                  href="/setup-guide"
                  className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium text-lg transition"
                >
                  Setup Guide
                </Link>
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
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-red-600 font-medium uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
              Powerful AI Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our Chrome extension enhances your YouTube viewing with these
              intelligent tools
            </p>
          </div>

          <div className="mt-10 mb-12 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm bg-white p-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === "all"
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                All Features
              </button>
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === feature.id
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
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
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href={`#${feature.id}`}
                      className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
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
            <div className="mt-8 text-center">
              <Link
                href="/setup-guide"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium text-lg transition"
              >
                View Detailed Setup Guide
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
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Setup Guide Teaser Section */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-8 shadow-md border border-red-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 text-red-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Need an API Key?
                </h2>

                <p className="mt-2 text-gray-600">
                  Our detailed setup guide walks you through obtaining a free
                  Google AI Studio API key and configuring your YouTube AI
                  Companion in just minutes.
                </p>

                <div className="mt-6">
                  <Link
                    href="/setup-guide"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
                  >
                    View Setup Guide
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust and Privacy Section */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Your Viewing, Your Privacy
          </h2>
          <div className="space-y-6 text-left max-w-2xl mx-auto text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl mt-1">✅</span>
              <p>
                <strong>Privacy First:</strong> We do not collect your personal
                information or track your browsing history.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl mt-1">🔒</span>
              <p>
                <strong>Secure Analysis:</strong> The extension uses your
                provided API key to securely analyze video content via the AI
                model. Your data isn&apos;t stored by us.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl mt-1">⚙️</span>
              <div>
                <p>
                  <strong>Minimal Permissions:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
                  <li>
                    <em>YouTube Access:</em> Needed to add the button and
                    sidebar to the YouTube page.
                  </li>
                  <li>
                    <em>Clipboard Access (Optional):</em> To make pasting your
                    API key easier during setup.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl mt-1">🔑</span>
              <p>
                <strong>Easy API Key Setup:</strong> A simple guide is available
                within the extension settings to help you get a free API key
                required for the AI features.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            For full details, please read our{" "}
            <a
              href={PRIVACY_POLICY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
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
              href={CHROME_STORE_LINK}
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
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <a
              href={PRIVACY_POLICY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 mx-2"
            >
              Privacy Policy
            </a>
            <span className="mx-1">|</span>
            <a
              href={CHROME_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 mx-2"
            >
              Chrome Web Store
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} YouTube AI Companion. All rights
            reserved.
          </p>
          {/* Optional: Add your name or company */}
          {/* <p className="text-xs mt-2">Developed by [Your Name/Company]</p> */}
        </div>
      </footer>
    </div>
  );
}
