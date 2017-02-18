import Dexie from '../node_modules/dexie/dist/dexie';
export class TierraAppDB extends Dexie{
  resistividades : Dexie.Table<IResistividad,number>
  constructor(){
	   super("TierraMapAppDB");
     this.version(1).stores({
        resistividades:"++id,no,medicion,distancia,profundidad,resistividad,total,lat,lng"
    });
    this.resistividades.mapToClass(Resistividad)
	}

}

export interface IResistividad{
  id?:number;
  no:number;
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
export class Resistividad implements IResistividad{
    id?:number;
    no:number;
    medicion: number;
    distancia:number;
    profundidad:number;
    resistividad:number;//total de resistividad por cada No(p)
    total:number;//Promedio de todas las p.
    lat:number;
    lng:number;
    constructor(no:number, medicion:number,distancia:number,profundidad:number,resistividad:number,total?:number, lat?:number,lng ?: number, id?:number){
			this.no=no;
      this.medicion=medicion;
      this.distancia=distancia;
      this.profundidad=profundidad;
			this.total=total;
			if(lat)this.lat=lat;
			if(lng)this.lng=lng;
			if(id)this.id=id;

		  }
      save(){
        return db.resistividades.add(this);
      }
}
export let db= new TierraAppDB();
