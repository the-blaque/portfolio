import { useState } from "react";

// Import images
import image1 from "../img/1-mrblaq.png";
import image2 from "../img/8-DSC04278.jpg";
import image3 from "../img/IMG_6994.png";
import image4 from "../img/DSC01010-Edit.png";
import image5 from "../img/dun.jpg";
import image6 from "../img/IMG_4988.png";



interface Image {
  src: string;
  alt: string;
  title?: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: Image[] = [
    { src: image1, alt: "Mr. Ajayi", title: "Mr. Ajayi" },
    { src: image2, alt: "Ms. Coker", title: "Ms. Coker" },
    { src: image3, alt: "Table Mt.", title: "Table Mt." },
    { src: image4, alt: "Ms. T. Ajayi", title: "Ms. T. Ajayi" },
    { src: image5, alt: "Ms. D. Ajayi", title: "Ms. D. Ajayi" },
    { src: image6, alt: "Cold Lake, AB", title: "Cold Lake, AB" },
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold mt-8 mb-2">Gallery</h2>
      <p className="mb-6">A collection of my favorite photographs and projects.</p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-custom-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
