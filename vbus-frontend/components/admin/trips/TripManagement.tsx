"use client";

import { useMemo, useState } from "react";

import TripHero from "./TripHero";
import TripTable from "./TripTable";

import { trips as initialTrips } from "@/data/trips";
import { Trip } from "@/types/trips";

interface Props {
  search: string;
}

export default function TripManagement({ search }: Props) {
  const [trips, setTrips] = useState<Trip[]>(initialTrips);

  const addTrip = (newTrip: Trip) => {
    setTrips((prev) => [newTrip, ...prev]);
  };

  // filter theo mã chuyến
  const filteredTrips = useMemo(() => {
    return trips.filter((trip) =>
      trip.code.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, trips]);

  return (
    <>
      <TripHero onAddTrip={addTrip} />

      <TripTable trips={filteredTrips} />
    </>
  );
}
