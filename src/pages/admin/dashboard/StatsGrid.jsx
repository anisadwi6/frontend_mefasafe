import React from "react";
import { ArrowRight, Hospital, Stethoscope, User, Wallet } from "lucide-react";

function StatsGrid() {
    const stats = [
        {
            title: "Total Users",
            value: "1.500",
            icon: User,
            trend : "up",
            color: "from-blue-500 to-indigo-600",
            bgcolor: "bg-blue-50 dark:bg-blue-900/20",
            textColor: "text-blue-600 dark:text-blue-400",
        },
        {
            title: "Total Rumah Sakit",
            value: "50",
            icon: Hospital,
            color: "from-purple-500 to-pink-600",
            bgcolor: "bg-purple-50 dark:bg-purple-900/20",
            textColor: "text-purple-600 dark:text-purple-400",
        },
        {
            title: "Total Konsultasi",
            value: "250",
            icon: Stethoscope,
            color: "from-red-500 to-orange-600",
            bgcolor: "bg-red-50 dark:bg-orange-900/20",
            textColor: "text-red-600 dark:text-orange-400",
        },
        {
            title: "Total Asuransi",
            value: "1.000",
            trend : "up",
            icon: Wallet,
            color: "from-emerald-500 to-yellow-600",
            bgcolor: "bg-emerald-50 dark:bg-yellow-900/20",
            textColor: "text-emerald-600 dark:text-yellow-400",
        },
    ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4">
        {stats.map((stats, index) =>{
            return (
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6
        border border-slate-200/50 dark:border-slate-900/20 transition-all duration-300 group" key={index}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{stats.title}</p>
                    <p className="text-3xl font-bold text-slate-800 dark:text-white">{stats.value}</p>
                    {/* <div className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4"/>
                        <span>Stats Change</span>
                        <span className="text-sm text-slate-500 dark:slate-400">vs Last</span>
                    </div> */}
                </div>
                <div className={`p-3 rounded-xl ${stats.bgcolor} group-hover:scale-110 transition-all duration-300`}>
                    {<stats.icon className={`w-6 h-6 ${stats.textColor}`}/>}
                </div>
            </div>
            {/* progressbar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-100`} style={{width: stats.trend === "up" ? "75%" : "45%"}}></div>
            </div>
        </div>
        )})}
    </div>
  );
}

export default StatsGrid; 