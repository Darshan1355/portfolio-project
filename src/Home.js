
import PageWrapper from "./PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col justify-between">
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-2 sm:px-4 lg:px-8">
          <div className="h-16" />

          {/* Big Full-Width Card */}
          <div className="w-full bg-gray-900 rounded-2xl shadow-[0_0_20px_#808080] p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
            
            {/* Text Section */}
            <div className="flex-1 flex flex-col items-start text-left">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400">
                Hello
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 py-4">
                I am Darshan, a
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold " 
                    style={{ textShadow: "0 0 8px #c82909, 0 0 12px #c82909, 0 0 16px #c82909"}}>
                Software Designer
              </p>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center">
              <img
                src="/prof1.png"
                alt="My PNG"
                className="w-36 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-auto rounded-2xl shadow-lg"
              />
              <p
                className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-yellow-300"
                style={{ WebkitTextStroke: "0.3px red" }}
              >
                Darshan Amane
              </p>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default Home;
