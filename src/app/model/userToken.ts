export class UserToken{
    public aud:string[]=[];
    public user_name:string="";
    public exp:number=0;
    public authorities:string[]=[];
    public jti:string="";
    public client_id:string="";
}