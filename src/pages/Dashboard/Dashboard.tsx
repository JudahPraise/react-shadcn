import { useContext } from "react";
import { Button } from "@/components/ui/button";
import AlertContext, { AlertContextType } from "@/context/AlertContext";

function Dashboard() {
  const { showAlert, showAlertConfirm } = useContext(
    AlertContext
  ) as AlertContextType;

  const handleButtonClick = () => {
    showAlertConfirm({
      status: "Success",
      title: "Are you absolutely sure?",
      description:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      onConfirm: () => {
        showAlert({
          status: "success",
          message: "Record deleted successfully!",
          callback: () => {
            console.log("Deleted!");
          },
        });
      },
    });
  };

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Dashboard</h3>

          <Button onClick={handleButtonClick}>Button</Button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
