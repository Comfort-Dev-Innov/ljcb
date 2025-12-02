import Header from "@/components/layout/Header";

export default function LandingPage() {
  return (
    <div>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 py-[40px]">
          <Header />
          <div className="h-[900px]">

          </div>
        </div>
      </div>
    </div>
  );
}
