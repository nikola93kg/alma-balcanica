"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const [status, setStatus] = useState("");
  const dictionary = getDictionary(locale);
  const { fields, placeholders } = dictionary.contact;

  return (
    <form
      className="grid gap-5 rounded-md border border-border bg-paper p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus(dictionary.contact.success);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.name} name="name" autoComplete="name" required />
        <Field
          label={fields.email}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label={fields.whatsapp}
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          required
        />
        <Field
          label={fields.country}
          name="country"
          placeholder={placeholders.country}
          autoComplete="country-name"
        />
        <Field
          label={fields.travelers}
          name="travelers"
          type="number"
          min="1"
          placeholder={placeholders.travelers}
        />
        <Field
          label={fields.date}
          name="date"
          placeholder={placeholders.date}
        />
        <Field
          label={fields.tripType}
          name="tripType"
          placeholder={placeholders.tripType}
        />
      </div>

      <label className="grid gap-2 text-sm font-semibold text-foreground">
        {fields.message}
        <textarea
          name="message"
          rows={6}
          required
          placeholder={placeholders.message}
          className="focus-ring min-h-40 rounded-md border border-border bg-background px-4 py-3 text-sm font-normal leading-7 text-foreground placeholder:text-stone-dark/55"
        />
      </label>

      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-charcoal sm:w-fit"
      >
        <Send aria-hidden="true" className="size-4" />
        {dictionary.contact.submit}
      </button>

      <p
        aria-live="polite"
        className={cn(
          "text-sm leading-7 text-stone-dark",
          !status && "sr-only",
        )}
      >
        {status || dictionary.contact.success}
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  min?: string;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  min,
}: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        min={min}
        className="focus-ring h-12 rounded-md border border-border bg-background px-4 text-sm font-normal text-foreground placeholder:text-stone-dark/55"
      />
    </label>
  );
}
