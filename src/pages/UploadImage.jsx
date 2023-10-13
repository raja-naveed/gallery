import React, { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage"; // Import the modular SDK storage functions
import Layout from "../components/Layout";

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleUpload = async () => {
    if (image) {
      const storage = getStorage(); // Get the storage instance
      const storageRef = ref(storage, image.name); // Create a storage reference for the image

      try {
        await uploadBytes(storageRef, image); // Upload the image
        console.log("Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("No image selected.");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4 border rounded p-2"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600"
          >
            Upload Image
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UploadImage;
