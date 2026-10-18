"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import type { Lang } from "../_data/projects";

const KEY = "lang";
const EVENT = "langchange";
// Fallback when storage is unavailable (private mode, blocked site data…).
let memory: Lang = "EN";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

function getSnapshot(): Lang {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "EN" || stored === "FR") return stored;
  } catch {}
  return memory;
}

/** Language shared by every page, remembered across navigations. */
export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => "EN" as Lang);

  const setLang = useCallback((next: Lang) => {
    memory = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  return [lang, setLang] as const;
}
