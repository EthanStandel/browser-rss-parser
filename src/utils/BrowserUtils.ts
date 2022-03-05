export const BrowserUtils = {
  scrollToTop: () => {
    try {
      document.documentElement.scrollTo({ top: 0 });
    } catch {
      console.warn("Failed to scroll to top of header, using fallback scrolling method");

      try {
        document.querySelector("h3")!.scrollIntoView();
      } catch {
        console.log("Fallback scroll failed");
      }
    }
  }
}