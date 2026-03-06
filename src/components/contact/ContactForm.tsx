import React, { useState } from "react";

const NETLIFY_FORM_NAME = "contact";

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const inputBase =
    "w-full font-b text-base lg:text-[14px] px-2.5 py-2 min-h-[44px] rounded-btn border border-P/20 outline-none text-P/90 placeholder:text-P/55 placeholder:font-semibold focus:border-P/40 focus:ring-4 focus:ring-P/10";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setMessage("");
    try {
      const formData = new FormData(form);
      const params = new URLSearchParams();
      formData.forEach((value, key) => params.append(key, value instanceof File ? value.name : String(value)));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setMessage("Thank you. We'll respond soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  return (
    <form
      name={NETLIFY_FORM_NAME}
      method="post"
      className="flex flex-col gap-4 flex-1"
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-name"
            className="font-b text-[13px] font-semibold text-P/80"
          >
            Name
          </label>
          <input
            id="contact-name"
            className={inputBase}
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-email"
            className="font-b text-[13px] font-semibold text-P/80"
          >
            Email
          </label>
          <input
            id="contact-email"
            className={inputBase}
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-org"
            className="font-b text-[13px] font-semibold text-P/80"
          >
            Organization
          </label>
          <input
            id="contact-org"
            className={inputBase}
            name="org"
            placeholder="Organization"
            autoComplete="organization"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-role"
            className="font-b text-[13px] font-semibold text-P/80"
          >
            Role / Title
          </label>
          <input
            id="contact-role"
            className={inputBase}
            name="role"
            placeholder="Role / Title"
            autoComplete="organization-title"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-type"
          className="font-b text-[13px] font-semibold text-P/80"
        >
          Inquiry type
        </label>
        <div className="relative">
          <select
            id="contact-type"
            required
            className={`${inputBase} bg-white appearance-none pr-9`}
            name="type"
          >
            <option value="" disabled>
              Inquiry type
            </option>
            <option value="discovery">Discovery / Consulting</option>
            <option value="coaching">Coaching</option>
            <option value="speaking">Speaking / Workshop</option>
            <option value="other">Other</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-P/60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-message"
          className="font-b text-[13px] font-semibold text-P/80"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={3}
          className={`${inputBase} min-h-[72px] resize-y flex-1 py-2`}
          name="message"
          placeholder="Message"
        />
      </div>

      <div className="flex gap-3 items-center flex-wrap">
        <button
          className="inline-flex items-center justify-center px-4 py-3 rounded-btn bg-A1 text-white font-h text-[14px] font-bold no-underline whitespace-nowrap disabled:opacity-70 min-h-[44px] touch-manipulation transition-all hover:-translate-y-[1px] hover:opacity-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "success" && (
          <span className="font-b text-[14px] font-semibold text-A2">
            {message}
          </span>
        )}
        {status === "error" && (
          <span className="font-b text-[14px] font-semibold text-A1">
            {message}
          </span>
        )}
      </div>
    </form>
  );
};
