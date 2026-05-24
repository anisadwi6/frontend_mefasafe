import React from "react";
import { X } from "lucide-react";

export default function Modal({onClose}) {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
                {/* header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Register New Record
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-all">
                        <X size={24}/>
                    </button>
                </div>
                {/* form */}
                <div className="p-6 space-y-4">
                    {/* nama */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nama *
                        </label>
                        <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    {/* jenis */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Jenis *
                        </label>
                        <input type="text" placeholder="Jenis Rumah Sakit" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    {/* alamat */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Alamat *
                        </label>
                        <input type="text" placeholder="Alamat Lengkap Rumah Sakit" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                </div>

                {/* button */}
                <div className="flex gap-3 p-6 border-t border-gray-200">
                    <button onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium">Cancel</button>
                    <button className="flex-1 px-4 py-2 border bg-blue-600 text-white border-gray-300 rounded-lg transition-all font-medium">Register</button>
                </div>
            </div>
        </div>
    )
}
