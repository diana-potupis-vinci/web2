interface Movie {
    id : number;
    title: string;
    director: string;
    duration: number;
    description?: string;
    budget?: number;
    link?: string;
}

export type { Movie };