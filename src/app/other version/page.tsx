import Image from "next/image";
import Link from "next/link"; // Use for internal links if needed later

// --- UPDATE THESE LINKS ---
const CHROME_STORE_LINK = "YOUR_CHROME_STORE_LINK_HERE"; // Replace with your actual Chrome Store URL
const PRIVACY_POLICY_LINK = "YOUR_PRIVACY_POLICY_LINK_HERE"; // Replace or link to Chrome Store privacy section
// --- ---

// Reusable Button Component
const CTAButton = ({
  href,
  children,
  primary = true,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      inline-block px-8 py-3 rounded-lg font-semibold text-center transition duration-300 ease-in-out
      ${
        primary
          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }
    `}
  >
    {children}
  </a>
);

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Optional Simple Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/icon.png"
                alt="Extension Icon"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl text-gray-800">
                YouTube AI Companion
              </span>
            </div>
            <div>
              <CTAButton href={CHROME_STORE_LINK}>Add to Chrome</CTAButton>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              Enhance YouTube with AI-Powered Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant fact-checking, simplification, summaries, Q&A, key
              vocabulary definitions, and more – directly within the YouTube
              videos you watch.
            </p>
            <div className="mb-10">
              <CTAButton href={CHROME_STORE_LINK} primary={true}>
                Add to Chrome - It&apos;s Free
              </CTAButton>
            </div>
            {/* --- UPDATE IMAGE PATH --- */}
            <Image
              src="/marquee.png" // Replace with your actual marquee image path
              alt="YouTube AI Companion Features Showcase"
              width={1400}
              height={560}
              className="rounded-lg shadow-xl mx-auto"
              priority // Prioritize loading for LCP
            />
            {/* --- --- */}
            <p className="mt-4 text-sm text-gray-500">
              Requires Google Chrome browser
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Powerful AI Features at Your Fingertips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Video Outline & Timestamps
                </h3>
                <p className="text-gray-600">
                  Navigate videos efficiently with an organized structure
                  showing main topics and key moments. Clickable timestamps let
                  you jump directly to sections that matter most.
                </p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Ask Questions
                </h3>
                <p className="text-gray-600">
                  Get instant answers about video content without rewatching.
                  Simply ask what you want to know, and receive concise
                  responses based directly on the video&apos;s information.
                </p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Fact Checking
                </h3>
                <p className="text-gray-600">
                  Verify claims instantly with AI-powered analysis. Check the
                  full video or specific segments, complete with sources and an
                  overall reliability score.
                </p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Key Vocabulary
                </h3>
                <p className="text-gray-600">
                  Instantly identify and understand important terminology and
                  jargon with clear definitions and context. Never miss the
                  meaning of specialized terms again.
                </p>
              </div>
              {/* Feature Card 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Simplify Content
                </h3>
                <p className="text-gray-600">
                  Complex topics made easy! Get step-by-step breakdowns of
                  difficult concepts with plain language explanations, helpful
                  analogies, and key takeaways.
                </p>
              </div>
              {/* Feature Card 6 - Bonus/General */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                {/* --- UPDATE IMAGE PATH --- */}
                <Image
                  src="/promo-small.png"
                  alt="Extension Features Overview"
                  width={449 / 2}
                  height={280 / 2}
                  className="mb-4 rounded"
                />
                {/* --- --- */}
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Flexible & Unobtrusive
                </h3>
                <p className="text-gray-600">
                  Analyze full videos or just recent segments. Results appear
                  neatly in a sidebar without disrupting your viewing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get AI Insights in 4 Simple Steps
                </h2>
                <ol className="space-y-4 list-decimal list-inside text-lg text-gray-700">
                  <li>Watch any video on YouTube.com.</li>
                  <li>
                    Click the <strong>AI Companion</strong> button on the video
                    player controls.
                  </li>
                  <li>
                    Select your desired analysis feature from the dropdown menu.
                  </li>
                  <li>View AI-generated results instantly in the sidebar!</li>
                </ol>
              </div>
              <div className="text-center">
                {/* --- UPDATE IMAGE PATH --- */}
                <Image
                  src="/screenshot1.png" // Replace with your annotated screenshot showing button/sidebar
                  alt="Screenshot showing YouTube AI Companion button and sidebar"
                  width={1280 / 1.8} // Adjust size as needed
                  height={800 / 1.8}
                  className="rounded-lg shadow-lg mx-auto"
                />
                {/* --- --- */}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              See YouTube AI Companion in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* --- UPDATE IMAGE PATHS --- */}
              <div>
                <Image
                  src="/screenshot2.png"
                  alt="Annotated screenshot showing AI features"
                  width={1280 / 1.8}
                  height={800 / 1.8}
                  className="rounded-lg shadow-lg mx-auto mb-4"
                />
                <p className="text-gray-600 italic">
                  Get detailed analysis directly in the sidebar.
                </p>
              </div>
              <div>
                <Image
                  src="/features-overview.png"
                  alt="Detailed features overview image"
                  width={1280 / 1.8}
                  height={800 / 1.8}
                  className="rounded-lg shadow-lg mx-auto mb-4"
                />
                <p className="text-gray-600 italic">
                  Access various tools like simplification and fact-checking.
                </p>
              </div>
              {/* --- --- */}
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
                  <strong>Privacy First:</strong> We do not collect your
                  personal information or track your browsing history.
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
                  <strong>Easy API Key Setup:</strong> A simple guide is
                  available within the extension settings to help you get a free
                  API key required for the AI features.
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

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Understand YouTube Like Never Before?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Get deeper insights, save time, and verify information
              effortlessly. Install YouTube AI Companion today!
            </p>
            <a
              href={CHROME_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-lg font-semibold text-center transition duration-300 ease-in-out bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl"
            >
              Add YouTube AI Companion to Chrome - Free
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 text-center">
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
