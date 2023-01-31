/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly PUBLIC_COHERE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
