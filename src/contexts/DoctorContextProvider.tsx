import React, { useState, FC } from "react";
import { DoctorContext } from "./DoctorContext";
import { InterfaceDoctor } from "./DoctorContext";

type Props = {
    children?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
};

const DoctorContextProvider: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ children }: any) =>{
const doctors = [
        {
            id : 0,
            profilePicture: "assets/pictures/saschafirtina.jpg",
            name: 'Brian J. McGuinness',
            specialty: 'Colon and Rectal surgery',
            city: "Walnut Creek",
            phone: "925-274-9004"
        },
        {
            id : 1,
            profilePicture: "assets/pictures/marin.ivankovic.jpg",
            name: 'Joshua Logan',
            specialty: 'Urology',
            city: "Walnut Creek",
            phone: "925-274-9004"
        },
        {
            id : 2,
            profilePicture: "assets/pictures/bluemaex.jpg",
            name: 'David H.Lin ',
            specialty: 'Gastroentoroly',
            city: "Danville",
            phone: "925-274-9004"
        },
        {
            id : 3,
            profilePicture: "assets/pictures/kanyewest.jpg",
            name: 'Mark Musco',
            specialty: 'Family Medecine',
            city: "San Ramon",
            phone: "925-274-9004"
        },
        {
            id : 4,
            profilePicture: "assets/pictures/jxhannamadeleine.jpg",
            name: 'Alex A. Asian',
            specialty: 'Gastroentoroly ',
            city: "Antioch  | Concord",
            phone: "925-274-000"
        },
        {
            id : 5,
            profilePicture: "assets/pictures/beyonce.jpg",
            name: 'Philip C. Yee',
            specialty: 'Gastroentoroly',
            city: "San Ramon | Livermore",
            phone: "925-274-000"
        }
    ];
    const value = {
        doctors
    };

    return (
        <DoctorContext.Provider value={value}>
            {children}
        </DoctorContext.Provider>
    )
};

export default DoctorContextProvider;
