import Image from "next/image";

export default function Gallery({ images }: any) {
  return (
    <div className="px-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 pt-6">
      {images.map((img: any) => (
        <div>
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
