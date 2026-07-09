import ParticleHero from "@/components/ParticleHero";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="relative flex w-full flex-1 flex-col overflow-hidden rounded-b-[32px] md:rounded-b-[48px]">
        <ParticleHero />

        <div
          className="relative z-10 mx-auto flex w-full max-w-[2080px] flex-1 flex-col"
          style={{
            paddingLeft: "clamp(20px, 7vw, 72px)",
            paddingRight: "clamp(20px, 7vw, 72px)",
            paddingTop: "40px",
          }}
        >
          <div className="flex items-center" style={{ height: "68px" }}>
            <Nav />
          </div>
        </div>
      </header>

      <Footer contained={false} />
    </div>
  );
}
