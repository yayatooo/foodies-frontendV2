import React, { useState, useEffect } from "react";

const EditAddressModal = ({
  isOpen,
  onClose,
  onUpdateAddress,
  initialAddress,
}) => {
  const [editedAddress, setEditedAddress] = useState({ ...initialAddress });

  console.log(initialAddress);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAddress(editedAddress);
    onClose();
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? "" : "hidden"} overflow-y-auto`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={handleSubmit}>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={editedAddress.name}
                    onChange={(e) =>
                      setEditedAddress({
                        ...editedAddress,
                        name: e.target.value,
                      })
                    }
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Kelurahan
                  </label>
                  <input
                    type="text"
                    value={editedAddress.kelurahan}
                    onChange={(e) =>
                      setEditedAddress({
                        ...editedAddress,
                        kelurahan: e.target.value,
                      })
                    }
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Kecamatan
                  </label>
                  <input
                    type="text"
                    value={editedAddress.kecamatan}
                    onChange={(e) =>
                      setEditedAddress({
                        ...editedAddress,
                        kecamatan: e.target.value,
                      })
                    }
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Kabupaten
                  </label>
                  <input
                    type="text"
                    value={editedAddress.kabupaten}
                    onChange={(e) =>
                      setEditedAddress({
                        ...editedAddress,
                        kabupaten: e.target.value,
                      })
                    }
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    value={editedAddress.provinsi}
                    onChange={(e) =>
                      setEditedAddress({
                        ...editedAddress,
                        provinsi: e.target.value,
                      })
                    }
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  />
                </div>
              </div>
              <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Update Address
                </button>
                <button
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddressModal;
