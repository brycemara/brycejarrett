import Image from "next/image";

export default function GalleryGrid({ images, cols }: any) {
  return (
    <div
      className={`mx-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-4 pt-6`}
    >
      {images.map((img: any) => (
        <div key={img.src} className="max-w-auto">
          <div className="w-full relative pt-[100%]">
            <Image
              src={img.src}
              alt="profile"
              objectFit="cover"
              fill
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  );
}
