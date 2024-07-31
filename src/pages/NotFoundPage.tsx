import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <>
      <div className="grid min-h-screen w-full">
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">Oops!</h3>
            <p className="text-balance text-muted-foreground mb-5">
              Page not found!
            </p>
            <NavLink to="/">
              <Button variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
