import React from "react";
import {
    Vehicle,
    VehicleType,
    VehicleFilter,
    vehicleTypeTitles
} from "../data/vehicles/contracts";
import { VehicleApi } from "../data/vehicles/api";
import { IhandleSearch } from "../App";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};
export const Filter:React.FC<{onSearch:IhandleSearch}>=(props)=>{

    let list=[];
    let prop: any;
    for (prop in vehicleTypeTitles) {
        list.push(<option>{VehicleType[prop]}</option>);
    }
    list.push(<option>Все</option>)

    const inputTitleEvent= (evt:any) =>{
        initialFilter.title=evt.target.value;
        props.onSearch(VehicleApi.search(initialFilter));
    }

    const inputTypeEvent= (evt:any) =>{
        if(evt.target.value==="Все"){initialFilter.type=null}
        else{initialFilter.type=Number(VehicleType[evt.target.value]);}
        props.onSearch(VehicleApi.search(initialFilter));

    }

    return(
        <div>
            <label>
                Введите название
                <input type="text" onChange={inputTitleEvent}/>
            </label>
            <label>
                Выберите тип
                <select onChange={inputTypeEvent} id="cars">
                    {list}
                </select>
            </label>
        </div>);
}
