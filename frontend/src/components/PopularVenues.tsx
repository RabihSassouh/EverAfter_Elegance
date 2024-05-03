function PopularVenues() {
  const venues = [
    {
      name: "Blanc De Chene",
      location: "Brittany",
      image: "../../BlancDeChene.jpg",
    },
    { name: "Byblos Su Mer", location: "Jbeil", image: "../../ByblosSuMer.jpg" },
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
        
      </div>
    </div>
  );
}
export default PopularVenues;
