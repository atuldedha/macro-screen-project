import React, { useEffect, useState } from "react";
import DragZone from "../components/DragZone/DragZone";
import BigPhoneIcon from "../images/bigPhone.png";
import NameFieldIcon from "../images/nameFieldIcon.png";
import DescriptionFieldIcon from "../images/textDashedGray.png";
import LocationIcon from "../images/locationGray.png";
import ClockIcon from "../images/clockGray.png";
import PhoneIcon from "../images/phoneGray.png";
import ApplicationIcon1 from "../images/application1Gray.png";
import ApplicationIcon2 from "../images/application2Gray.png";
import TextIcon from "../images/textIcon.png";
import PrincipalFieldIcon from "../images/principalFieldIcon.png";
import InstagramIcon from "../images/instagramGray.png";
import FacebookIcon from "../images/facebookGray.png";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";

const Vetrina = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    wShopName: "",
    wDescription: "",
    wPhoneNumber: "",
    wFirstLinkName: "",
    wFirstLink: "",
    wSecondLinkName: "",
    wSecondLink: "",
    wInstagramLink: "",
    wFacebookLink: "",
  });

  const [formErrors, setFormErrors] = useState({
    shopNameError: "",
    descriptionError: "",
    phoneNumberError: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setFormErrors((errors) => validateForm());
    setIsSubmit(true);
  };

  const validateForm = () => {
    const error = {};
    if (formData.wShopName.length === 0) {
      error.shopNameError = "Cannot be empty";
    }

    if (formData.wDescription.length <= 0) {
      error.descriptionError = "Cannot be empty";
    }

    if (formData.wPhoneNumber.length <= 0) {
      error.phoneNumberError = "Cannot be empty";
    }

    return error;
  };

  const uploadData = () => {
    let index = 0;
    let urls = [];
    let data = {
      wShopName: formData.wShopName,
      wDescription: formData.wDescription,
      wPhoneNumber: formData.wPhoneNumber,
      wFirstLink: formData.wFirstLink,
      wFirstLinkName: formData.wFirstLinkName,
      wSecondLink: formData.wSecondLink,
      wSecondLinkName: formData.wSecondLinkName,
      wInstagramLink: formData.wInstagramLink,
      wFacebookLink: formData.wFacebookLink,
      images: [],
    };
    uploadImages(index, urls, () => {
      if (images.length > 0) {
        data = { ...data, images: urls };
      }
      console.log(data);

      updateDoc(doc(db, "Customers", "d0bqIyQ9wx0FGrRhglRh"), { ...data })
        .then(() => {
          console.log("Document updated Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const uploadImages = (index, urls, onCompleted) => {
    if (images.length > 0) {
      const file = images[index];
      var ts = String(new Date().getTime()),
        i = 0,
        out = "";

      for (i = 0; i < ts.length; i += 2) {
        out += Number(ts.substring(i, 2)).toString(36);
      }
      const fileName = "customerImage" + out;
      const storageRef = ref(storage, "customerImages/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              console.log("Default is running");
              break;
          }
        },

        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            urls.push(downloadURL);

            index++;
            if (index < images.length) {
              uploadImages(index, urls, onCompleted);
            } else {
              onCompleted();
            }
          });
        }
      );
    } else {
      onCompleted();
    }
  };

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      formErrors.constructor === Object &&
      isSubmit
    ) {
      uploadData();
    }
  }, [formErrors]);

  useEffect(() => {
    getDoc(doc(db, "Customers", "d0bqIyQ9wx0FGrRhglRh"))
      .then((document) => {
        setFormData({
          wShopName: document.data().wShopName,
          wDescription: document.data().wDescription,
          wPhoneNumber: document.data().wPhoneNumber,
          wFirstLink: document.data().wFirstLink,
          wFirstLinkName: document.data().wFirstLinkName,
          wSecondLink: document.data().wSecondLink,
          wSecondLinkName: document.data().wSecondLinkName,
          wInstagramLink: document.data().wInstagramLink,
          wFacebookLink: document.data().wFacebookLink,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-bgColor md:pt-[53px] md:pl-[288px] md:pr-[46px]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col pt-[59px] px-[22px] mb-[15px] md:pt-0 md:px-0 md:basis-2/5">
          <DragZone images={images} setImages={setImages} />
        </div>

        <div className="flex flex-col px-[22px] mb-[60px] md:basis-3/5">
          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[5px] border-[2px] border-lightPurple">
            <img
              src={NameFieldIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wShopName"
              value={formData.wShopName}
              onChange={handleChange}
              placeholder="Dani Maison"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>
          {formErrors?.shopNameError?.length > 0 ? (
            <span className="text-red-400 font-poppins font-normal text-sm">
              {formErrors.shopNameError}
            </span>
          ) : null}
          <div className="flex space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg border-[2px] border-lightPurple mb-[16px]">
            <img
              src={DescriptionFieldIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <textarea
              type="text"
              rows={4}
              name="wDescription"
              value={formData.wDescription}
              onChange={handleChange}
              placeholder="Descrizione"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>
          {formErrors?.descriptionError?.length > 0 ? (
            <span className="text-red-400 font-poppins font-normal text-sm">
              {formErrors.descriptionError}
            </span>
          ) : null}
          <div className="flex items-center space-x-[10px] bg-gray4 py-[14px] px-[12px] rounded-lg mb-[5px] border-[2px] border-lightPurple">
            <img
              src={LocationIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              placeholder="Via, Numero, Città"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="bg-lightPurple md:bg-white rounded-lg font-poppins font-bold md:font-semibold text-center w-full text-[16px] md:text-[25px] leading-[24px] md:leading-[35px] text-bgColor md:text-customBlue pt-[16px] pb-[13px] hover:cursor-pointer mb-[15px] md:border-[3px] md:border-customBlue">
            Seleziona sulla Mappa
          </div>

          <div className="flex items-center space-x-[10px] bg-gray4 py-[14px] px-[12px] rounded-lg mb-[6px] border-[2px] border-lightPurple">
            <img
              src={ClockIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              placeholder="Orari di Apertura"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="bg-lightPurple md:bg-white rounded-lg font-poppins font-bold md:font-semibold text-center w-full text-[16px] md:text-[25px] leading-[24px] md:leading-[35px] text-bgColor md:text-customBlue pt-[16px] pb-[13px] hover:cursor-pointer mb-[15px] md:border-[3px] md:border-customBlue">
            Seleziona orari di apertura
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[15px] border-[2px] border-lightPurple">
            <img
              src={PhoneIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="number"
              name="wPhoneNumber"
              value={formData.wPhoneNumber}
              onChange={handleChange}
              placeholder="Numero di Telefono"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>
          {formErrors.phoneNumberError?.length > 0 ? (
            <span className="text-red-400 font-poppins font-normal text-sm">
              {formErrors.phoneNumberError}
            </span>
          ) : null}
          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[5px] border-[2px] border-lightPurple">
            <img
              src={ApplicationIcon1}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wFirstLinkName"
              value={formData.wFirstLinkName}
              onChange={handleChange}
              placeholder="Nome del primo link principale"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[15px] border-[2px] border-lightPurple">
            <img
              src={ApplicationIcon1}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wFirstLink"
              value={formData.wFirstLink}
              onChange={handleChange}
              placeholder="Primo Link Principale"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[5px] border-[2px] border-lightPurple">
            <img
              src={ApplicationIcon2}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wSecondLinkName"
              value={formData.wSecondLinkName}
              onChange={handleChange}
              placeholder="Nome del secondo link principale"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[15px] border-[2px] border-lightPurple">
            <img
              src={ApplicationIcon2}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wSecondLink"
              value={formData.wSecondLink}
              onChange={handleChange}
              placeholder="Secondo Link Principale"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-gray4 py-[14px] px-[12px] rounded-lg mb-[5px] border-[2px] border-lightPurple">
            <img
              src={TextIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              placeholder="Testo Pulsante Principale"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[15px] border-[2px] border-lightPurple">
            <img
              src={PrincipalFieldIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              placeholder="Azione Pulsante Principale"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[5px] border-[2px] border-lightPurple">
            <img
              src={InstagramIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wInstagramLink"
              value={formData.wInstagramLink}
              onChange={handleChange}
              placeholder="Link Instagram"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>

          <div className="flex items-center space-x-[10px] bg-lightGray py-[14px] px-[12px] rounded-lg mb-[15px] border-[2px] border-lightPurple">
            <img
              src={FacebookIcon}
              alt="icon"
              className="h-[25px] w-[25px] md:w-[35px] md:h-[35px] object-contain"
            />
            <input
              type="text"
              name="wFacebookLink"
              value={formData.wFacebookLink}
              onChange={handleChange}
              placeholder="Link Facebook"
              className="flex-grow bg-inherit text-black1 font-poppins font-normal text-[14px] md:text-[25px] leading-[21px] md:leading-[35px] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="pb-[40px] md:pb-[68px] w-full flex items-center justify-start md:ml-[130px]">
        <button
          className="w-full md:w-[55%] rounded-[14px] font-poppins font-bold text-bgColor text-[16px] leading-[24px] bg-customBlue pt-[16px] pb-[13px]"
          onClick={handleSubmit}
        >
          Invia Vetrina
        </button>
      </div>
    </div>
  );
};

export default Vetrina;
