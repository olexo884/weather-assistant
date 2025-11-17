export interface DataWidgetProps {
    title: string;
    mainValue?: number;
    secondaryText?: string ;
    iconSrc: string;
    signUnits: string;
}


export interface WindSpeedProps {
    title: string;
    mainValue?: number;
    angle?: number;
    units?: 'metric' | 'imperial';
}

export interface WidgetMainProps {
    humidity?: number;
    pressure?: number;
    windSpeed?: number;
    windDeg?: number;
    visibility?: number;
    units?: 'metric' | 'imperial';
}