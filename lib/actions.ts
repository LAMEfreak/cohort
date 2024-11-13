"use server";

export async function handleFileProcess(formData: FormData) {
  const file = formData.get("csvFile") as File;
  console.log(file);

  // Validate file type to be .csv
  if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
    return { success: false, message: "Please upload a CSV file" };
  }

  // ============================================================
  // TODO: Add validation of file content using csv parser library
  // ============================================================

  // At the moment, we'll just simulate a successful upload with processing time
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    success: true,
    message: "Success",
  };
}
