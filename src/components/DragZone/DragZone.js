import React, { useState } from "react";
import FileIcon from "../../images/file.png";

const DragZone = ({ images, setImages }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const filesToUpload = Array.prototype.slice.call(e.dataTransfer.files);
      console.log(filesToUpload);
      setImages([...images, ...filesToUpload]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const filesToUpload = Array.prototype.slice.call(e.target.files);
      setImages([...images, ...filesToUpload]);
    }
  };
  return (
    <form
      id="form-file-upload"
      className="relative text-center rounded-[30px] bg-lightGray"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="file"
        id="input-file-upload"
        className="hidden"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={`${
          dragActive ? "drag-active" : ""
        } flex h-full w-full items-center justify-center border-[3px] border-dashed border-lightPurple rounded-[30px]`}
      >
        <div className="mt-[80px] flex flex-col items-center px-[22px]">
          <img src={FileIcon} alt="drag" className="mb-[12px]" />
          <span className="text-black1 font-poppins font-normal text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] mb-[10px] md:mb-[5px]">
            Seleziona dalla Galleria o{" "}
            <span className="text-lightPurple">dai File</span>
          </span>
          <span className="text-[20px] leading-[30px] font-medium font-poppins text-black1 ">
            Solo Immagini in formato PNG
          </span>
          <span className="font-poppins font-bold text-black1 text-[20px] leading-[30px] mb-[79px]">
            Max 5 MB
          </span>
          <div className="flex items-center space-x-4 w-full justify-start mb-[10px]">
            {images?.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt="uploaded"
                key={index}
                className="h-[50px] w-[50px] object-contain"
              />
            ))}
          </div>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          className="absolute w-full h-full rounded-sm top-0 left-0 right-0 bottom-0"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default DragZone;
