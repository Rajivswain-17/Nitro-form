"use client";

import dynamic from "next/dynamic";

const FormAnalytics = dynamic(
  () => import("~/components/form-analytics").then((m) => ({ default: m.FormAnalytics })),
  {
    ssr: false,
    loading: () => (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#5865f2] border-t-transparent rounded-full" />
      </div>
    ),
  }
);

export default function AnalyticsPage() {
  return <FormAnalytics />;
}

