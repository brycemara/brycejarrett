import TechLine from "@/components/TechLine";
import Gallery from "@/components/Gallery";

// images
// TODO: find a better way to import these
import egypt from "@/public/images/egypt.jpeg";
import nice from "@/public/images/nice.jpeg";
import mexico from "@/public/images/mexico.jpeg";
import hike from "@/public/images/hike.jpeg";
import london from "@/public/images/london.jpeg";
import japanFriends from "@/public/images/japanFriends.jpeg";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";

const images = [
  {
    src: egypt,
    title: "Aswan, Egypt",
  },
  {
    src: nice,
    title: "Nice, Frace",
  },
  {
    src: mexico,
    title: "Akumal, Mexico",
  },
  {
    src: hike,
    title: "Denver, CO",
  },
  {
    src: japanFriends,
    title: "Tokyo, Japan",
  },
  {
    src: london,
    title: "London, UK",
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
      <div id={"tech"} className="w-full py-6 ">
        <h2 className="mx-48 underline underline-offset-4 py-6">TECHNOLOGY</h2>
        <TechLine />
      </div>
      {/* travel */}
      <div id={"travel"} className="py-6">
        <h2 className="mx-48 underline underline-offset-4">TRAVEL</h2>
        <Gallery images={images} />
      </div>
      {/* flowers */}
      <div id={"flowers"} className="py-6 mx-48">
        <h2 className=" underline underline-offset-4 ">FLOWERS</h2>
        <h2>Coming soon...</h2>
      </div>
    </div>
  );
};

export default Home;
