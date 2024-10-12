export interface Alert {
    id: number;
    timestamp: any;
    content: string;
    from: string;
    location: string;
    link: string;
}

export interface TotalAlerts {
    alertsLast24Hours: number,
    alertsLastWeek: number,
    alertsLastMonth: number,
    totalAlerts: number,
}