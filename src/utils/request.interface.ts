export interface IRequest {
  url: string;
  method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
  data?: object;
  [x:string]: any;
}
