/**
 * Array de rotas que são acessíveis para todos os usuários.
 * Essas rotas não necessitam de autenticação.
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/api/webhook",
  "/termos",
  "/guia",
  "/guia/chatbot",
  "/guia/gerador-de-audio",
  "/guia/gerador-de-video",
  "/guia/gerador-de-imagem",
  "/guia/como-entrar-em-contato-com-o-suporte",
  "/guia/como-cancelar-a-sua-assinatura",
  "/guia/como-funciona-a-autenticacao-dois-fatores",
];

/**
 * Array de rotas que são usadas para autenticação
 * Essas rotas irão redirecionar os usuários logados para /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * Prefixo para rotas de autenticação API
 * As rotas que iniciam com esse prefixo são utilizadas para rotas de autenticação API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Rota padrão que o usuário será redirecionado após o login
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
