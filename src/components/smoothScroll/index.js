import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SmoothScroll() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on touch-only mobile devices and if user prefers reduced motion
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse) and (hover: none)").matches;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    // Temporarily set scrollBehavior to auto for smooth RAF interpolation
    document.documentElement.style.scrollBehavior = "auto";

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isAnimating = false;
    let rafId = null;

    // Smooth inertia lerp factor (0.085 gives responsive yet silky momentum)
    const ease = 0.085;

    // Helper to check if event occurred inside an independently scrollable container
    const isInsideScrollable = (element) => {
      let el = element;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        if (
          (overflowY === "auto" || overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight
        ) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    const update = () => {
      currentY += (targetY - currentY) * ease;

      if (Math.abs(targetY - currentY) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, Math.round(currentY));
        isAnimating = false;
        return;
      }

      window.scrollTo(0, Math.round(currentY));
      rafId = requestAnimationFrame(update);
    };

    const handleWheel = (e) => {
      // Don't intercept when scrolling within modals, dropdowns, textareas, or with ctrl (zoom)
      if (
        e.ctrlKey ||
        isInsideScrollable(e.target) ||
        e.target.tagName === "TEXTAREA" ||
        e.target.tagName === "INPUT" ||
        e.target.isContentEditable
      ) {
        return;
      }

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      let delta = e.deltaY;
      if (e.deltaMode === 1) {
        delta *= 40; // Firefox line mode
      } else if (e.deltaMode === 2) {
        delta *= window.innerHeight; // Page mode
      }

      targetY += delta;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(update);
      }
    };

    // Keep position in sync with native scroll events (dragging scrollbar, keys, etc.)
    const handleScroll = () => {
      if (!isAnimating) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    // Smooth navigation for all anchor clicks (#id, /#id)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetId = null;
      if (href.startsWith("#") && href.length > 1) {
        targetId = href.slice(1);
      } else if (
        href.startsWith("/#") &&
        href.length > 2 &&
        (window.location.pathname === "/" || window.location.pathname === "")
      ) {
        targetId = href.slice(2);
      }

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          const targetOffset =
            targetElement.getBoundingClientRect().top + window.scrollY - 80;
          const maxScroll = Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight
          );

          targetY = Math.max(0, Math.min(targetOffset, maxScroll));

          if (!isAnimating) {
            isAnimating = true;
            rafId = requestAnimationFrame(update);
          }
        }
      }
    };

    const handleRouteChange = () => {
      currentY = window.scrollY;
      targetY = window.scrollY;
      isAnimating = false;
      if (rafId) cancelAnimationFrame(rafId);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleAnchorClick, false);
    router?.events?.on("routeChangeComplete", handleRouteChange);

    return () => {
      document.documentElement.style.scrollBehavior = "smooth";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
      router?.events?.off("routeChangeComplete", handleRouteChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [router]);

  return null;
}
