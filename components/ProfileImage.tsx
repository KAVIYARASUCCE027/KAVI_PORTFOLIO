import Image from "next/image";

export default function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Kaviyarasu M"
      fill
      priority
      className="object-cover rounded-full"
    />
  );
}
