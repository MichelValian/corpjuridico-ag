"use client";

import { useEffect } from "react";

export default function RemoveBodyPadding() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.body.style.paddingRight = "0px";
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
