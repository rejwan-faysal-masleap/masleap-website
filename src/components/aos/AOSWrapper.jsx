"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // only animate once
    });
  }, []);

  return <>{children}</>;
}