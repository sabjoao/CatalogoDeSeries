export interface UserRequest{
    nome: string;
    email: string;
    senha: string;
    imagem?: string; //Por conta da interrogação, a imagem é OPCIONAL 
}