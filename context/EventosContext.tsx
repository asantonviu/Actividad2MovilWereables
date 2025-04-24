// 📁 context/EventosContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Evento = {
    id: string;
    nombre: string;
    lugar: string;
    descripcion?: string;
};

type EventosContextType = {
    eventos: Evento[];
    agregarEvento: (evento: Evento) => void;
};

const EventosContext = createContext<EventosContextType | undefined>(undefined);

export const useEventos = (): EventosContextType => {
    const context = useContext(EventosContext);
    if (!context) {
        throw new Error('useEventos debe usarse dentro de un EventosProvider');
    }
    return context;
};

export const EventosProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [eventos, setEventos] = useState<Evento[]>([]);

    const agregarEvento = (evento: Evento) => {
        setEventos((prev) => [...prev, evento]);
    };

    return (
        <EventosContext.Provider value={{ eventos, agregarEvento }}>
            {children}
        </EventosContext.Provider>
    );
};
