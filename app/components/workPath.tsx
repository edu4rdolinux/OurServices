"use client";

import { useRouter } from "next/navigation";

const WorkPath = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/work');
  };

  return (
    <h1
      onClick={handleRedirect}
      className="text-white relative group cursor-pointer"
    >
      <span
        className="absolute left-0 bottom-0 w-full h-[4px] bg-white rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      />
      Work With Us
    </h1>
  );
};

export default WorkPath;
