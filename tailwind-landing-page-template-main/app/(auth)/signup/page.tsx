export const metadata = {
  title: "Sign Up - Simple",
  description: "Explore the features of Sereni AI",
};

export default function ProductPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Discover Sereni AI</h1>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div className="border p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">AI-Powered Emotional Support</h2>
          <p className="text-gray-700 mt-2">
            Sereni AI is designed to detect stress and provide natural, engaging conversations that feel like talking to a close friend.
          </p>
        </div>
        <div className="border p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Real-time stress detection</li>
            <li>Natural conversation flow</li>
            <li>Personalized interactions</li>
            <li>Student learning assistance</li>
            <li>Voice-based AI companion</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 space-y-3">
        <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
          Get Sereni AI
        </button>
        <div className="text-center text-sm italic text-gray-400">Or</div>
        <button className="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
          Learn More
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By exploring Sereni AI, you agree to the {" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Terms of Service
          </a>{" "}
          and {" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
