import Image from 'next/image';
import type { BrookPhoto } from '@/lib/brookPhotos';

type Props = {
  photos: BrookPhoto[];
  className?: string;
};

export default function BrookPhotoGallery({ photos, className = '' }: Props) {
  return (
    <ul
      className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {photos.map((photo) => (
        <li key={photo.src} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="relative aspect-[4/5] w-full bg-gray-100">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <p className="border-t border-gray-100 px-3 py-2 text-center text-sm text-gray-600">
            {photo.caption}
          </p>
        </li>
      ))}
    </ul>
  );
}
