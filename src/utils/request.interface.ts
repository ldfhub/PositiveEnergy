export interface IRequest {
  url: string;
  data?: object;
  method: string;
  [x:string]: any;
}
