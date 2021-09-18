export const BrowserUtils = {
  scrollToTop: () => {
    try {
      document.scrollingElement!.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      console.warn("Failed to scroll to top, no scrollingElement on document");
    }
  }
}