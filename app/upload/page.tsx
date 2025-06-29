import React from 'react'
import { DataProvider } from "@/contexts/data-context";
import DataIngestion from "@/components/data-ingestion";
export default function UploadPage() {
  return (
    <DataProvider>
      
    <div className=" min-h-screen p-1 transition-colors bg-white text-black">
      <div className="  space-y-8">
        
        {/* Data Ingestion Component */}
        <DataIngestion />
      </div>
    </div>
    </DataProvider>
  );
}