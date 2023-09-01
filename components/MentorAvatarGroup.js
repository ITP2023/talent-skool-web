import Image from "next/image";

/**
 * 
 * @param {{mentorImages: string[]}} param0 
 * @returns 
 */
export default function MentorsAvatarGroup({mentorImages}) {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {
        mentorImages.map((p, i) => (
          <Image
          width={10}
          height={10}
          key={i}
          src={p}
          alt="mentorbadge"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        ))
      }
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-gray-50 text-gray-600 text-xs font-medium">
        100+
      </div>
    </div>
  );
}
