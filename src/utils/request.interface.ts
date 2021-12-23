export interface IRequest {
  url: string;
  data?: object;
  methods: string;
  [x:string]: any;
}
