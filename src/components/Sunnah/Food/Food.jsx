import React from "react";

function Food() {
  const food = [
    {
      id: 1,
      desc: "উভয় হাত কবজি পর্যন্ত ধোয়া।",
    },
    {
      id: 2,
      desc: "দস্তরখান বিছিয়ে খানা খাওয়া।",
    },
    {
      id: 3,
      desc: "খানার শুরুতে উচ্চস্বরে বিসমিল্লাহ পড়া।",
    },
    {
      id: 4,
      desc: "ডান হাত দিয়ে খাওয়া।",
    },
    {
      id: 5,
      desc: "কয়েকজন মিলে খাওয়ার সময় খাদ্য এক ধরনের হলে নিজের সম্মুখভাগ হতে খাওয়া।",
    },
    {
      id: 6,
      desc: "মাঝখান থেকে না খাওয়া।",
    },
    {
      id: 7,
      desc: "হেলান দিয়ে বসে না খাওয়া।",
    },
    {
      id: 8,
      desc: "খাদ্যের ত্রুটি বের না করা।",
    },
    {
      id: 9,
      desc: "খাদ্যের কোন অংশ পড়ে গেলে উঠিয়ে প্রয়োজনে পরিস্কার করে খাওয়া।",
    },
    {
      id: 10,
      desc: "কয়েকজন মিলে খাবার খেতে বসলে নিজের খাওয়া শেষ হলেও অপরের খানা শেষ না হওয়া পর্যন্ত বসে থাকা।",
    },
    {
      id: 11,
      desc: "খানা শেষে দস্তরখান উঠানো পর্যন্ত নিজে না উঠা।",
    },
    {
      id: 12,
      desc: "আহার শেষে খানার পাত্র সমূহ আঙ্গুল দ্বারা ভালোভাবে থেকে পরিষ্কার করে খাওয়া।",
    },
    {
      id: 13,
      desc: "খানা খেয়ে উভয় হাত ধোয়া।",
    },
    {
      id: 14,
      desc: "কুলি করে মুখ পরিষ্কার করা।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {food.map((data, id) => (
            <li
              key={id}
              className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
            >
              <p>{data.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Food;