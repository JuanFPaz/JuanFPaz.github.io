const buttonOne = document.querySelector("#ArgProg");
const buttonTwo = document.querySelector("#CenUni");
const buttonThree = document.querySelector("#Roca");
const closeModal = document.querySelector("#closeModal");

const img = document.querySelector(".image-modal");
const gps = document.querySelector(".gps-modal");

function funcButtonOne(){
    img.setAttribute("src","../Assets/images/ARG.jpg");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7387573007136!2d-58.37803618422862!3d-34.61076696537923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad475ccbbc1%3A0xaf7af7e0de859844!2sMinisterio%20de%20Desarrollo%20Productivo%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses!2sar!4v1661660720386!5m2!1ses!2sar");
}
function funcButtonTwo(){
    img.setAttribute("src","../Assets/images/CUV.jpg");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8614577146072!2d-58.52221598423058!3d-34.53173786120124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0d1e28cdb6b%3A0xae7580bb6de7116a!2sCentro%20Universitario%20Vicente%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1661660615981!5m2!1ses!2sar");
}
function funcButtonThree(){
    img.setAttribute("src","../Assets/images/JAR.jpg");
    gps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13141.488109793312!2d-58.45935500000001!3d-34.569452000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e541577115686aa!2sColegio%20N%C2%B0%2008%20Julio%20Argentino%20Roca!5e0!3m2!1ses!2sar!4v1661660668313!5m2!1ses!2sar");
}
function cleanModal(){
    img.setAttribute("src","");
    gps.setAttribute("src","");
}
buttonOne.addEventListener("click", funcButtonOne);
buttonTwo.addEventListener("click", funcButtonTwo);
buttonThree.addEventListener("click", funcButtonThree);
closeModal.addEventListener("click", cleanModal);