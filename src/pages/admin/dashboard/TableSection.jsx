import React from "react";
import { Ellipsis } from "lucide-react";

const recentOrders = [
  {
    id_konsul: "1101",
    id_user: "220",
    jenis: "Spesialis Dasar",
    tanggal: "2026-01-13",
    status: "completed",
  },
  {
    id_konsul: "1102",
    id_user: "221",
    jenis: "Spesialis Penunjang",
    tanggal: "2026-02-21",
    status: "completed",
  },
  {
    id_konsul: "1103",
    id_user: "222",
    jenis: "Spesialis Penunjang",
    tanggal: "2026-02-22",
    status: "cancelled",
  },
  {
    id_konsul: "1104",
    id_user: "223",
    jenis: "Spesialis Khusus",
    tanggal: "2026-03-01",
    status: "completed",
  },
  {
    id_konsul: "1105",
    id_user: "224",
    jenis: "Spesialis Dasar",
    tanggal: "2026-04-26",
    status: "pending",
  },
];
export default function TableSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };
  return (
    <div className="space-y-6">
      {/* Konsultasi */}
      <div
        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
            border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
      >
        <div className="p-6 border-b border-slate-200/50 dark:border-salte-700/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Konsultasi Hari Ini
            </h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>

          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-6 text-sm font-semibold text-slate-600">
                    ID Konsul
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-slate-600">
                    ID User
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-slate-600">
                    Jenis Konsultasi
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-slate-600">
                    Tanggal Konsultasi
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => {
                  return (
                    <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-salte-800/50 transition-colors">
                      <td className="p-4">
                        <span className="text-sm font-medium text-blue">
                          {order.id_konsul}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">
                          {order.id_user}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">
                          {order.jenis}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`text-sm text-slate-800 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}
                        >
                          {order.tanggal}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">
                          <Ellipsis className="w-4 h-4" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
