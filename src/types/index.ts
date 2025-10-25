// Type definitions for the application

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface AppState {
  drawerOpen: boolean;
  snackbarOpen: boolean;
  formData: FormData;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType;
  onClick?: () => void;
}

export interface CardData {
  id: string;
  title: string;
  description: string;
  actions: {
    primary: string;
    secondary: string;
  };
}

// Event handler types
export type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
export type ClickHandler = () => void;
