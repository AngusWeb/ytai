import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>API Key Setup Guide | YouTube AI Companion</title>
        <meta
          name="description"
          content="Step-by-step guide to set up your YouTube AI Companion extension with a Google AI Studio API key."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
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
          </Link>
          <Link
            href="/"
            className="text-gray-700 hover:text-red-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Guide Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-red-600 border-b-2 border-gray-200 pb-4">
          YouTube AI Companion - API Key Setup Guide
        </h1>

        {/* Step: Important Requirements */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              !
            </span>
            Important Requirements
          </h2>
          <p className="mt-4">
            Before you begin, please ensure you meet the following requirements:
          </p>

          <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4">
            <p className="mb-2">
              <strong>Age Requirement:</strong> Your Google account must be
              registered with an age of at least 18 years old to access the
              Google AI Studio and create an API key.
            </p>

            <p>
              <strong>Regional Availability:</strong> While Google Gemini (the
              AI model used by this extension) is available in most countries,
              it is not available in all regions. If you are unable to access
              Google AI Studio or create an API key, this extension may not work
              in your region.
            </p>
          </div>

          <p className="mt-4">
            If you meet these requirements, you can proceed with the following
            steps to set up your YouTube AI Companion extension.
          </p>
        </div>

        {/* Step 1 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              1
            </span>
            Get a Google AI Studio API Key
          </h2>
          <p className="mt-4">
            Visit{" "}
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://aistudio.google.com/apikey
            </a>
          </p>
          <div className="mt-2 bg-amber-50 border-l-4 border-amber-400 p-4">
            If prompted, sign in to your Google account
          </div>
        </div>

        {/* Step 2 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              2
            </span>
            Create Your API Key
          </h2>
          <p className="mt-4">
            Click the{" "}
            <span className="font-bold text-red-600">Create API key</span>{" "}
            button
          </p>
          <div className="mt-4 mb-4">
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/guide/createapikeybutton.png"
                alt="Create API Key button screenshot"
                width={1200}
                height={800}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4">
            If prompted to select a Google Cloud project, choose one from the
            dropdown menu
          </div>
        </div>

        {/* Step 3 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              3
            </span>
            Copy Your New API Key
          </h2>
          <p className="mt-4">
            Once your API key is generated, click the{" "}
            <span className="font-bold text-red-600">Copy API key</span> button
          </p>
          <div className="mt-4 mb-4">
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/guide/copyapikeybutton.png"
                alt="Copy API Key button screenshot"
                width={1200}
                height={800}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4">
            Keep this API key secure! Don&apos;t share it with others.
          </div>
        </div>

        {/* Step 4 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              4
            </span>
            Pin the Extension to Your Browser
          </h2>
          <p className="mt-4">
            Find and pin the YouTube AI Companion extension from your
            browser&apos;s extension menu:
          </p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>
              Click the extensions icon (puzzle piece) on the right side of your
              address bar
            </li>
            <li>Find &apos;YouTube AI Companion&apos; in the list</li>
            <li>Click the pin icon to make it always visible</li>
          </ol>
          <div className="mt-4 mb-4">
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/guide/extensionpinning.png"
                alt="Extension pinning screenshot"
                width={1200}
                height={800}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              5
            </span>
            Configure the Extension
          </h2>
          <p className="mt-4">
            Now set up the extension with your new API key:
          </p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>Click the YouTube AI Companion icon in your browser toolbar</li>
            <li>Paste your API key into the field provided</li>
            <li>
              Click the{" "}
              <span className="font-bold text-red-600">Save API Key</span>{" "}
              button
            </li>
          </ol>
          <div className="mt-4 mb-4">
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src={
                  process.env.NODE_ENV === "production"
                    ? `/ytai/images/guide/pasteinfactcheckerextension.png`
                    : `/images/guide/pasteinfactcheckerextension.png`
                }
                alt="API pasting screenshot"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-xl font-semibold text-red-600">
            <span className="flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full mr-3 font-bold">
              6
            </span>
            Start Using Your AI Companion!
          </h2>
          <p className="mt-4">
            You&apos;re all set! Now when watching YouTube videos:
          </p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>Click the AI companion button on the YouTube player bar</li>
            <li>
              Select from the dropdown menu which feature you want to use:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  <strong>Fact Check:</strong> Verify claims and get accuracy
                  assessments
                </li>
                <li>
                  <strong>Key Vocabulary:</strong> Get definitions for
                  specialized terms and jargon
                </li>
                <li>
                  <strong>Simplify Content:</strong> Break down complex topics
                  into plain language
                </li>
                <li>
                  <strong>Video Outline & Timestamps:</strong> View the
                  structure with clickable timestamps
                </li>
                <li>
                  <strong>Ask Questions:</strong> Get direct answers about the
                  video content
                </li>
              </ul>
            </li>
            <li>View AI-generated responses in the sidebar</li>
          </ol>
          <div className="mt-4 mb-4">
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/guide/extensionhowtouse.png"
                alt="How to use screenshot"
                width={1200}
                height={800}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4">
            Remember: This AI companion is a helpful tool but always use your
            own judgment and verify important information from multiple sources.
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-lg transition"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} YouTube AI Companion. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
