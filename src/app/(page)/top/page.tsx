import { Desktop } from "./_desktop";
import { Mobile } from "./_mobile";

export default function Home() {
  /* === return === */
  return (
    <div className="mx-auto h-[calc(100svh-7rem-1.5625rem-3rem)] w-full max-w-5xl px-4 md:h-[calc(100svh-4rem-1.5625rem-4rem)]">
      <Mobile />
      <Desktop />
    </div>
  );
}
