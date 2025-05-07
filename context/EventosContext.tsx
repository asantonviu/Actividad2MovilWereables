import React, { createContext, useContext, useState, ReactNode, JSX } from 'react';

/**
 * @typedef {Object} Evento
 * @property {string} id - Identificador único del evento.
 * @property {string} nombre - Nombre del evento.
 * @property {string} lugar - Lugar donde se llevará a cabo el evento.
 * @property {string} [descripcion] - Descripción del evento (opcional).
 * @property {string|null} [imagenUri] - URI de la imagen del evento (opcional).
 */
export type Evento = {
    id: string;
    nombre: string;
    lugar: string;
    descripcion?: string;
    imagenUri?: string | null;
};

/**
 * @typedef {Object} EventosContextType
 * @property {Evento[]} eventos - Lista de eventos.
 * @property {(evento: Evento) => void} agregarEvento - Función para agregar un evento.
 */
type EventosContextType = {
    eventos: Evento[];
    agregarEvento: (evento: Evento) => void;
};

/**
 *  Contexto para manejar eventos en la aplicación.
 * Proporciona una lista de eventos y una función para agregar nuevos eventos.
 */
const EventosContext = createContext<EventosContextType | undefined>(undefined);

/**
 *  Hook para acceder al contexto de eventos.
 * @returns {EventosContextType} El contexto de eventos.
 * @throws {Error} Si el hook se usa fuera del proveedor de contexto.
 */
export const useEventos = (): EventosContextType => {
    const context = useContext(EventosContext);
    if (!context) {
        throw new Error('useEventos debe usarse dentro de un EventosProvider');
    }
    return context;
};

/**
 *  Proveedor del contexto de eventos.
 * @param {ReactNode} children - Componentes hijos que consumirán el contexto.
 * @returns {JSX.Element} El proveedor de contexto con los eventos y la función para agregar eventos.
 */
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
