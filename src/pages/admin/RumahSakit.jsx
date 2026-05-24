import React from "react";
import { useState } from "react";
import CRUD_RS from "./Modal";
import { Search, Plus, Edit2, Trash2 } from "lucide-react";

export default function RumahSakit() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-7xl mx-auto">
      {/* header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          DAFTAR RUMAH SAKIT
        </h1>
      </div>

      {/* search bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name"
              className="!w-full !pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button onClick={()=> setShowModal(true)} className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
            <Plus size={20} />
            <span>New</span>
          </button>
        </div>
      </div>

      {/* table */}
      <div className="bg-white rounded-lg shadow-md overflow-hiddenen">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Nama
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Edit
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Jenis
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Alamat Lengkap
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr className="px-6 py-12 text-center text-gray-500">
                <td colSpan="6">Tidak Ada Catatan yang Ditemukan</td>
              </tr>

              {/* else */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  1
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  RS Medika Lestari
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  RS Umum
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  Jalan Kalpataru
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center justify-center gap-2">
                    <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium">
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 transition-all text-sm font-medium">
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* crud rs */}
      {showModal && <CRUD_RS onClose={() => setShowModal(false)} />}
    </div>

  );
}
