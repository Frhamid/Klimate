import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCw } from "lucide-react";
import React from "react";

const DashboardWeather = () => {
  const { coordinates, isLoading, error, getLocation } = useGeolocation();
  console.log("coordinates", coordinates);

  const handleRefresh = () => {
    if (coordinates) {
      //reload weather data
    }
  };

  return (
    <div className="space-y-4">
      {/* Favourite cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          className="cursor-pointer"
          onClick={handleRefresh}
          //   disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* current and hourly weather */}
    </div>
  );
};

export default DashboardWeather;
