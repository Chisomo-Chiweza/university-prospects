import DarkPage from "../utilities/DarkPage";
import HomeBar from "../utilities/HomeBar";
import HomeButton from "../utilities/HomeButton";

function Home() {
  return (
    <DarkPage>

      <HomeBar />
      <div className="flex flex-col justify-center">

        <h1 className="mx-auto mb-20 text-7xl font-bold text-ivory">
          See your top programs.
        </h1>
        <HomeButton />

      </div>
      
    </DarkPage>
  );
}

export default Home;
