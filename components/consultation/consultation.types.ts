
export interface Service {
    value: string
    label: string
}

export interface FormState {
    fullName: string;
    email: string;
    phone: string;
    services: string[];
    message: string;
}

export interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    services?: string;
    message?: string;
}