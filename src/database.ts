import Dexie from '../node_modules/dexie/dist/dexie';
export class TierraAppDB extends Dexie{
  perfiles : Dexie.Table<IPerfil,number>
  constructor(){
	   super("TierraMapAppDB");
     this.version(1).stores({
        resistividades:"++id,no,datos_perfil,medicion,distancia,profundidad,resistividad,total,lat,lng"
     });
     this.version(2).stores({
        perfiles:"++id,no,datos_perfil,medicion,distancia,profundidad,resistividad,total,lat,lng"
    });
    this.perfiles.mapToClass(Perfil)
	}

}

export interface IPerfil{
  id?:number;
  no:number;
  datos_perfil:string;
  medicion: number;
  distancia:number;
  profundidad:number;
  resistividad:number;//total de resistividad por cada No(p)
  total:number;//Promedio de todas las p.
  lat:number;
  lng:number;
}
export interface IRVarilla{
  id?:number;
  p:number;
  l:number;
  d:number;
  total:number;
}
export interface IGrupo{
  id?:number;
  rvarilla:number;
  f:number;
  n:number;
  total:number;
}
export class ListaPerfil{
  id?:number;
  noPerfiles:number;
  orientacion:string;
  array_medicion:Perfil;
}
export class Perfil implements IPerfil{
    id?:number;
    no:number;
    datos_perfil:string;
    medicion: number;
    distancia:number;
    profundidad:number;
    resistividad:number;//total de resistividad por cada No(p)
    total:number;//Promedio de todas las p.
    lat:number;
    lng:number;
    constructor(no:number,datos_perfil:string,medicion:number,distancia?:number,profundidad?:number,resistividad?:number,total?:number, lat?:number,lng ?: number, id?:number){
			this.no=no;
      this.medicion=medicion;
      this.datos_perfil=datos_perfil;
      if(distancia)this.distancia=distancia;
      if(profundidad)this.profundidad=profundidad;
			if(total)this.total=total;
			if(lat)this.lat=lat;
			if(lng)this.lng=lng;
			if(id)this.id=id;

		  }
      save(){
        console.log(db.perfiles)
        return db.perfiles.add(this);
      }
}
export let db= new TierraAppDB();
