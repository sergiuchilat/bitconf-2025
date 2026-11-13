import { Edition } from '@/config/editions';

interface PhotoAlbumProps {
  edition: Edition;
}

export default function PhotoAlbum({ edition }: PhotoAlbumProps) {
  if (!edition.photoAlbumUrl) return null;

  return (
    <section id="photo-album" className="py-20 bg-bitconf-surface-0 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bitconf-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bitconf-mint/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bc-eyebrow mb-3">BitConf {edition.year} · Photo album</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Your camera roll is <span className="text-bitconf-accent">not a private repo.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Talks, workshops, coffee breaks, blurry selfies with speakers — push them all to our
              open-source photo album. No code review: every photo merges straight to main.
            </p>
            <a
              href={edition.photoAlbumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-bitconf-accent text-bitconf-dark font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              📸 Add your photos
            </a>
            <p className="mt-6 text-sm text-bitconf-text-tertiary">
              On a laptop? Scan the QR code with your phone and upload straight from your camera roll.
            </p>
          </div>

          <a
            href={edition.photoAlbumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-md mx-auto lg:max-w-none w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-album/bitconf-2026-photo-album.jpg"
              alt={`BitConf ${edition.year} photo album: scan the QR code to add your photos`}
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full h-auto rounded-bc-lg border border-bitconf-hairline shadow-2xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
