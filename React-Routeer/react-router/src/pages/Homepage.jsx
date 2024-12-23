import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div className="myimg ">
      <Navbar />
      <div className=" text-white h-auto p-6 flex flex-col gap-12">
        <h2 className=" my-4 underline text-orange-500 text-xl font-bold text-center">
          Welcome to UrbanDragon Store!!!
        </h2>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <img
              className="w-90 border-solid  border-white border-8 rounded-lg"
              src="japanLifeVillage.jpg"
            ></img>
            <h2 className=" text-orange-700 gap-2 text-lg font-bold text-center">
              Japanese Traditional House
            </h2>
          </div>

          <p className="text-lg font-medium whitespace-pre-wrap">
            The Minka is the Japanese traditional architecture design that is
            characterized by tatami floors, sliding doors, and wooden verandas.
            The styles are further divided into the kyoma and the inakama, and
            each is unique. There are several types of traditional Japanese
            floor plans worth considering, so follow along as we explore them.
          </p>
        </div>
        <div className="h-[1px] w-[50%] bg-white mx-auto"></div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <img
              className="w-90 border-solid  border-white border-8 rounded-lg"
              src="japanLife.jpg"
            ></img>
            <h2 className=" text-orange-700 gap-2 text-lg font-bold text-center">
              Japanese Traditional House
            </h2>
          </div>

          <p className="text-lg font-medium whitespace-pre-wrap">
            “Minka” literally means “houses of the people,” referring to your
            typical resident farmer, fisherman, merchant, and the occasional
            low-level samurai. Geography, climate, and inhabitants’ lifestyle
            dictated the designs and materials used in the minka. In this
            article, the floor plans are according to the tatami mat or kyoma
            method.
          </p>
        </div>
        <div className="h-[1px] w-[50%] bg-white mx-auto"></div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <img
              className="w-90 border-solid  border-white border-8 rounded-lg"
              src="japan.jpg"
            ></img>
            <h2 className=" text-orange-700 gap-2 text-lg font-bold text-center">
              Japanese Traditional House
            </h2>
          </div>

          <p className="text-lg font-medium whitespace-pre-wrap">
            The tatami mat is one of the most essential features in a
            traditional Japanese house. A minka would not be a minka without it.
            People use the tatami mat for sitting, sleeping, and walking. Before
            delving into varying floor plans, it’s critical to understand the
            importance of tatami mats in a Japanese home.
          </p>
        </div>
        <div className="h-[1px] w-[50%] bg-white mx-auto"></div>
      </div>
    </div>
  );
}

export default Homepage;
