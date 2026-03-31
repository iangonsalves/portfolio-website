import Image from "next/image";

type ImageModalProps = {
  image: { src: string; alt: string } | null;
  prefix: string;
  onClose: () => void;
};

export default function ImageModal({ image, prefix, onClose }: ImageModalProps) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div
        className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={prefix + image.src}
          alt={image.alt}
          fill
          className="object-contain p-4"
          sizes="100vw"
        />
        <button
          className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-lg font-bold text-white"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
