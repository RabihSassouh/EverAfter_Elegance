function PopularVenues() {
    const venues = [
        { name: "Blanc De Chene", location: "Brittany", imageUrl: "../../venue1.jpg" },
        { name: "Byblos Su Mer", location: "Jbeil", imageUrl: "../../venue2.jpg" }      ];
    
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
