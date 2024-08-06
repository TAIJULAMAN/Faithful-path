import React from "react";

function Imaniat() {
  const imaniat = [
    {
      id: 1,
      name: "কালিমায়ে তাইয়্যিবাহ",
      arabic: "لَا اِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ",
      bangla: " লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ।",
      meaning:
        " আল্লাহ্‌ ব্যতীত ইবাদত বন্দেগীর উপযুক্ত আর কেহই নাই। হযরত মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম আল্লাহ্‌র প্রেরিত রাসূল।",
    },
    {
      id: 2,
      name: " ঈমান রক্ষার জন্য দু‘আ",
      arabic:
        "رَبَّنَا لَا تُزِغۡ قُلُوۡبَنَا بَعۡدَ اِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا مِنۡ لَّدُنۡكَ رَحۡمَةً ‌ ۚ اِنَّكَ اَنۡتَ الۡوَهَّابُ ",
      bangla:
        " রাব্বানা লা তুযিগ্ ক্বুলুবানা বা’দা ইয্ হাদায়তানা ওয়া হাব্‌লানা মিল্লা দুনকা রাহমাহ্ ইন্নাকা আংতাল ওয়াহ্‌হাব। ",
      meaning:
        " হে আমাদের প্রতিপালক! সরল পথ-প্রদর্শনের পর তুমি আমাদের অন্তরকে সত্য লঙ্ঘন বা বক্র করো না এবং তোমার নিকট থেকে আমাদেরকে করুণা দান কর। নিশ্চয়ই তুমি মহা দাতা।",
    },
    {
      id: 3,
      name: "শিরক থেকে বাঁচার জন্যে (প্রতিদিন তিনবার)",
      arabic:
        "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ ",
      bangla:
        "আল্লাহুম্মা ইন্নি আউজুবিকা আন উশরিকা বিকা ওআনা আ’লাম ওয়া আস্তাগফিরুকা লিমা লা আ’লাম। ",
      meaning:
        "হে আল্লাহ! আমি আপনার কাছে আশ্রয় প্রার্থনা করছি জ্ঞাতসারে আপনার সাথে কাউকে শরিক করা থেকে । আর আপনার নিকট ক্ষমা প্রার্থনা করছি ঐ সকল বিষয়ে, যা আমি জানি না। ",
    },
    {
      id: 4,
      name: "দ্বীনের উপর অবিচল থাকার দু‘আ",
      arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِيْ عَلٰى دِيْنِكَ ",
      bangla: "ইয়া মুকাল্লিবাল ক্বুলু-বি ছাব্বিত ক্বলবী আ’লা দ্বী-নিকা ",
      meaning:
        "হে অন্তরের পরিবর্তনকারী! আমার অন্তরকে তুমি তোমার দ্বীনের উপর প্রতিষ্ঠিত রাখ। ",
    },
    {
      id: 5,
      name: "হকের উপর অবিচল থাকার দু‘আ",
      arabic:
        "اَللّٰهُمَّ اَرِنَا الْحَقَّ حَقًّا وَّارْزُقْنَا اتِّبَاعَهٗ، وَاَرِنَا الْبَاطِلَ بَاطِلًا وَّارْزُقْنَا اجْتِنَابَهٗ.",
      bangla:
        "আল্লাহুম্মা আরিনাল হাক্কা হাক্কাও ওয়ারজুকনাত্তিবায়াহু ওয়া আরিনাল বাতিলা বাতিলাও ওয়ারজুকনাজতিনাবাহু",

      meaning:
        "অর্থঃ হে আল্লাহ, আপনি হককে হক হিসেবে আমাদের দেখান এবং এর অনুসরণের তাওফীক দিন, আর বাতিলকে বাতিল হিসেবে দেখান এবং এটাকে পরিত্যাগ করার তাওফীক দিন। ",
    },
    {
      id: 6,
      name: " ঈমান নবায়নের দু‘আ",
      arabic: "اَللّٰهُمَّ جَدِّدِ الْإِيْمَانَ فِي قُلُوْبِنَا ",
      bangla: "আল্লাহুম্মা জাদ্দিদিল ঈমানা ফি কুলুবিনা",
      meaning: "হে আল্লাহ, তুমি আমাদের হৃদয়ের ইমানকে নবায়ন করে দাও।",
    },
  ];
  return (
    <>
      <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
          ঈমানিয়্যাত
        </h1>
        <ul className="space-y-2">
          {imaniat.map((data, id) => (
            <li
              key={id}
              className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
            >
              <h1 className="text-xl font-bold mb-2 mt-2">{data.name}</h1>
              <div className="border-[1px] border-[#98dad9]"></div>
              <p className="text-center font-bold py-5">{data.arabic}</p>
              <p>
                <span className="font-bold">উচ্চারণঃ </span>
                {data.bangla}
              </p>
              <p>
                <span className="font-bold">অর্থঃ </span>
                {data.meaning}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Imaniat;
