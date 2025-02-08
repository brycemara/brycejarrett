import TechLine from "@/components/TechLine";
import GalleryGrid from "@/components/GalleryGrid";

// images
// TODO: find a better way to import these
import hawaii from "@/public/images/hawaii.jpeg";
import egypt from "@/public/images/egypt.jpeg";
import nice from "@/public/images/nice.jpeg";
import mexico from "@/public/images/mexico.jpeg";
import copenhagen from "@/public/images/copenhagen.jpeg";
import hike from "@/public/images/hike.jpeg";
import london from "@/public/images/london.jpeg";
import japanFriends from "@/public/images/japanFriends.jpeg";
import oktober from "@/public/images/oktober.jpeg";
import flowerOne from "@/public/images/flowerOne.jpeg";
import flowerTwo from "@/public/images/flowerTwo.jpeg";
import flowerThree from "@/public/images/flowerThree.jpeg";
import flowerFour from "@/public/images/flowerFour.jpeg";
import flowerFive from "@/public/images/flowerFive.jpeg";
import flowerSix from "@/public/images/flowerSix.jpeg";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";

const travelImages = [
  {
    src: egypt,
    title: "Hiding from the Heat in Aswan, Egypt",
  },
  {
    src: nice,
    title: "Soaking in the Sun on the French Rivera",
  },
  {
    src: mexico,
    title: "Enjoying margaritas in Akumal, Mexico",
  },
  {
    src: hike,
    title: "Hiking in Denver - her favorite activity",
  },
  {
    src: japanFriends,
    title: "Exploring Tokyo with friends",
  },
  {
    src: london,
    title: "Catching a last minute flight to London, UK",
  },
  {
    src: oktober,
    title: "Oktober Fest in Munich, Germany",
  },
  {
    src: copenhagen,
    title: "Dinner at Noma in Copenhagen, Denmark",
  },
  {
    src: hawaii,
    title: "Splish spalshing in Kauai",
  },
];

const flowerImages = [
  {
    src: flowerOne,
    title: "",
  },
  {
    src: flowerTwo,
    title: "",
  },
  {
    src: flowerThree,
    title: "",
  },

  {
    src: flowerFour,
    title: "",
  },
  {
    src: flowerFive,
    title: "",
  },
  {
    src: flowerSix,
    title: "",
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      {/* landing */}
      <Landing />
      {/* timeline */}
      <Timeline />
      {/* projects */}
      <Projects />
      {/* tech */}
      <div id={"tech"} className="w-full py-6">
        <h2 className="section-header py-6">TECHNOLOGY</h2>
        <TechLine />
      </div>
      {/* travel */}
      <div id="travel" className="py-6 flex flex-col items-center">
        <h2 className="self-start section-header">TRAVEL</h2>
        <div className="w-full flex items-center justify-center">
          <div className="w-full">
            <GalleryGrid images={travelImages} cols={4} />
          </div>
        </div>
      </div>
      {/* flowers */}
      {/* <div id={"flowers"} className="py-6 flex flex-col items-center">
        <h2 className="self-start section-header">FLOWERS</h2>
        <p className="self-start mx-48 text-lg py-4 mx-48">
          Bryce grew up in a house that was always filled with plants and
          flowers. Her mom never came home from the grocery store without a
          beautiful bouquet. She in turn has brought that habit to her own
          home(s) and each week will buy a variety of flowers to create a new
          boquet. She typically wings it but has become more interested in
          developing skills as a florist. Below are some recents.
        </p>
        <div className="w-full">
          <GalleryGrid images={flowerImages} cols={3} />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
