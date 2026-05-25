// ============================================================
// VIDEO CONFIGURATION
// Replace the placeholder URLs with your actual YouTube embed URLs
// Format: https://www.youtube.com/embed/VIDEO_ID
// ============================================================

export const VIDEOS = {
  // Your personal introduction video
  intro: {
    title: "About Me — Introduction",
    description: "A quick introduction about who I am, my background, and what I'm passionate about.",
    embedUrl: "YOUR_INTRO_VIDEO_ID", // Replace with: https://www.youtube.com/embed/XXXXX
  },
  // TradeStream Engine project walkthrough
  projectDemo: {
    title: "TradeStream Engine — Project Walkthrough",
    description: "A detailed walkthrough of the architecture, features, and technical decisions behind the TradeStream Engine.",
    embedUrl: "YOUR_PROJECT_DEMO_VIDEO_ID", // Replace with: https://www.youtube.com/embed/XXXXX
  },
};

// Helper to check if a video URL is configured (not a placeholder)
export function isVideoConfigured(embedUrl: string): boolean {
  return (
    embedUrl.startsWith("https://www.youtube.com/embed/") &&
    !embedUrl.includes("YOUR_")
  );
}
