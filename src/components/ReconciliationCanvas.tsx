import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  MessageSquareWarning,
  Receipt,
  Wifi,
  CheckCircle2,
  BellRing,
  BarChart3,
  Cpu,
  ArrowRight,
} from "lucide-react";

type Bottleneck = {
  id: string;
  label: string;
  icon: typeof FileSpreadsheet;
  output: { label: string; icon: typeof CheckCircle2 };
};

const BOTTLENECKS: Bottleneck[] = [
  {
    id: "excel",
    label: "Messy Excel Sheets",
    icon: FileSpreadsheet,
    output: { label: "Zero-Leakage Management Reports", icon: BarChart3 },
  },
  {
    id: "mpesa",
    label: "Manual M-Pesa Tracing",
    icon: Receipt,
    output: { label: "Automated Ledger Reconciliation", icon: CheckCircle2 },
  },
  {
    id: "whatsapp",
    label: "WhatsApp Chaos",
    icon: MessageSquareWarning,
    output: { label: "Instant Client SMS Alerts", icon: BellRing },
  },
  {
    id: "iot",
    label: "Disconnected Smart Assets",
    icon: Wifi,
    output: { label: "Unified IoT Telemetry Feed", icon: BarChart3 },
  },
];

export function ReconciliationCanvas() {
  const [activeId, setActiveId] = useState<string>(BOTTLENECKS[0].id);
  const active = BOTTLENECKS.find((b) => b.id === activeId) ?? BOTTLENECKS[0];

  return (
    <div className="glass-card relative overflow-hidden p-5 sm:p-8">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 -z-0 h-72 w-72 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-mint)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 -z-0 h-72 w-72 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-electric)" }}
      />

      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-widest text-primary">
            Operational Reconciliation Canvas
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
            Click a bottleneck. Watch it become clean data.
          </h3>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur sm:inline-flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Live Simulator
        </span>
      </div>

      <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        {/* LEFT — bottlenecks */}
        <ul role="tablist" aria-label="Business bottlenecks" className="space-y-2.5">
          {BOTTLENECKS.map((b) => {
            const isActive = b.id === activeId;
            return (
              <li key={b.id}>
                <button
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`output-${b.id}`}
                  onClick={() => setActiveId(b.id)}
                  className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "border-primary/60 bg-primary/10 text-foreground shadow-[0_0_0_1px_var(--primary)/0.25,0_10px_30px_-15px_var(--primary)]"
                      : "border-border bg-surface/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-lg border transition-colors ${
                        isActive
                          ? "border-primary/60 bg-primary/15 text-primary"
                          : "border-border bg-background/60 text-muted-foreground"
                      }`}
                    >
                      <b.icon className="h-4 w-4" />
                    </span>
                    {b.label}
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 transition-all ${
                      isActive ? "translate-x-0 text-primary" : "-translate-x-1 text-muted-foreground/50"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CENTER — engine */}
        <div className="relative flex items-center justify-center py-6 md:py-0">
          {/* connector lines (desktop) */}
          <svg
            aria-hidden
            className="absolute left-0 top-1/2 hidden h-px w-[calc(50%-2.25rem)] -translate-y-1/2 md:block"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="1" x2="100" y2="1" stroke="oklch(1 0 0 / 0.12)" strokeDasharray="3 3" />
          </svg>
          <svg
            aria-hidden
            className="absolute right-0 top-1/2 hidden h-px w-[calc(50%-2.25rem)] -translate-y-1/2 md:block"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="1" x2="100" y2="1" stroke="oklch(1 0 0 / 0.12)" strokeDasharray="3 3" />
          </svg>

          {/* animated packet */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`packet-${activeId}`}
              initial={{ x: -90, opacity: 0 }}
              animate={{ x: 90, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px_var(--primary)] md:block"
              aria-hidden
            />
          </AnimatePresence>

          {/* engine node */}
          <motion.div
            key={`engine-${activeId}`}
            initial={{ scale: 0.96 }}
            animate={{ scale: [0.96, 1.04, 1] }}
            transition={{ duration: 0.6 }}
            className="relative grid h-20 w-20 place-items-center rounded-2xl border border-primary/40 bg-background/80 backdrop-blur-md sm:h-24 sm:w-24"
            style={{ boxShadow: "0 0 60px -10px var(--primary)" }}
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-2xl"
              style={{ background: "var(--gradient-electric)", opacity: 0.18 }}
              animate={{ opacity: [0.12, 0.3, 0.12] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <Cpu className="relative h-7 w-7 text-primary sm:h-8 sm:w-8" />
            <span className="absolute -bottom-7 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Boafo Engine
            </span>
          </motion.div>
        </div>

        {/* RIGHT — output */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`out-${activeId}`}
              id={`output-${activeId}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="rounded-2xl border border-primary/40 bg-surface/80 p-5 backdrop-blur"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/40 bg-primary/15 text-primary">
                  <active.output.icon className="h-4 w-4" />
                </span>
                <p className="text-[11px] font-mono uppercase tracking-widest text-primary">
                  Output
                </p>
              </div>
              <p className="mt-3 text-base font-semibold text-foreground sm:text-lg">
                {active.output.label}
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Parsed",
                  "Validated",
                  "Posted to ledger",
                ].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.35 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {step}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
