import React from "react";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="pt-24">
          <div className="text-text border-text p-2">
            <h1 className="text-3xl font-medium">Welcome to HarmonyHub!</h1>
          </div>
        </div>
        <div className="ml-24 mr-24 flex flex-col items-center justify-center gap-10">
          <div className="text-center">
            <p>
              Tell us your favorite song, and HarmonyHub will provide you with
              similar song recommendations! By analyzing the song you enter, we
              aim to understand your music preferences. We will then offer you
              new songs to expand your music discovery. Enter your song and
              enjoy personalized music recommendations!
            </p>
          </div>
          <div className="w-[30rem] h-[3rem]">
            <input
              className="w-full h-full rounded-full p-6 border border-link focus:outline-none focus:ring-0"
              type="text"
              placeholder="Please Enter a Music Your Like..."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
