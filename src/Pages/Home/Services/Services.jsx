import { useEffect, useState } from "react";
import Service from './Services';
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('/ServiceData.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className="text-center m-4 mt-8">
                <h2 className="text-red-600 font-extrabold">Service</h2>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>
                the majority have suffered alteration in some form, by injected humour, <br />or randomised words which don't look even slightly believable. 
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                   services.map(service => <ServiceCard
                     key={service._id}
                     service={service}
                     ></ServiceCard>) 
                }
            </div>
        </div>
    );
};

export default Services;