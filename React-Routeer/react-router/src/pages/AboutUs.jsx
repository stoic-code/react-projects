import Aboutus from "../components/Aboutus";
import Navbar from "../components/Navbar";

function AboutUs() {
  return (
    <div>
      <Navbar />

      <p className="text-2xl font-bold text-center text-red-800">
        AboutUS-Page
      </p>
      <Aboutus />
    </div>
  );
}

export default AboutUs;
