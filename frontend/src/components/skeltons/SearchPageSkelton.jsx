const SearchPageSkeleton = () => {
  const skeletonItems = Array.from({ length: 20 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-0 sm:px-10 rounded-lg">
      {skeletonItems.map((_, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg animate-pulse">
          <div className="bg-gray-700 h-96 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
        </div>
      ))}
    </div>
  );
};

export default SearchPageSkeleton;
