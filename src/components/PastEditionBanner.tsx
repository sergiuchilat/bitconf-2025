import Link from 'next/link';
import { CURRENT_EDITION, Edition } from '@/config/editions';

interface PastEditionBannerProps {
  edition: Edition;
}

/** Sits above the header on an archived edition so visitors know it is not the live event. */
export default function PastEditionBanner({ edition }: PastEditionBannerProps) {
  return (
    <div className="bg-bitconf-accent/10 border-b border-bitconf-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center text-sm">
        <span className="flex items-center gap-2 text-bitconf-accent font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          You&apos;re viewing the BitConf {edition.year} archive.
        </span>
        <span className="text-gray-300">
          This edition took place on {edition.date}.
        </span>
        <Link
          href={CURRENT_EDITION.href}
          className="text-bitconf-turquoise font-semibold hover:text-white transition-colors underline underline-offset-4"
        >
          Go to BitConf {CURRENT_EDITION.year} →
        </Link>
      </div>
    </div>
  );
}
