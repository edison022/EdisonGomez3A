class Persona {
    constructor(
      private nombrePersona: string,
      private apellidosPersona: string,
      private identificacionPersona: string,
      private estadoCivilPersona: string
    ) {}
  
    public cambiarEstadoCivil(nuevoEstadoCivil: string): void {
      this.estadoCivilPersona = nuevoEstadoCivil;
    }
  
    public imprimirInformacion(): void {
      console.log("Nombre:", this.nombrePersona);
      console.log("Apellidos:", this.apellidosPersona);
      console.log("Identificación:", this.identificacionPersona);
      console.log("Estado Civil:", this.estadoCivilPersona);
    }
  }
  
  class Empleado extends Persona {
    constructor(
      nombrePersona: string,
      apellidosPersona: string,
      identificacionPersona: string,
      estadoCivilPersona: string,
      private anoIncorporacionEmpleado: number,
      private numDespachoEmpleado: string
    ) {
      super(nombrePersona, apellidosPersona, identificacionPersona, estadoCivilPersona);
    }
  
    public reasignarDespacho(nuevoDespacho: string): void {
      this.numDespachoEmpleado = nuevoDespacho;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Año de Incorporación:", this.anoIncorporacionEmpleado);
      console.log("Número de Despacho:", this.numDespachoEmpleado);
    }
  }
  
  class Estudiante extends Persona {
    constructor(
      nombrePersona: string,
      apellidosPersona: string,
      identificacionPersona: string,
      estadoCivilPersona: string,
      private cursoEstudiante: string
    ) {
      super(nombrePersona, apellidosPersona, identificacionPersona, estadoCivilPersona);
    }
  
    public matricular(curso: string): void {
      this.cursoEstudiante = curso;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Curso:", this.cursoEstudiante);
    }
  }
  
  class Profesor extends Persona {
    constructor(
      nombrePersona: string,
      apellidosPersona: string,
      identificacionPersona: string,
      estadoCivilPersona: string,
      private departamentoProfesor: string
    ) {
      super(nombrePersona, apellidosPersona, identificacionPersona, estadoCivilPersona);
    }
  
    public cambiarDepartamento(nuevoDepartamento: string): void {
      this.departamentoProfesor = nuevoDepartamento;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Departamento:", this.departamentoProfesor);
    }
  }
  
  class PersonalDeServicio extends Persona {
    constructor(
      nombrePersona: string,
      apellidosPersona: string,
      identificacionPersona: string,
      estadoCivilPersona: string,
      private seccionPersonal: string
    ) {
      super(nombrePersona, apellidosPersona, identificacionPersona, estadoCivilPersona);
    }
  
    public trasladarSeccion(nuevaSeccion: string): void {
      this.seccionPersonal = nuevaSeccion;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Sección:", this.seccionPersonal);
    }
  }
  