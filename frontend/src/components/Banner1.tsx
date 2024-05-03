
function HeroBanner() {
  return (
    <div className="relative text-white text-center h-60" style={{ backgroundImage: "url('../../banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold font-poppins mb-5">Bringing Dreams To Life</h1>
        <p >Timeless Elegance and Romance</p>
      </div>
    </div>
  );
}

export default HeroBanner;