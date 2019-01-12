import { Type } from "./Type";

export class Menu {
    public plat:String;
    public prix;
    public photo; 
    public desc;
    public typePlat:Type;

    constructor(nomplat , prix,photo,description,typeplat) {
        this.plat = nomplat;
        this.prix = prix;
        this.photo = photo;
        this.desc = description;
        this.typePlat = typeplat;
    }
}