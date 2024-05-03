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
    {
        image: "../../offer2.jpg",    
        title: "Real Weddings",
        link: "",
        description:  `Explore our real weddings section for heartwarming love stories that will inspire your own big day. From simple celebrations to grand affairs, each one is filled with love and laughter. Get lost in the beautiful moments captured in every photo and let them spark ideas for your own special day!`   
    }
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
