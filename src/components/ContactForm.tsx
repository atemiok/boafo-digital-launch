import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { sendContactRequest } from "@/lib/contact.functions";
import { motion } from "framer-motion";

const BOTTLENECKS = [
  "Manual M-Pesa reconciliation",
  "Spreadsheet-driven operations",
  "WhatsApp-based workflows",
  "Disconnected property management",
  "Smart asset / IoT reporting",
  "Custom corporate website",
  "Other",
];

export function ContactForm({ compact }: { compact?: boolean }) {
  const send = useServerFn(sendContactRequest);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    bottleneck: BOTTLENECKS[0],
    message: "",
  });

  const onChange =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const result = await send({ data: form });
      if (result.delivered) {
        toast.success(result.message);
      } else {
        toast.success(result.message, { duration: 6000 });
      }
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        bottleneck: BOTTLENECKS[0],
        message: "",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  const easeOut = [0.16, 1, 0.3, 1] as const;

  const formVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="show"
      onSubmit={onSubmit}
      aria-label="Architecture discovery request form"
      className={`rounded-2xl border border-border bg-secondary/40 ${compact ? "space-y-2.5 p-4" : "space-y-4 p-6"}`}
    >
      <motion.div variants={itemVariant} className={`grid gap-3 ${compact ? "sm:grid-cols-2" : "gap-4 sm:grid-cols-2"}`}>
        <Field compact={compact} label="Name" id="name" value={form.name} onChange={onChange("name")} />
        <Field compact={compact} label="Company" id="company" value={form.company} onChange={onChange("company")} />
        <Field compact={compact} label="Corporate Email" id="email" type="email" value={form.email} onChange={onChange("email")} />
        <Field compact={compact} label="Phone (WhatsApp)" id="phone" type="tel" value={form.phone} onChange={onChange("phone")} />
      </motion.div>

      <motion.div variants={itemVariant} className="space-y-1">
        <label htmlFor="bottleneck" className={`font-medium uppercase tracking-wider text-muted-foreground ${compact ? "text-[10px]" : "text-xs"}`}>
          Primary System Bottleneck
        </label>
        <select
          id="bottleneck"
          required
          value={form.bottleneck}
          onChange={onChange("bottleneck")}
          className={`w-full rounded-xl border border-input bg-background/60 text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring ${compact ? "px-3 py-2 text-xs" : "px-3.5 py-2.5 text-sm"}`}
        >
          {BOTTLENECKS.map((b) => (
            <option key={b} value={b} className="bg-background text-foreground">
              {b}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={itemVariant} className="space-y-1">
        <label htmlFor="message" className={`font-medium uppercase tracking-wider text-muted-foreground ${compact ? "text-[10px]" : "text-xs"}`}>
          Anything else? <span className="normal-case text-muted-foreground/70">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={compact ? 2 : 4}
          value={form.message}
          onChange={onChange("message")}
          placeholder="Optional context — current tools, team size, timeline…"
          className={`w-full rounded-xl border border-input bg-background/60 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring ${compact ? "px-3 py-2 text-xs" : "px-3.5 py-2.5 text-sm"}`}
        />
      </motion.div>

      <motion.div variants={itemVariant}>
        <button
          type="submit"
          disabled={loading}
          className={`btn-mint inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold disabled:opacity-70 ${compact ? "px-4 py-2.5 text-xs" : "px-5 py-3 text-sm"}`}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Request
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </motion.div>
      <motion.p variants={itemVariant} className={`flex items-center justify-center gap-1.5 uppercase tracking-widest text-muted-foreground ${compact ? "text-[10px]" : "text-[11px]"}`}>
        <ShieldCheck className={`shrink-0 text-primary ${compact ? "h-3 w-3" : "h-3 w-3"}`} /> Your details are kept private
      </motion.p>
    </motion.form>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
