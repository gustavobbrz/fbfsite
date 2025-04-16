/// <reference types="vite/client" />

// Adicionando tipagem para importação de arquivos estáticos
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

// Variáveis de ambiente (se necessário)
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENV: "development" | "production" | "test";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
