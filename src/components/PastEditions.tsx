import Image from 'next/image';
import Link from 'next/link';
import { PAST_EDITIONS, editionLabel } from '@/config/editions';

/** Thumbnails from the 2024 gallery that ships with the 2025 archive. */
const previewPhotos = [
  '/gallery/bitconf-2024/1-0639_resized.jpg',
  '/gallery/bitconf-2024/1-0812_resized.jpg',
  '/gallery/bitconf-2024/1-1231_resized.jpg',
  '/gallery/bitconf-2024/1-1286_resized.jpg',
];

export default function PastEditions() {
  if (PAST_EDITIONS.length === 0) return null;

  return (
    <section id="past-editions" className="py-20 bg-bitconf-surface-1 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-bitconf-turquoise/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Past editions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Speakers, schedules and photos from every BitConf so far — still online, still browsable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PAST_EDITIONS.map((past) => (
            <Link
              key={past.year}
              href={past.href}
              className="group block bg-bitconf-surface-2/80 border border-bitconf-primary/20 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-bitconf-primary/50 hover:shadow-2xl hover:shadow-bitconf-primary/10"
            >
              <div className="grid grid-cols-4 gap-px bg-bitconf-primary/10">
                {previewPhotos.map((src) => (
                  <div key={src} className="relative aspect-4/3 overflow-hidden bg-bitconf-dark">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 25vw, 12vw"
                      className="object-cover opacity-70 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="p-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="text-3xl font-bold text-white group-hover:text-bitconf-primary transition-colors">
                    BitConf {past.year}
                  </h3>
                  <span className="text-sm text-bitconf-accent font-semibold">{editionLabel(past)}</span>
                </div>
                <p className="text-gray-300 mb-6">
                  {past.date}
                  {past.venue && ` · ${past.venue.name}`}
                </p>
                <span className="inline-flex items-center gap-2 text-bitconf-turquoise font-semibold">
                  Browse the {past.year} archive
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
