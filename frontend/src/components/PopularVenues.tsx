function PopularVenues() {
  const venues = [
    {
      name: "Blanc De Chene",
      location: "Brittany",
      image: "../../BlancDeChene.jpg",
    },
    {
      name: "Byblos Su Mer",
      location: "Jbeil",
      image: "../../ByblosSuMer.jpg",
    },
    {
      name: "Nuit Blanche",
      location: "Mar Roukoz",
      image: "../../NuitBlanche.jpg",
    },
    { name: "Blanchic", location: "Badabont", image: "../../Blanchic.jpg" },
  ];

  return (
    <div className="py-12 px-12">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-semibold font-poppins mb-10 text-center">
          Popular Venues
        </h2>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-between gap-10 md:gap-0">
          {venues.map((venue, i) => (
            <div
              className="h-80 w-64 relative max-w-xs rounded-lg overflow-hidden hover:shadow-md"
              key={i}
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#FFFFFFCC] opacity-80 text-white p-4">
                <h3 className="text-lg font-semibold font-poppins text-center text-black">
                  {venue.name}
                </h3>
                <p className="font-poppins text-center text-sm text-[#3A4850] font-semibold">
                  {venue.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PopularVenues;
