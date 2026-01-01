import React, { createContext, useState, ReactNode } from 'react';
import { License } from '../types';

interface DataContextType {
    licenses: License[];
    setLicenses: React.Dispatch<React.SetStateAction<License[]>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [licenses, setLicenses] = useState<License[]>([]);

    return (
        <DataContext.Provider value={{ licenses, setLicenses }}>
            {children}
        </DataContext.Provider>
    );
};
