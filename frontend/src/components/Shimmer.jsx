const Shimmer = () => {
  return (
    <div className="relative h-screen text-white animate-pulse">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 -z-50" />
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 ">
        <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute top-0 left-0 w-full h-full -z-10" />
        <div className="max-w-2xl">
          <div className="h-16 bg-gray-700 rounded mb-4"></div>
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
        <div className="flex mt-8">
          <div className="h-12 w-32 bg-gray-700 rounded mr-4"></div>
          <div className="h-12 w-32 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
