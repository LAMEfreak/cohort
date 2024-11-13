"use client";

import { LoaderCircle, Upload } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { handleFileProcess } from "@/lib/actions";

const UploadForm = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Append file to FormData to process server side. Return message to display
  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("csvFile", file);

      const result = await handleFileProcess(formData);
      setLoading(false);
      setMessage(result?.message);
    }
  };

  return (
    <form>
      {/* file input is hidden and triggered by the button using useRef */}
      <input
        type="file"
        accept=".csv"
        name="csvFile"
        id="csvFile"
        ref={fileInputRef}
        className="hidden"
        aria-label="Upload CSV file"
        onChange={uploadFile}
      />
      <Button
        type="button"
        disabled={loading}
        onClick={() => {
          setMessage("");
          fileInputRef.current?.click();
        }}
      >
        {loading ? (
          <>
            <LoaderCircle className="size-4 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Upload className="size-4" />
            <span>Upload CSV</span>
          </>
        )}
      </Button>{" "}
      {message && <p className="mt-2 text-xs">{message}</p>}
    </form>
  );
};

export default UploadForm;
