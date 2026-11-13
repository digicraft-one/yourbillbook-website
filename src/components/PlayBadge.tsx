import Image from "next/image";
import { site } from "@/content/site";

type Props = {
  className?: string;
};

export function PlayBadge({ className = "" }: Props) {
  return (
    <a
      href={site.playUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition hover:opacity-90 ${className}`}
      aria-label="Get YourBillBook on Google Play"
    >
      <Image
        src="/badges/google-play.png"
        alt="Get it on Google Play"
        width={200}
        height={78}
        className="h-[58px] w-auto"
      />
    </a>
  );
}
