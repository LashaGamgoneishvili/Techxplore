"use client";
import Image from "next/image";
import { useState } from "react";
import profileImage from "../../public/Assets/logo512.png";
const profile =
  "https://cdn.usegalileo.ai/stability/5b9c7820-c161-462e-b5e9-6f693c8e49fb.png";

export default function UserProfile() {
  const [profilePhoto, setProfilePhoto] = useState(profile);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full  mt-8 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Acme Co.</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            View as public
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 relative mb-4">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <label
          htmlFor="profilePhotoUpload"
          className="cursor-pointer text-blue-500 hover:underline"
        >
          Upload a photo
        </label>
        <input
          id="profilePhotoUpload"
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </div>
      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-xl font-semibold mb-4">Profile details</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Image
              src={profilePhoto}
              alt="Company"
              width={24}
              height={24}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Acme Co.</p>
              <p className="text-gray-500">Technology company, San Francisco</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={profilePhoto}
              alt="Type"
              width={24}
              height={24}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Company type</p>
              <p className="text-gray-500">Private</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={profilePhoto}
              alt="Industry"
              width={24}
              height={24}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Industry</p>
              <p className="text-gray-500">Technology</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={profilePhoto}
              alt="Location"
              width={24}
              height={24}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-500">San Francisco</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={profilePhoto}
              alt="Bio"
              width={24}
              height={24}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Bio</p>
              <p className="text-gray-500">Technology company</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={profilePhoto}
              alt="Visibility"
              width={24}
              height={24}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Visibility</p>
              <p className="text-gray-500">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
