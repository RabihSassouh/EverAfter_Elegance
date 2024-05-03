import React from 'react';

function HeroBanner() {
  return (
    <div className="relative text-white text-center h-60" style={{ backgroundImage: "url('../../banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div >
        <h1 className="text-5xl font-semibold font-poppins mb-5">Bringing Dreams To Life</h1>
      </div>
    </div>
  );
}

export default HeroBanner;