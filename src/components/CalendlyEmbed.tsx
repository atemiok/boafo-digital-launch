import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CalendlyEmbedProps {
  url: string;
  minHeight?: number;
}

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
  }
}

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

export function CalendlyEmbed({ url, minHeight }: CalendlyEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }

    function init() {
      if (ref.current && window.Calendly) {
        ref.current.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: ref.current });
        setReady(true);
      }
    }

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, [url]);

  return (
    <div className="relative h-full w-full">
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Loading calendar…
          </span>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <div
          ref={ref}
          className="calendly-inline-widget rounded-xl overflow-hidden border border-border bg-background h-full w-full"
          style={minHeight ? { minWidth: 320, height: minHeight } : { minWidth: 320, height: "100%" }}
          data-auto-load="false"
        />
      </motion.div>
    </div>
  );
}
