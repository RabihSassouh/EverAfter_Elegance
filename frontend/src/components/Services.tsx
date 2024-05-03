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
      description: `Explore our real weddings section for heartwarming love stories that will inspire your own big day. From simple celebrations to grand affairs, each one is filled with love and laughter. Get lost in the beautiful moments captured in every photo and let them spark ideas for your own special day!`,
    },
    {
      image: "../../offer3.jpg",
      title: "Marry Me",
      link: "",
      description: `Where love stories begin and dreams come true. Whether you're popping the question or planning heartfelt vows, here you'll find all the inspiration you need for unforgettable moments of love and commitment. Let's make your journey to 'I do' truly special.`,
    },
    {
      image: "../../offer4.jpg",
      title: "Prewedding Stories",
      link: "",
      description: `Explore our 'Pre-Wedding Stories' section, where love comes alive before the vows. From the first sparks to cherished memories, discover heartwarming tales that echo the beauty of your own journey.`,
    },
    {
      image: "../../offer5.jpg",
      title: "Latest",
      link: "",
      description: `Keep up with the latest in weddings with our 'Latest' section. From trendy dresses to fresh decor ideas, we've got you covered with all the newest trends and tips. Don't miss out – stay in the loop for your dream day!`,
    },
  ];
  return (
    <div className="py-12 px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold font-poppins text-center mb-9">
          What we offer?
        </h2>
        <div className="flex flex-col gap-14">
          {ourServices.map((ourService, i) => (
            <div
              className={`group flex gap-10 md:gap-28 items-center h-72 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              key={i}
            >
              <img
                src={ourService.image}
                alt={ourService.title}
                className="w-[40%] h-full object-cover rounded-lg group-hover:shadow-sm transition duration-300 ease-in-out"
              />
              <div className="w-[60%] h-full flex flex-col gap-5 justify-center">
                <h3 className="text-2xl font-medium font-poppins">
                  {ourService.title}
                </h3>
                <p className="text text-[#494949] font-poppins text-left">
                  {ourService.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
