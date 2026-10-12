import React from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

export default function DismissableAlert({ type, msg, onClose }) {
  const isSuccess = type === "success";

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border backdrop-blur-md transition-all duration-300 ${
        isSuccess
          ? "bg-emerald-950/60 border-emerald-500/30 text-emerald-200"
          : "bg-rose-950/60 border-rose-500/30 text-rose-200"
      }`}
      role="alert"
    >
      <div className="flex items-center gap-3">
        {isSuccess ? (
          <FaCheckCircle className="text-emerald-400 text-lg flex-shrink-0" />
        ) : (
          <FaExclamationCircle className="text-rose-400 text-lg flex-shrink-0" />
        )}
        <p className="text-sm font-medium">{msg}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        aria-label="Close alert"
      >
        <FaTimes className="text-sm" />
      </button>
    </div>
  );
}
