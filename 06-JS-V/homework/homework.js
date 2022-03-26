// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
    constructor (opciones){
    this.usuario = opciones.usuario,
    this.nombre = opciones.nombre,
    this.email = opciones.email,
    this.password = opciones.password
    }
    saludar() {
      var saludo = 'Hola, mi nombre es ' + this.nombre;
      return saludo;
    }
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
  return 'Hello World!';
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var splitString = this.split(""); // var splitString = "hello".split("");
   // ["h", "e", "l", "l", "o"]

   // Step 2. Use the reverse() method to reverse the new created array
   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
   // ["o", "l", "l", "e", "h"]

   // Step 3. Use the join() method to join all elements of the array into a string
   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
   // "olleh"

   //Step 4. Return the reversed string
   return joinArray; // "olleh"
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: {
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor
      this.nombre = nombre,
      this.apeliido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    }
    detalle() {
        return this;
    }
  }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var Ignacio = new Persona('Ignacio', 'Lopez','19','Mi casa 123');
  return Ignacio.detalle();
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
    var nombrecompleto = this.nombre + ', ' + this.edad + ' años';
    return nombrecompleto;
  };
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
