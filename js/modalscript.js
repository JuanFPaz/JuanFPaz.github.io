const buttonOne = document.querySelector("#ArgProg");
const buttonTwo = document.querySelector("#CenUni");
const buttonThree = document.querySelector("#Roca");
const buttonFour = document.querySelector("#Santander");
const buttonFive = document.querySelector("#BBQ");
const buttonSix = document.querySelector("#Bazar");
const buttonSeven = document.querySelector("#Hoyts");

const closeModal = document.querySelector("#closeModal");

const title = document.querySelector(".title-modal");
const img = document.querySelector(".image-modal");
const gps = document.querySelector(".gps-modal");
const p = document.querySelectorAll(".modal-body p");
const direccion = document.querySelector(".direccion");
const localidad = document.querySelector(".localidad");

//Funciones Formacion Academica
function funcButtonOne(){
    title.textContent = "Ministerio de Desarrollo Productivo de la Nacion";
    img.setAttribute("src","../Assets/images/ARG.jpg");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7387573007136!2d-58.37803618422862!3d-34.61076696537923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad475ccbbc1%3A0xaf7af7e0de859844!2sMinisterio%20de%20Desarrollo%20Productivo%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses!2sar!4v1661660720386!5m2!1ses!2sar");
    p[0].textContent = "Argentina Programa es un curso organizado por el Ministerio de desarrollo productivo de la nacion en conjunto con la Cámara de la Industria Argentina del Software.";
    p[1].textContent = "Este curso se divide en dos etapas y se realiza de forma virtual. La primera etapa llamada #SeProgramar la aprobé el pasado mes de Abril, y actualmente me encuentro en la etapa final, llamada #YoProgramo, donde me preparo y me capacito para convertirme en un desarrollador Full Stack-Jr.";
    direccion.textContent = "Dirección: Av. Presidente Julio A. Roca 651."
    localidad.textContent = "Localidad: San Nicolas, Capital Federal. Argentina."
}
function funcButtonTwo(){
    title.textContent = "Centro Universitario Vicente Lopez.";
    img.setAttribute("src","../Assets/images/CUV.jpg");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8614577146072!2d-58.52221598423058!3d-34.53173786120124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0d1e28cdb6b%3A0xae7580bb6de7116a!2sCentro%20Universitario%20Vicente%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1661660615981!5m2!1ses!2sar");
    p[0].textContent = "El Centro Universitario Vicente López fue fundado en el 2015, es una de las sedes de la UBA para realizar el CBC, entre otras carreras más.";
    p[1].textContent = "Realice el curso de técnico en computación en el año 2017, donde aprendimos sobre los diferentes componentes del Hardware, a instalar Softwares de utilidad, y sistemas operativos Linux y como utilizarlos.";
    direccion.textContent = "Dirección: Carlos Villate 4480."
    localidad.textContent = "Localidad: Munro, Provincia de Buenos Aires. Argentina."
}
function funcButtonThree(){
    title.textContent = "Colegio Julio Argentino Roca Nº 8 DE 10";
    img.setAttribute("src","../Assets/images/JAR.jpg");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13141.488109793312!2d-58.45935500000001!3d-34.569452000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e541577115686aa!2sColegio%20N%C2%B0%2008%20Julio%20Argentino%20Roca!5e0!3m2!1ses!2sar!4v1661660668313!5m2!1ses!2sar");
    p[0].textContent = "Colegio Secundario ubicado en el Barrio de Belgrano, Capital Federal.";
    p[1].textContent = "Realice los 5 años del secundario en este colegio, y el titulo que recibí es de Bachiller.";
    direccion.textContent = "Dirección: Carlos E. Zuberbuhler 1850."
    localidad.textContent = "Localidad: Belgrano, Capital Federal. Argentina."
}
//Experiencia laboral
function funcButtonFour(){
    title.textContent = "Banco Santander Río";
    img.setAttribute("src","../Assets/images/santander.png");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9899622281854!2d-58.38055916431527!3d-34.60517679102835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccace45bf89f1%3A0x56a394a7168fba13!2sSuipacha%20268%2C%20C1008AAF%20CABA!5e0!3m2!1ses!2sar!4v1661726490560!5m2!1ses!2sar");
    p[0].textContent = "Oficinas del banco ubicadas en el centro porteño de la Ciudad de Buenos Aires.";
    p[1].textContent = "En este trabajo mi función es encargarme de conseguir potenciales clientes para el Banco Santander Río, realizando llamadas telefónicas o recibiendo visitas de los posibles nuevos clientes.";
    direccion.textContent = "Dirección: Suipacha 268."
    localidad.textContent = "Localidad: San Nicolas, Capital Federal. Argentina."
}
function funcButtonFive(){
    title.textContent = "BBQ Town Comida China-Coreana";
    img.setAttribute("src","../Assets/images/bbq.PNG");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.833794650115!2d-58.45157958422992!3d-34.557763362576246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5cd256e25d1%3A0x16c2c102d9b655e7!2sBBQ%20Town!5e0!3m2!1ses!2sar!4v1661726372558!5m2!1ses!2sar");
    p[0].textContent = "Restaurante de comida China y Coreana ubicado en el barrio de Belgrano, o conocido popularmente como el barrio Chino.";
    p[1].textContent = "Comencé como ayudante de cocina elaborando los platos mas sencillos y de la limpieza e higiene del lugar. Conseguí ganarme un puesto como cocinero tras la salida del chef, no sin antes haber aprendido todo de el y dejarme listo para ese ocupar su lugar.";
    direccion.textContent = "Dirección: Av. Juramento 1656."
    localidad.textContent = "Localidad: Belgrano, Capital Federal. Argentina."
}
function funcButtonSix(){
    title.textContent = "Bazar Variedades 'Samuga' SRL";
    img.setAttribute("src","../Assets/images/bazar.PNG");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.3383799897958!2d-58.478657741728796!3d-34.53641658560576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6ba604350e7%3A0xc04b29c18b738cf6!2sAv.%20Maip%C3%BA%20202%2C%20B1602AAP%20Vicente%20L%C3%B3pez%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1661726332210!5m2!1ses!2sar");
    p[0].textContent = "Popular bazar de la zona de Vicente López – Con una trayectoria de más de 20 años en la zona – que cuenta con dos locales sobre la Av. Maipú.";
    p[1].textContent = "En este trabajo me toco realizar las tareas de repositor, ordenar tanto los estantes del local como el deposito, recibiendo las mercaderías nuevas. La atención al publico también era otra de mis tareas, principalmente en las fechas mas importantes de ventas como los inicios escolares y días festivos.";
    direccion.textContent = "Dirección: Av. Maipu 202"
    localidad.textContent = "Localidad: Vicente Lopez, Provincia de Buenos Aires. Argentina."
}
function funcButtonSeven(){
    title.textContent = "Cinemark Hoyts - Dot Baires";
    img.setAttribute("src","../Assets/images/hoyts.png");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.2961842861996!2d-58.49354076863638!3d-34.54605549949347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6c10694d555%3A0x88e59ff0d192bc!2sCinemark%20Hoyts!5e0!3m2!1ses!2sar!4v1661726248499!5m2!1ses!2sar");
    p[0].textContent = "El Cinemark Hoyts fue mi primer trabajo, ubicado en el Shopping Dot Baires del barrio de Saavedra.";
    p[1].textContent = "Los puestos de trabajo eran rotativos, pero generalmente me encontraba en el sector de las salas, realizando tareas de limpieza, mantenimiento, recibiendo a los clientes con sus respectivos boletos, guiarlos hasta sus respectivas salas y asientos, etc.";
    direccion.textContent = "Dirección: Vedia 3626."
    localidad.textContent = "Localidad: Saavedra, Capital Federal. Argentina."
}
//clean modal
function cleanModal(){
    title.textContent = "";
    img.setAttribute("src","");
    gps.setAttribute("src","");
    p[0].textContent = "";
    p[1].textContent = "";
    direccion.textContent = ""
    localidad.textContent = ""
}

buttonOne.addEventListener("click", funcButtonOne);
buttonTwo.addEventListener("click", funcButtonTwo);
buttonThree.addEventListener("click", funcButtonThree);
buttonFour.addEventListener("click", funcButtonFour);
buttonFive.addEventListener("click", funcButtonFive);
buttonSix.addEventListener("click", funcButtonSix);
buttonSeven.addEventListener("click", funcButtonSeven);

closeModal.addEventListener("click", cleanModal);