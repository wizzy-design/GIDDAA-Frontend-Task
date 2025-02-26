"use client";

import EstateHeader from "@/components/estates/EstateHeader";
import React from "react";
import { HiPlus } from "react-icons/hi";

export default function CreateEstate() {
  return (
    <div className="min-h-screen">
      <EstateHeader pageTitle="Creating Estate" subPageTitle="Create Estate" />

      <div className="bg-white p-6 rounded-lg mx-auto">
        <ImageUploader />
        <EstateForm />
      </div>

      <div className="w-full bg-[#F0F0F0] py-5 fixed bottom-0">
        <div className="w-full  flex translate-x-[34%] gap-3">
          <button className="px-4 py-2 rounded-[100px] font-bold border text-[#346633] border-solid border-[#346633]">
            Cancel
          </button>
          <button className="px-4 py-2  bg-[#346633] text-white font-bold rounded-[100px]">
            Create Estate
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageUploader() {
  return (
    <div className="border-2 border-dashed p-6 rounded-lg flex flex-col items-center mb-6 gap-2">
      <div className="bg-[linear-gradient(0deg,#335F32,#335F32),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] p-1 rounded-xl">
        <HiPlus size={40} className="text-white" />
      </div>
      <p className="capitalize font-bold text-[#335F32] text-xs">
        add estate images
      </p>
    </div>
  );
}

function EstateForm() {
  return (
    <form className="grid grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium">
          Name
          <span className="text-[#E40000]">*</span>
        </label>
        <input
          type="text"
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          State
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
          required
        >
          {["Germany", "USA"].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          City
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
          required
        >
          {["Berlin", "Hamburg"].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          Address
          <span className="text-[#E40000]">*</span>
        </label>
        <input
          type="text"
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Popular Landmark</label>
        <input
          type="text"
          placeholder="What's the asking price of this property?"
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Estate Land (In Hectares)
          <span className="text-[#E40000]">*</span>
        </label>
        <input
          type="text"
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Completion Status
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
          required
        >
          {["Completed", "Ongoing"].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Video URL</label>
        <input
          type="text"
          placeholder="Add a Youtube Video Link"
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Number of Floors</label>
        <input
          type="number"
          className="w-full py-2 px-3 border rounded-[100px] mt-1 text-xs"
        />
      </div>

      <div className="col-span-4 ">
        <label className="block text-sm font-medium">
          Description
          <span className="text-[#E40000]">*</span>
        </label>
        <textarea
          className="w-full py-2 px-3 border rounded-lg mt-1 text-xs"
          rows={3}
          required
        ></textarea>
      </div>
    </form>
  );
}
