import React from "react";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

// Professional components for displaying pros and cons
export const ProsCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="my-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
    <div className="flex items-center gap-3">
      <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-400" />
      <h4 className="font-bold text-lg my-2 text-green-300">{title}</h4>
    </div>
    <div className="mt-2 pl-9 text-green-200/80">{children}</div>
  </div>
);

export const ConsCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="my-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
    <div className="flex items-center gap-3">
      <XCircle className="h-6 w-6 flex-shrink-0 text-red-400" />
      <h4 className="font-bold text-lg my-2 text-red-300">{title}</h4>
    </div>
    <div className="mt-2 pl-9 text-red-200/80">{children}</div>
  </div>
);

// Professional components for displaying important notes and warnings
export const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 flex items-start gap-4 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
    <Info className="h-5 w-5 flex-shrink-0 text-blue-400 mt-1" />
    <div className="text-sm text-blue-200">{children}</div>
  </div>
);

export const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 flex items-start gap-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-400 mt-1" />
    <div className="text-sm text-yellow-200">{children}</div>
  </div>
);