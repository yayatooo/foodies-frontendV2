import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAddressStore from "../store/addressStore";

const AddAdress = () => {
  const { addresses, setAddresses } = useAddressStore();
  const [newAddress, setNewAddress] = useState({
    name: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
  });
  const navigate = useNavigate();

  const handleAddAddress = async () => {
    try {
      // Your API call to add the new address
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/adress",
        newAddress,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;

      setAddresses((prevAddresses) => [...prevAddresses, data.address]);
      navigate("/profile");
      console.log("input Succes", newAddress);
    } catch (error) {
      console.error("Error adding new address:", error);
    }
  };

  const handleChange = (e, key) => {
    const { name, value } = e.target;
    // console.log(`Updating ${name} to: ${value}`);
    setNewAddress((prev) => ({ ...prev, ...{ [key]: value } }));
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAddress();
  };

  console.log(addresses);

  return (
    <div>
      <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add address</h1>
        <p className="text-gray-600 mt-6">
          Silahkan Tambahkan Alamat Tujuan Anda
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Nama
              </label>
              <input
                type="text"
                value={newAddress.name}
                onChange={(e) => handleChange(e, "name")}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Penerima"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Kelurahan
              </label>
              <input
                type="text"
                value={newAddress.kelurahan}
                onChange={(e) => handleChange(e, "kelurahan")}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Kelurahan"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Kecamatan
              </label>
              <input
                type="text"
                value={newAddress.kecamatan}
                onChange={(e) => handleChange(e, "kecamatan")}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Kecamatan"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Kabupaten
              </label>
              <input
                type="text"
                value={newAddress.kabupaten}
                onChange={(e) => handleChange(e, "kabupaten")}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan nama Kabupaten"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Provinsi
              </label>
              <input
                type="text"
                value={newAddress.provinsi}
                onChange={(e) => handleChange(e, "provinsi")}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Provinsi"
              />
            </div>
          </div>

          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-primary text-white rounded hover:bg-yellow-600 "
            >
              Save
            </button>

            <Link
              to="/profile"
              className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdress;
