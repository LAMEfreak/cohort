import ToggleTheme from "@/components/navigation/navbar/ToggleTheme";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Home</h1>
      <div className="ml-4">
        <ToggleTheme />{" "}
      </div>
    </>
  );
}
