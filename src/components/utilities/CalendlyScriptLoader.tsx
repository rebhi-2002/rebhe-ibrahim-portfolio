"use client";
import { useEffect } from "react";

const CalendlyScriptLoader = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    head?.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (head?.contains(link)) {
        head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default CalendlyScriptLoader;