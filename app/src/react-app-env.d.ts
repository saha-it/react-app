/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_AFFILIAT_ID: string;
        readonly REACT_APP_API_KEY: string;
    }
}
