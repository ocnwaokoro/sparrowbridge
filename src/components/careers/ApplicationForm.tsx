import React, { useState } from "react";
import { FormField } from "../contact/FormField";

const NETLIFY_FORM_NAME = "application";

// Match Contact form input/label styles when embedded (Careers page)
const contactStyleInput =
  "w-full font-b text-base lg:text-[14px] px-2.5 py-2 min-h-[44px] rounded-btn border border-P/20 outline-none text-P/90 placeholder:text-P/55 placeholder:font-semibold focus:border-P/40 focus:ring-4 focus:ring-P/10";
const contactStyleLabel = "font-b text-[13px] font-semibold text-P/80";

interface ApplicationFormProps {
  /** When true, omit outer card wrapper and use Contact-form styling (for Careers page). */
  embedded?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  embedded = false,
}) => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const inputBase = embedded
    ? contactStyleInput
    : "w-full px-2.5 py-2 min-h-[44px] bg-white border border-P/15 rounded-btn font-b text-base lg:text-[14px] focus:outline-none focus:border-A1/40 focus:ring-4 focus:ring-P/5 transition-all placeholder:text-P/40";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setMessage("");
    try {
      const formData = new FormData(form);
      const res = await fetch("/", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setMessage("Application received. We'll be in touch.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  const formEl = (
      <form
        name={NETLIFY_FORM_NAME}
        method="post"
        encType="multipart/form-data"
        className="flex flex-col gap-4 flex-1"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Name"
              id="app-name"
              labelClassName={embedded ? contactStyleLabel : undefined}
            >
              <input
                type="text"
                id="app-name"
                name="name"
                placeholder="Name"
                className={inputBase}
                required
              />
            </FormField>
            <FormField
              label="Email"
              id="app-email"
              labelClassName={embedded ? contactStyleLabel : undefined}
            >
              <input
                type="email"
                id="app-email"
                name="email"
                placeholder="Email"
                className={inputBase}
                required
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="LinkedIn URL"
              id="app-linkedin"
              labelClassName={embedded ? contactStyleLabel : undefined}
            >
              <input
                type="url"
                id="app-linkedin"
                name="linkedin"
                placeholder="https://linkedin.com/in/..."
                className={inputBase}
                required
              />
            </FormField>
            <FormField
              label="Location"
              id="app-location"
              labelClassName={embedded ? contactStyleLabel : undefined}
            >
              <input
                type="text"
                id="app-location"
                name="location"
                placeholder="City, State"
                className={inputBase}
              />
            </FormField>
          </div>

          <FormField
            label="Brief Note"
            id="app-note"
            labelClassName={embedded ? contactStyleLabel : undefined}
          >
            <textarea
              id="app-note"
              name="note"
              rows={3}
              placeholder="What draws you to SparrowBridge?"
              className={`${inputBase} min-h-[72px] resize-y`}
              required
            />
          </FormField>

          <div
            className={
              embedded
                ? "flex flex-col gap-1"
                : "flex flex-col gap-3 p-4 rounded-card border border-P/10 bg-P/[0.02]"
            }
          >
            <label
              htmlFor="resume"
              className={
                embedded ? contactStyleLabel : "font-h text-[12px] font-extrabold text-P/80 uppercase tracking-wider"
              }
            >
              Resume / CV
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="text-[13px] file:mr-4 file:py-2 file:px-4 file:rounded-btn file:border-0 file:text-[13px] file:font-h file:font-bold file:bg-P file:text-white hover:file:bg-P/90 cursor-pointer"
              required
            />
          </div>

          <div
            className={
              embedded
                ? "flex gap-3 items-center flex-wrap"
                : "mt-2 flex flex-wrap items-center gap-3"
            }
          >
            {embedded ? (
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center px-4 py-3 rounded-btn bg-A1 text-white font-h text-[14px] font-bold no-underline whitespace-nowrap disabled:opacity-70 min-h-[44px] touch-manipulation transition-all hover:-translate-y-[1px] hover:opacity-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2"
              >
                {status === "sending" ? "Submitting…" : "Submit Application"}
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn bg-A1 text-white font-h text-[14px] font-bold no-underline whitespace-nowrap disabled:opacity-70 min-h-[44px] touch-manipulation transition-all hover:-translate-y-[1px] hover:opacity-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2"
              >
                {status === "sending" ? "Submitting…" : "Submit Application"}
              </button>
            )}
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

  if (embedded) {
    return <div className="flex flex-col gap-4 flex-1">{formEl}</div>;
  }

  return (
    <div className="border border-P/10 rounded-card bg-P/[0.02] overflow-hidden flex flex-col">
      <div className="px-4 py-2 bg-P/5 border-b border-P/10">
        <h3 className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
          Application
        </h3>
      </div>
      <div className="p-4 bg-white flex flex-col gap-4 flex-1">{formEl}</div>
    </div>
  );
};
