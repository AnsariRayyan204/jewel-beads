"use client";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">
        Have questions about our jewelry? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">Your Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium">Your Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
            rows={4}
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
