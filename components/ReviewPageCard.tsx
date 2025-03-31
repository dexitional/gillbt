import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image?: any;
  children?: React.ReactNode;
};

function ReviewPageCard({ title, image, children }: Props) {
  return (
    <div className="flex flex-col space-y-2 md:space-y-10">
      <div className="relative h-52 md:h-[26rem] w-full border rounded-xl overflow-hidden">
        <Image
          alt={title}
          src={image}
          className="w-full object-cover object-left-top bg-slate-200 rounded"
          fill
        />
      </div>
      <div
        className={`
      text-slate-600 leading-8 text-xl font-normal 
        [&_p]:mt-6 [&_p]:font-normal
        [&_h3]:mt-10 [&_h3]:font-normal [&_h3]:text-[1.35rem] [&_h3]:text-primary
        [&_a]:text-primary hover:[&_a]:text-primary/80
        [&_strong]:font-semibold
        [&>h3>strong]:font-bold [&>h3>strong]:tracking-wide [&>h3>strong]:italic [&>h3>strong]:text-[1.35rem]
        [&_em]:italic
      `}
      >
        {children}
      </div>
    </div>
  );
}

export default ReviewPageCard;
