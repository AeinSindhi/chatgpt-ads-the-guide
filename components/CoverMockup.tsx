export default function CoverMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute inset-x-8 bottom-4 h-10 rounded-full bg-black/20 blur-2xl" />

      <img
        src="images/chatgpt-ads-cover-3d.png"
        alt="3D mockup of the ChatGPT Ads: The Complete Beginner-to-Launch Guide ebook"
        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.22)]"
      />
    </div>
  );
}
