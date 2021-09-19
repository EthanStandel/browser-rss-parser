export const BrowserUtils = {
  scrollToTop: () => {
    try {
      document.scrollingElement!.scrollTo({top: 35})
    } catch {
      console.warn("Failed to scroll to top, no scrollingElement on document");
    }
  }
}