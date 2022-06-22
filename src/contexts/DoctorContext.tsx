import * as React from "react";
export interface InterfaceDoctor {
    id: number | string;
    profilePicture: string;
    name: string;
    specialty: string;
    city: string;
    phone: string;
}
export type DoctorContextType = {
    doctors: InterfaceDoctor[];
}

export const DoctorContext = React.createContext<DoctorContextType | null>(null);