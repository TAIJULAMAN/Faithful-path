import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function MosjidThekeBer() {
  const item = [
    {
      id: 1,
      desc: " বিসমিল্লাহ পড়া।",
    },
    {
      id: 2,
      desc: "দরুদ শরীফ পড়া।",
    },
    {
      id: 3,
      desc: "দোয়া পড়া।",
    },
    {
      id: 4,
      desc: " বাম পা দিয়ে বের হওয়া।",
    },
    {
      id: 5,
      desc: "ডান পায়ের জুতা আগে পরিধান করা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          মসজিদ থেকে বের হওয়া
        </h1>
        <IoMdReturnRight size={40} />
      </div>
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {item.map((data, index) => (
            <li key={index} className="space-y-3 p-4 border border-[#e49733]">
              <p>{data.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MosjidThekeBer;
