import React, { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"; // Import the modular SDK storage functions
import Layout from "../components/Layout";

function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const storage = getStorage(); // Get the storage instance
      const imageRef = ref(storage, ""); // Reference to the 'images' folder

      try {
        const result = await listAll(imageRef);

        const urls = await Promise.all(
          result.items.map(async (item) => {
            return await getDownloadURL(item);
          })
        );

        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImageUrls(); // Call the async function immediately
  }, []);

  return (
    <Layout>
      {" "}
      <div className="container px-4 md:px-0">
        <h1 className="mt-8 font-bold text-2xl max-w-7xl mx-auto">
          Results for <span className="capitalize">{"Images"}</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-7xl mx-auto">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="relative mb-6 before:content-[''] before:absolute before:inset-0"
            >
              <img className="w-full h-full shadow-md" src={url} alt={index} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
