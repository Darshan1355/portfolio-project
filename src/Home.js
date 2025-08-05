import Footer from "./Footer";
import PageWrapper from "./PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col justify-between">
        {/* Main content */}
        <div>
          <div className="h-16" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-12 ">
             {/* Text Section */}
             <div className="w-full lg:text-left text-left max-w-md mx-auto lg:mx-0  ">
                 <p className="text-5xl sm:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>
                    Hello
                 </p>
                 <p className="text-2xl sm:text-3xl font-bold text-white py-4" style={{ WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>
                      I am Darshan,
                 </p>
                 <p className="text-2xl sm:text-3xl text-white font-bold" >
                    <b className="text-white" style={{ WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>a{' '}</b>
                      <span className="text-3xl sm:text-4xl text-yellow-400 font-bold" style={{ WebkitTextStroke: '0.5px red' ,WebkitTextFillColor: 'yellow-400'}}>
                         Software Designer
                     </span>
                 </p>
             </div>

             {/* Image Section */}
             <div className="flex flex-col items-center py-6">
                  <img
                    src="/prof1.png"
                    alt="My PNG"
                    className="w-40 sm:w-60 md:w-72 lg:w-80 xl:max-w-96 h-auto p-0 rounded-2xl"
                  />
                  <p className="mt-4 text-xl sm:text-2xl font-bold text-yellow-300" style={{ WebkitTextStroke: '0.2px red' }}>
                     Darshan Amane
                  </p>
             </div>
            </div>

        </div>

        {/* Footer */}
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Home;
