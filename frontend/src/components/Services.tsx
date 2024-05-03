function Services() {
  const ourServices = [
    {
      image: "../../offer1.jpg",
      title: "Planning Advice",
      link: "",
      description: `Planning your Wedding is like painting a masterpiece – It's all about choosing the right
                    colors and adding special touches. Don't forget to cherish the little moments along the way –
                    They are the ones that make your big day truly magical!`,
    },
  ];
  return (
    <div className="py-12 px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold font-poppins text-center mb-9">
          What we offer?
        </h2>
      </div>
    </div>
  );
}

export default Services;
