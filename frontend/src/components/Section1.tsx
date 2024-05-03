function Section1() {
  const serviceList = [
    {
      index: 1,
      title: "Destination Weddings",
      icon: "/DestinationWeddings.png",
    },
    {
      index: 2,
      title: "Inspiration",
      icon: "/Inspiration.png",
    },
    {
      index: 3,
      title: "Honeymoon & Travel Wedding",
      icon: "/Honeymoon.png",
    },
  ];
  return (
    <div className="bg-white text-gray-800 py-10 px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold font-poppins mb-5">
          Ever After Elegance
        </h2>
        <p className="mb-5 font-poppins">
          We're committed to turning your dream fairytale wedding into reality,
          with careful attention to every detail. Our goal is to create a
          memorable experience that reflects your personal style, from grand
          gestures to small touches. Let us make your special day a magical
          celebration that you'll remember forever...
        </p>
        <p className="italic font-poppins font-semibold mb-10">
          So let us handle the details, while you focus on forever...
        </p>
        <div className="flex justify-center space-x-10">
          {serviceList.map((service) => (
            <div
              key={service.index}
              className="w-170 h-170 flex flex-col gap-3 p-10 items-center justify-center"
            >
              <button className="">
                <img src={service.icon} alt={service.title} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Section1;
