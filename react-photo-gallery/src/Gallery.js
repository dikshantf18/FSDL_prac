import React, { useState } from 'react';

const imageData = [
  { src: "/images/raspi.jpg.png", category: "mes" },
];

function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All"
    ? imageData
    : imageData.filter(img => img.category === filter);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Photo Gallery</h2>

      <div style={{ marginBottom: '20px' }}>
        {["All", "mes", "City", "Animal"].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{ margin: '5px' }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '15px'
      }}>
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.category}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
