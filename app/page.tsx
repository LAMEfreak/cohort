import SelectPeriodButton from "@/components/charts/SelectPeriodButton";
import UploadForm from "@/components/forms/UploadForm";
import ToggleTheme from "@/components/navigation/navbar/ToggleTheme";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Home</h1>
      <div className="ml-4">
        <ToggleTheme />{" "}
      </div>
      <div className="ml-20">
        <UploadForm />
      </div>
      <div className="ml-40 mt-20">
        <SelectPeriodButton />
      </div>
    </>
  );
}
