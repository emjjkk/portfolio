"use client";
import { useState } from "react";

export default function SubscribeBox() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Subscribed! Check your inbox.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Subscription failed.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubscribe} className="w-full">
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        disabled={status === "loading"}
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-sm bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {message && (
        <div className={`mt-2 text-xs ${status === "success" ? "text-green-600" : "text-red-500"}`}>
          {message}
        </div>
      )}
    </form>
  );
}
