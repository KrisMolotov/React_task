import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};
export type IhandleSearch =(term:Vehicle[])=>void
export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const handleSearch:IhandleSearch = (term) =>setVehicles(term);
    useEffect(() => {
        const data = VehicleApi.search(initialFilter);
        setVehicles(data);
    }, []);

    return (
        <>
            <Filter onSearch={handleSearch}/>
            <Table vehicles={vehicles} />
        </>
    );
}
