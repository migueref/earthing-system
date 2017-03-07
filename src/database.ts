import Dexie from '../node_modules/dexie/dist/dexie';
export class TierraAppDB extends Dexie{
  perfiles : Dexie.Table<IPerfil,number>
  mediciones : Dexie.Table<IMedicion,number>
  constructor(){
	  super("TierraMapAppDB");
     this.version(1).stores({
        resistividades:"++id,no,datos_perfil,medicion,distancia,profundidad,resistividad,total,lat,lng"
     });
     this.version(2).stores({
        perfiles:"++id,no,datos_perfil,medicion,distancia,profundidad,resistividad,total,lat,lng"
    });
    this.version(3).stores({
      perfiles:"++id,idMedicion,no,orientacion,med1,med2,med3,med4,med5,res1,res2,res3,res4,res5,promedio,total,lat,lng",
      mediciones:"++id,rSuelo,rVarilla,rGrupo,nelectrodos,lat,lng,date"
   });
   this.perfiles.mapToClass(Perfil)
   this.mediciones.mapToClass(Medicion)
	}

}
export interface IMedicion{
  id?:number;
  rSuelo:number;
  rVarilla:number;
  rGrupo:number;
  nelectrodos:number;
  lat:number;
  lng:number;
  date:number;

}
export interface IPerfil{
  id?:number;
  idMedicion:number;
  no:number;
  orientacion:string;
  med1: number;
  med2: number;
  med3: number;
  med4: number;
  med5: number;
  res1: number;
  res2: number;
  res3: number;
  res4: number;
  res5: number;
  promedio: number;
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

export class Medicion implements IMedicion{
  id?:number;
  rSuelo:number;
  rVarilla:number;
  rGrupo:number;
  nelectrodos:number;
  lat:number;
  lng:number;
  date:any;
  rmax:any;

  constructor(rSuelo?:number,rVarilla?:number,rGrupo?:number,nelectrodos?:number,lat?:number,lng?:number,date?:any,rmax?:number){
    if(rSuelo)this.rSuelo=rSuelo;
  	if(rVarilla)this.rVarilla=rVarilla;
    if(rGrupo)this.rGrupo=rGrupo;
    if(nelectrodos)this.nelectrodos=nelectrodos;
    if(rmax)this.rmax=rmax;
    this.date = new Date();
  }
  static first(){
			//Return first element
			//return a promise
			return db.mediciones.orderBy("id").reverse().first();
	}
  static getMedicion(idMedicion){
      //Return profile selected
      //return a promise
      return db.mediciones.where("id").equals(idMedicion).first();
  }
  static all(){
			//Return all transactions
			//return a promise
			return db.mediciones.orderBy("id").reverse().toArray();
		}
  destroy(){
  	return db.mediciones.delete(this.id);
  }
  setCoords(coords){
  	this.lat=coords.latitude;
  	this.lng=coords.longitude;
  }
  cleanCoords(){
  	this.lat=null;
  	this.lng=null;
  }
  save(){
    console.log("medicion a guardar")

    console.log(db.mediciones)
    return db.mediciones.add(this);
  }
}
export class Perfil implements IPerfil{
    id?:number;
    no:number;
    idMedicion:number;
    orientacion:string;
    med1: number;
    med2: number;
    med3: number;
    med4: number;
    med5: number;
    res1: number;
    res2: number;
    res3: number;
    res4: number;
    res5: number;
    promedio: number;
    total:number;//Promedio de todas las p.
    lat:number;
    lng:number;
    // {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0}
    constructor(no:number,idMedicion:number,orientacion:string,med1?:number,med2?:number,med3?:number,med4?:number,med5?:number,res1?:number,res2?:number,res3?:number,res4?:number,res5?:number,promedio?:number, lat?:number,lng ?: number, id?:number){
      this.no=no;
      this.idMedicion=idMedicion;
			this.orientacion=orientacion;
      if(med1)this.med1=med1;
      if(med2)this.med2=med2;
      if(med3)this.med3=med3;
      if(med4)this.med4=med4;
      if(med5)this.med5=med5;
      if(res1)this.res1=res1;
      if(res2)this.res2=res2;
      if(res3)this.res3=res3;
      if(res4)this.res4=res4;
      if(res5)this.res5=res5;
			if(promedio)this.promedio=promedio;
			if(lng)this.lng=lng;
			if(id)this.id=id;

		  }
      static getPerfiles(idPerfil){
    			//Return profile selected
    			//return a promise
    			return db.perfiles.where("idMedicion").equals(idPerfil).toArray();
    	}
      setCoords(coords){
      	this.lat=coords.latitude;
      	this.lng=coords.longitude;
      }
      cleanCoords(){
      	this.lat=null;
      	this.lng=null;
      }
      static all(){
    			//Return all transactions
    			//return a promise
    			return db.perfiles.orderBy("id").reverse().toArray();
    	}
      save(){
        console.log(db.perfiles)
        return db.perfiles.add(this);
      }
}
export let db= new TierraAppDB();
