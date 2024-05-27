import { generateUploadURL } from "@/pages/api/s3";
import { useState } from "react";

const initialState = { status: "", message: "" };

export default function UploadImage() {
  const [state, setState] = useState(initialState);

  const uploadImage = async (e: any) => {
    e.preventDefault();
    const fileInput = e.target.elements.file;
    if (!fileInput.files || fileInput.files.length === 0) {
      setState({ status: "error", message: "No file selected" });
      return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const url = await generateUploadURL();

    try {
      const res = await fetch("url", {
        method: "PUT", // Use PUT for uploading files to S3
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setState({ status: "success", message: "File uploaded successfully" });
    } catch (error) {
      console.error("Upload error: ", error);
      setState({ status: "error", message: "Failed upload" });
    }
  };

  return (
    <div>
      <form onSubmit={uploadImage}>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="">
          Upload file
        </button>
      </form>
      {state?.status && (
        <div>
          <p>{state?.message}</p>
        </div>
      )}
    </div>
  );
}
