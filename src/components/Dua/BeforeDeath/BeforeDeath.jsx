import React from "react";

function BeforeDeath() {
  const death = [
    {
      id: 1,
      name: "মুমূর্ষু ব্যক্তিকে পড়ে শোনানো",
      arabic: "لَا اِلٰهَ اِلَّا اللهُ مُحَمَّدُ رَّسُوْلُ اللهِ",
      bangla: "লাা ইলাহা ইল্লাল্লাাহু মুহাম্মাদুর রসূলুল্লাহ।",
      meaning:
        "একমাত্র আল্লাহ তা’আলা ব্যতীত অন্য কোনো মাবুদ নেই এবং মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম আল্লাহ তা’আলার রাসুল।",
    },
    {
      id: 2,
      name: "মুত্যু নিকটবর্তী অনুভব হলে পড়ার দু‘আ",
      arabic:
        "ٰاَللّٰهُمَّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاَلْحِقْنِيْ بِالرَّفِيْقِ الْاَعْلٰى",
      bangla: "আল্লাাহুম্মাগফিরলী ওয়ার হামনী ওয়া আলহিক্বনী বিররফী-ক্বিল আ‘লাা",
      meaning:
        " হে আল্লাহ! আপনি আমাকে ক্ষমা করে দিন এবং আমার উপর রহমত ও দয়া বর্ষণ করুন এবং আমাকে রফিকে আ’লা (নবী ও সালেহগণ)-এর সাথে মিলিত করে দিন।",
    },
    {
      id: 3,
      name: "রুহ্‌ বের হচ্ছে অনুভব হলে পড়বে",
      arabic:
        "اَللّٰهُمَّ اَعِنِّيْ عَلٰى غَمَرَاتِ الْمَوْتِ وَ سَكَرَاتِ الْمَوْتِ",
      bangla:
        " আল্লাাহুম্মা আ‘ইন্নী ‘আলাা গমারাা তিল মাউতি ওয়া সাকারাা তিল মাঊত।",
      meaning:
        "হে আল্লাহ! আপনি মৃত্যুর কষ্ট ও মৃত্যুর যন্ত্রণায় আমাকে সাহায্য করুন।",
    },
    {
      id: 4,
      name: " কবর যিয়ারতের দু‘আ",
      arabic:
        "اَلسَّلَامُ عَلَيْكُمْ يَا أَهْلَ القُبُورِ، يَغْفِرُ اللهُ لَنَا وَلَكُمْ، أَنْتُمْ سَلَفُنَا، وَنَحْنُ بِالأَثَرِ",
      bangla:
        " আসসালাামু ‘আলাইকুম ইয়াা আহলাল ক্বুবূরি ইয়াগফিরুল্লাাহু লানাা ওয়ালাকুম, আনতুম সালাফুনাা ওয়া নাহনু বিল আসার।",
      meaning:
        "হে কবরবাসীগণ! আপনাদের প্রতি শান্তি বর্ষিত হোক। আল্লাহ তা‘আলা আমাদেরকে এবং আপনাদেরকে ক্ষমা করে দিন। আপনারা আমাদের পূর্বে গমনকারী। আমরাও আপনাদের পিছনে পিছনে আসছি।",
    },
    {
      id: 5,
      name: "কবরে মুর্দাকে ডান কাত করে রাখার সময়",
      arabic: "بِاسْمِ اللهِ وَعَلٰى مِلَّةِ رَسُوْلِ اللهِ ﷺ",
      bangla: "বিসমিল্লাাহি ওয়া ‘আলাা মিল্লাতি রসূলিল্লাাহ।",
      meaning:
        "আল্লাহ তা‘আলার নামের সাথে এবং রাসূলুল্লাহ সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম-এর মিল্লাতের (সুন্নাতের) উপর (আমরা একে দাফন করছি)।",
    },
    {
      id: 6,
      name: "মৃত ব্যক্তির জন্য দু‘আ",
      arabic:
        "اللَّهُمَّ عَبْدُكَ وَابْنُ أَمَتِكَ اِحْتَاجَ إِلَى رَحْمَتِكَ، وَأَنْتَ غَنِيٌّ عَنْ عَذَابِهِ، إِنْ كَانَ مُحْسِناً فَزِدْ فِي حَسَنَاتِهِ، وَإِنْ كَانَ مُسِيئاً فَتَجَاوَزْ عَنْهُ",
      bangla:
        "আল্লা-হুম্মা ‘আবদুকা, ওয়াবনু আমাতিকা, এহতাজা ইলা রাহমাতিকা, ওয়া আনতা গানিয়্যুন ‘আন ‘আযা-বিহি, ইন কা-না মুহসিনান ফাযিদ ফী হাসানা-তিহি, ওয়া ইনকা-না মুসীআন ফা তাজা-ওয়ায ‘আনহু",
      meaning:
        "হে আল্লাহ, আপনার এক দাস, আর এক দাসীর পুত্র, আপনার অনুগ্রহের মুখাপেক্ষী, আপনি তাকে শাস্তি দেওয়া থেকে অমুখাপেক্ষী। যদি সে নেককার বান্দা হয়, তবে তার সওয়াব আরও বাড়িয়ে দিন, আর যদি বদকার বান্দা হয়, তবে তার অপরাধকর্ম এড়িয়ে যান।",
    },
    {
      id: 7,
      name: "শোকার্তদের সান্ত্বনায়",
      arabic:
        "إِنَّ للَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمَّى... فَلْتَصْبِرْ وَلْتَحْتَسِبْ",
      bangla:
        " ইন্না লিল্লা-হি মা আখাযা, ওয়ালাহু মা আ‘তা, ওয়া কুল্লু শাই’ইন ‘ইনদাহু বিআজালিম মুসাম্মা, ফালতাসবির ওয়াল তাহতাসিব",
      meaning:
        " নিশ্চয় যা নিয়ে গেছেন আল্লাহ্‌ তা তাঁরই, আর যা কিছু প্রদান করেছেন তাও তাঁর। তাঁর কাছে সব কিছুর একটি নির্দিষ্ট সময় রয়েছে। কাজেই সবর করা এবং সওয়াবের আশা করা উচিৎ",
    },
  ];
  return (
    <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
      <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
        মৃত্যুর পূর্বাপর
      </h1>
      <ul className="space-y-2">
        {death.map((data, id) => (
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
  );
}

export default BeforeDeath;
