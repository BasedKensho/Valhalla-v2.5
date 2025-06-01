import { BorderBeam } from "@/components/ui/border-beam";

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
      <div className="w-full h-full bg-black flex items-center justify-center rounded-lg overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1089404942?h=dc386a8b93&badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{ width: "100%", height: "100%" }}
          title="$30m Pitch"
          allowFullScreen
        />
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}