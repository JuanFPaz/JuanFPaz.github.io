import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  constructor(public sanitizer: DomSanitizer,){}
  titulomodal:string = "";
  imgmodal:string = "";
  imgAltModal:string = "";
  parrafo1:string = "";
  parrafo2:string = "";
  direccionmodal: string = "";
  localidadmodal: string = "";
  gpsmodal: string = "";

  buttonOne():void{
    this.titulomodal = "Ministerio de Desarrollo Productivo de la Nacion";
    this.imgmodal = "../../../assets/images/ARG.jpg";
    this.imgAltModal = "Ministerio";
    this.parrafo1 = "Argentina Programa es un curso organizado por el Ministerio de desarrollo productivo de la nacion en conjunto con la Cámara de la Industria Argentina del Software.";
    this.parrafo2 = "Este curso se divide en dos etapas y se realiza de forma virtual. La primera etapa llamada #SeProgramar la aprobé el pasado mes de Abril, y actualmente me encuentro en la etapa final, llamada #YoProgramo, donde me preparo y me capacito para convertirme en un desarrollador Full Stack-Jr.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7387573007136!2d-58.37803618422862!3d-34.61076696537923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad475ccbbc1%3A0xaf7af7e0de859844!2sMinisterio%20de%20Desarrollo%20Productivo%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses!2sar!4v1661660720386!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Av. Presidente Julio A. Roca 651.";
    this.localidadmodal = "Localidad: San Nicolas, Capital Federal. Argentina.";
  }
  buttonTwo():void{
    this.titulomodal = "Centro Universitario Vicente Lopez.";
    this.imgmodal = "../../../assets/images/CUV.jpg";
    this.imgAltModal = "Centro Universitario";
    this.parrafo1 = "El Centro Universitario Vicente López fue fundado en el 2015, es una de las sedes de la UBA para realizar el CBC, entre otras carreras más.";
    this.parrafo2 = "Realice el curso de técnico en computación en el año 2017, donde aprendimos sobre los diferentes componentes del Hardware, a instalar Softwares de utilidad, y sistemas operativos Linux y como utilizarlos.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8614577146072!2d-58.52221598423058!3d-34.53173786120124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0d1e28cdb6b%3A0xae7580bb6de7116a!2sCentro%20Universitario%20Vicente%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1661660615981!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Av. Presidente Julio A. Roca 651.";
    this.localidadmodal = "Localidad: San Nicolas, Capital Federal. Argentina.";
  }
  buttonThree():void{
    this.titulomodal = "Colegio Julio Argentino Roca Nº 8 DE 10";
    this.imgmodal = "../../../assets/images/JAR.jpg";
    this.imgAltModal = "El Roca papá";
    this.parrafo1 = "Colegio Secundario ubicado en el Barrio de Belgrano, Capital Federal.";
    this.parrafo2 = "Realice los 5 años del secundario en este colegio, y el titulo que recibí es de Bachiller.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8614577146072!2d-58.52221598423058!3d-34.53173786120124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0d1e28cdb6b%3A0xae7580bb6de7116a!2sCentro%20Universitario%20Vicente%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1661660615981!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Carlos E. Zuberbuhler 1850."
    this.localidadmodal = "Localidad: Belgrano, Capital Federal. Argentina."
  }
  buttonFour():void{
    this.titulomodal = "Banco Santander Río";
    this.imgmodal = "../../../assets/images/santander.png";
    this.imgAltModal = "Santander";
    this.parrafo1 = "Oficinas del banco ubicadas en el centro porteño de la Ciudad de Buenos Aires.";
    this.parrafo2 = "En este trabajo mi función es encargarme de conseguir potenciales clientes para el Banco Santander Río, realizando llamadas telefónicas o recibiendo visitas de los posibles nuevos clientes.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9899622281854!2d-58.38055916431527!3d-34.60517679102835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccace45bf89f1%3A0x56a394a7168fba13!2sSuipacha%20268%2C%20C1008AAF%20CABA!5e0!3m2!1ses!2sar!4v1661726490560!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Suipacha 268."
    this.localidadmodal = "Localidad: San Nicolas, Capital Federal. Argentina."
  }
  buttonFive():void{
    this.titulomodal = "BBQ Town Comida China-Coreana";
    this.imgmodal = "../../../assets/images/bbq.PNG";
    this.imgAltModal = "BBQ";
    this.parrafo1 = "Restaurante de comida China y Coreana ubicado en el barrio de Belgrano, o conocido popularmente como el barrio Chino.";
    this.parrafo2 = "Comencé como ayudante de cocina elaborando los platos mas sencillos y de la limpieza e higiene del lugar. Conseguí ganarme un puesto como cocinero tras la salida del chef, no sin antes haber aprendido todo de el y dejarme listo para ese ocupar su lugar.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7387573007136!2d-58.37803618422862!3d-34.61076696537923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad475ccbbc1%3A0xaf7af7e0de859844!2sMinisterio%20de%20Desarrollo%20Productivo%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses!2sar!4v1661660720386!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Av. Juramento 1656."
    this.localidadmodal = "Localidad: Belgrano, Capital Federal. Argentina."
  }
  buttonSix():void{
    this.titulomodal = "Bazar Variedades 'Samuga' SRL";;
    this.imgmodal = "../../../assets/images/bazar.PNG";
    this.imgAltModal = "Bazar";
    this.parrafo1 = "Popular bazar de la zona de Vicente López – Con una trayectoria de más de 20 años en la zona – que cuenta con dos locales sobre la Av. Maipú.";
    this.parrafo2 = "En este trabajo me toco realizar las tareas de repositor, ordenar tanto los estantes del local como el deposito, recibiendo las mercaderías nuevas. La atención al publico también era otra de mis tareas, principalmente en las fechas mas importantes de ventas como los inicios escolares y días festivos.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.3383799897958!2d-58.478657741728796!3d-34.53641658560576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6ba604350e7%3A0xc04b29c18b738cf6!2sAv.%20Maip%C3%BA%20202%2C%20B1602AAP%20Vicente%20L%C3%B3pez%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1661726332210!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Av. Maipu 202"
    this.localidadmodal = "Localidad: Vicente Lopez, Provincia de Buenos Aires. Argentina."
  }
  buttonSeven():void{
    this.titulomodal = "Cinemark Hoyts - Dot Baires";
    this.imgmodal = "../../../assets/images/hoyts.png";
    this.imgAltModal = "Cinemark Hoyts";
    this.parrafo1 = "El Cinemark Hoyts fue mi primer trabajo, ubicado en el Shopping Dot Baires del barrio de Saavedra.";
    this.parrafo2 = "Los puestos de trabajo eran rotativos, pero generalmente me encontraba en el sector de las salas, realizando tareas de limpieza, mantenimiento, recibiendo a los clientes con sus respectivos boletos, guiarlos hasta sus respectivas salas y asientos, etc.";
    this.gpsmodal = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7387573007136!2d-58.37803618422862!3d-34.61076696537923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad475ccbbc1%3A0xaf7af7e0de859844!2sMinisterio%20de%20Desarrollo%20Productivo%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses!2sar!4v1661660720386!5m2!1ses!2sar";
    this.direccionmodal = "Dirección: Vedia 3626."
    this.localidadmodal = "Localidad: Saavedra, Capital Federal. Argentina."
  }
  buttonClose():void{
    this.titulomodal = "";
    this.imgmodal = "";
    this.imgAltModal = "";
    this.parrafo1 = "";
    this.parrafo2= "";
    this.direccionmodal= "";
    this.localidadmodal= "";
    this.gpsmodal = "";
  }

  ngOnInit(): void {
  }

}
