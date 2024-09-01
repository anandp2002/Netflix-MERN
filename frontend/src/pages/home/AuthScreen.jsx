import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Footer from '../../components/Footer';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/signup?email=' + email);
  };
  return (
    <div className="hero-bg relative ">
      {/* Navbar */}
      <header className="min-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={'/'}>
          <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </Link>
        <Link
          to={'/login'}
          className="text-white bg-red-600 hover:bg-red-700 py-1 px-2 rounded"
        >
          sign In
        </Link>
      </header>

      {/* Hero section */}
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-2xl mb-4">Starts at ₹149. Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch ? Enter your email to create or restart your membership{' '}
        </p>
        <form
          className="flex flex-col md:flex-row gap-4 w-1/2"
          onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            placeholder="Email address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="bg-red-600 hover:bg-red-700 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started
            <ChevronRight className="size-8" />
          </button>
        </form>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 1 st section */}
      <div className="bg-black py-10 text-white">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-center px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          {/* Right side */}
          <div className="flex-1 relative">
            <img src="/tv.png" alt="TV" className="mt-4 relative z-20" />
            <video
              playsInline
              autoPlay={true}
              muted
              loop
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 2 nd section */}
      <div className="py-10 bg-black text-white">
        <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto items-center justify-center px-4 md:px-2">
          {/* left side */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="stranger things lg"
                className="mt-4"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="stranger-things-sm.png"
                  alt="stranger things sm"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading...
                    </span>
                  </div>

                  <img
                    src="download-icon.gif"
                    alt="dwnld icon"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 3 rd section */}
      <div className="bg-black py-10 text-white">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-center px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream Unlimited movies and TV shows on your phone, tablet, laptop
              and TV.
            </p>
          </div>

          {/* Right side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/device-pile.png"
              alt="device-pile"
              className="mt-4 relative z-20"
            />
            <video
              playsInline
              autoPlay={true}
              muted
              loop
              className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%] "
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* 4th section*/}
      <div className="py-10 bg-black text-white">
        <div
          className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row
           px-4 md:px-2
        "
        >
          {/* left */}
          <div className="flex-1 relative">
            <img src="/kids.png" alt="Enjoy on your TV" className="mt-4" />
          </div>
          {/* right */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Create profiles for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthScreen;
