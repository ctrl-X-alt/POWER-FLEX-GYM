
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://wearegurgaon.com/wp-content/uploads/2022/08/hype-the-gym-gurgaon.jpg",
    "https://images.unsplash.com/photo-1574673003591-0988647a8100?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em] mb-4">Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Iron Power <span className="text-zinc-600">Facilities</span></h3>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-3xl cursor-pointer">
            <img 
              src={img} 
              alt={`Gym ${idx}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-neon/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
               <span className="bg-black text-white px-6 py-2 rounded-full font-black uppercase text-xs tracking-widest scale-75 group-hover:scale-100 transition-transform">View Full</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
