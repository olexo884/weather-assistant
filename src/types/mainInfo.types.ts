export interface MainInfoProps {
    temperature?: number;
    exactDate?: number;
    weatherConditions?: string;
    location?: string;
    weatherIconCode?: string;
    units?: 'metric' | 'imperial';
}