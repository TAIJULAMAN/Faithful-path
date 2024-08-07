import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import Dua from "../../pages/Dua/Dua";
import Quran from "../../pages/Quran/Quran";
import Hadith from "../../pages/Hadith/Hadith";
import Namaz from "../../pages/Namaz/Namaz";
import Sunnah from "../../pages/Sunnah/Sunnah";
import Roja from "../../pages/Roja/Roja";
import Blog from "../../pages/Blog/Blog";
import Imaniat from "../../components/Dua/Imaniat/Imaniat";
import BeforeDeath from "../../components/Dua/BeforeDeath/BeforeDeath";
import Food from "../../components/Dua/Food/Food";
import Pak from "../../components/Dua/Pak/Pak";
import Sleep from "../../components/Dua/Sleep/Sleep";
import Tour from "../../components/Dua/Tour/Tour";
import Society from "../../components/Dua/Society/Society";
import Parents from "../../components/Dua/Parents/Parents";
import Sajj from "../../components/Dua/Sajj/Sajj";
import Healthy from "../../components/Dua/Healthy/Healthy";
import Bipod from "../../components/Dua/Bipod/Bipod";
import Voy from "../../components/Dua/Voy/Voy";
import Storm from "../../components/Dua/Storm/Storm";
import Durud from "../../components/Dua/Durud/Durud";
import Istigfar from "../../components/Dua/Istigfar/Istigfar";
import Rabbana from "../../components/Dua/Rabbana/Rabbana";
import AllahHumma from "../../components/Dua/AllahHumma/AllahHumma";
import Azan from "../../components/Dua/Azan/Azan";
import Ozu from "../../components/Dua/Ozu/Ozu";
import Mosjid from "../../components/Dua/Mosjid/Mosjid";
import InNamaz from "../../components/Dua/InNamaz/InNamaz";
import OutNamaz from "../../components/Dua/OutNamaz/OutNamaz";
import Ramadan from "../../components/Dua/Ramadan/Ramadan";
import Hajj from "../../components/Dua/Hajj/Hajj";
import Eid from "../../components/Dua/Eid/Eid";
import Loan from "../../components/Dua/Loan/Loan";
import Basa from "../../components/Dua/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dua",
        element: <Dua />,
      },
      {
        path: "/quran",
        element: <Quran />,
      },
      {
        path: "/hadith",
        element: <Hadith />,
      },
      {
        path: "/namaz",
        element: <Namaz />,
      },
      {
        path: "/sunnah",
        element: <Sunnah />,
      },
      {
        path: "/roja",
        element: <Roja />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/imaniat",
        element: <Imaniat />,
      },
      {
        path: "/before",
        element: <BeforeDeath />,
      },
      {
        path: "/basa",
        element: <Basa/>
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/pak",
        element: <Pak />,
      },
      {
        path: "/sleep",
        element: <Sleep />,
      },
      {
        path: "/tour",
        element: <Tour />,
      },
      {
        path: "/parent",
        element: <Parents />,
      },
      {
        path: "/society",
        element: <Society />,
      },
      {
        path: "/sajj",
        element: <Sajj />,
      },
      {
        path: "/healthy",
        element: <Healthy />,
      },
      {
        path: "/bipod",
        element: <Bipod />,
      },
      {
        path: "/voy",
        element: <Voy />,
      },
      {
        path: "/storm",
        element: <Storm />,
      },
      {
        path: "/durud",
        element: <Durud />,
      },
      {
        path: "/istigfar",
        element: <Istigfar />,
      },
      {
        path: "/rabbana",
        element: <Rabbana />,
      },
      {
        path: "/allah",
        element: <AllahHumma />,
      },
      {
        path: "/azan",
        element: <Azan />,
      },
      {
        path: "/ozu",
        element: <Ozu />,
      },
      {
        path: "/mosjid",
        element: <Mosjid />,
      },
      {
        path: "/inamaz",
        element: <InNamaz />,
      },
      {
        path: "/onamaz",
        element: <OutNamaz />,
      },
      {
        path: "/ramadan",
        element: <Ramadan />,
      },
      {
        path: "/hajj",
        element: <Hajj />,
      },
      {
        path: "/eid",
        element: <Eid />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
    ],
  },
]);
// {
//     path: "/order/:category",
//     // element:<OrderPage></OrderPage>
//     element:<DuaDetails></DuaDetails>
// },
