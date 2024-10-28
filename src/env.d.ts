// src/env.d.ts
interface ImportMetaEnv {
    BASE_URL: string;  // Define any other env variables you need here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}