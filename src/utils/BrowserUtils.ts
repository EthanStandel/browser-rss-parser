export const BrowserUtils = {
  scrollToTop: () => {
    try {
      document.querySelector("h3")!.scrollIntoView();
      document.scrollingElement!.scrollTop -= document.querySelector("header")!.offsetHeight
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