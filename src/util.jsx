export interface Measure {
  code: string;
  display: string;
  description: string;
}

export interface Detraction {
  code: string;
  description: string;
  percent: number;
}

export const measureList: Array<Measure> = [
  { code: "NIU", display: "UND", description: "Unidades" },
  { code: "BX", display: "CJ", description: "Cajas" },
  { code: "MTR", display: "MT", description: "Metros" },
  { code: "KGM", display: "KG", description: "Kilogramos" },
  { code: "MGM", display: "MG", description: "Miligramos" },
  { code: "GRM", display: "G", description: "Gramos" },
  { code: "TNE", display: "TN", description: "Toneladas" },
  { code: "LTR", display: "LT", description: "Litros" },
  { code: "MLT", display: "ML", description: "Mililitros" },
  { code: "GLL", display: "GL", description: "Galones" },
  { code: "ONZ", display: "OZ", description: "Onzas" },
  { code: "LBR", display: "LB", description: "Libras" },
  { code: "CMT", display: "CM", description: "Centimetros" },
];

export const detractionList: Array<Detraction> = [
  { code: "016", description: "Aceite de pescado", percent: 10 },
  { code: "013", description: "Animales vivos", percent: 10 },
  { code: "009", description: "Arena y piedra.", percent: 15 },
  { code: "001", description: "Azúcar y melaza de caña", percent: 10 },
  { code: "006", description: "Algodón", percent: 10 },
  { code: "035", description: "Bienes exonerados del IGV", percent: 4 },
  { code: "007", description: "Caña de azúcar", percent: 4 },
  { code: "024", description: "Comisión mercantil", percent: 1.5 },
  { code: "037", description: "Demás servicios gravados con el IGV", percent: 15 },
  { code: "025", description: "Fabricación de bienes por encargo", percent: 10 },
  { code: "012", description: "Intermediación laboral y tercerización", percent: 4 },
  { code: "008", description: "Madera", percent: 10 },
  { code: "005", description: "Maíz amarillo duro", percent: 4 },
  { code: "039", description: "Minerales no metálicos", percent: 10 },
  { code: "031", description: "Oro gravado con el IGV", percent: 10 },
  { code: "022", description: "Otros servicios empresariales", percent: 12 },
  { code: "041", description: "Plomo", percent: 1.5 },
  { code: "004", description: "Recursos hidrobiológicos", percent: 4 },
  { code: "026", description: "Servicio de transporte de personas", percent: 10 },
  { code: "015", description: "Abonos, cueros y pieles de origen animal", percent: 10 },
  { code: "003", description: "Alcohol etílico", percent: 10 },
  { code: "019", description: "Arrendamiento de bienes muebles", percent: 10 },
  { code: "002", description: "Arroz", percent: 1.5 },
  { code: "029", description: "Algodón en rama sin desmontar", percent: 4 },
  { code: "040", description: "Bien inmueble gravado con IGV", percent: 4 },
  {
    code: "011",
    description: "Bienes gravados con el IGV, o renuncia a la exoneración",
    percent: 4,
  },
  { code: "014", description: "Carnes y despojos comestibles", percent: 10 },
  { code: "030", description: "Contratos de construcción", percent: 10 },
  {
    code: "017",
    description:
      "Harina, polvo y “pellets” de pescado, crustáceos, moluscos y demás invertebrados acuáticos",
    percent: 10,
  },
  {
    code: "018",
    description: "Embarcaciones pesqueras",
    percent: 10,
  },
  { code: "023", description: "Leche", percent: 1.5 },
  { code: "099", description: "Ley 30737", percent: 1.5 },
  { code: "020", description: "Mantenimiento y reparación de bienes muebles", percent: 4 },
  { code: "034", description: "Minerales metálicos no auríferos", percent: 10 },
  { code: "021", description: "Movimiento de carga", percent: 10 },
  { code: "036", description: "Oro y demás minerales metálicos exonerados del IGV", percent: 10 },
  { code: "033", description: "Espárragos", percent: 4 },
  {
    code: "032",
    description: "Paprika y otros frutos de los generos capsicum o pimienta",
    percent: 4,
  },
  {
    code: "010",
    description: "Residuos, subproductos, desechos, recortes y desperdicios",
    percent: 10,
  },
  { code: "027", description: "Servicio de transporte de carga", percent: 1.5 },
  { code: "028", description: "Transporte de pasajeros", percent: 1.5 },
];

export const validateEmail = (email: string) => {
  let re: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isValidTelephoneNumber = (phoneNumber: string) => {
  let re: RegExp = /^(\+\d{1,2}\s)?\(?\d{2,3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return re.test(phoneNumber);
};

export const getIDDocumentType = (code: string) => {
  switch (code) {
    case "6":
      return "RUC";
    case "0":
      return "Doc.trib.no.dom.sin.ruc";
    case "1":
      return "DNI";
    case "4":
      return "Carnet de extranjería";
    case "7":
      return "Pasaporte";
    case "A":
      return "Cedula Diplomática de identidad";
    case "B":
      return "DI de país residencia-no.d";
    case "C":
      return "TIN – Documento Tributario PP.NN";
    case "D":
      return "IN – Documento Tributario PP.JJ";
    case "E":
      return "TAM - Tarjeta Andina de Migración";
    default:
      return "";
  }
};

export const isValidRUC = (ruc: string) => {
  ruc = ruc.trim();
  if (Number(ruc) && ruc.length === 11) {
    let suma = 0;
    let x = 6;

    for (let i = 0; i < ruc.length - 1; i++) {
      if (i === 4) {
        x = 8;
      }
      x--;
      suma += Number(ruc.charAt(i)) * x;
    }

    let resto = suma % 11;
    resto = 11 - resto;

    if (resto >= 10) resto = resto - 10;
    if (resto === Number(ruc.charAt(ruc.length - 1))) {
      return true;
    }
  }
  return false;
};

export const isValidDNI = (dni: string) => {
  return Number.isInteger(Number(dni)) && dni.length === 8;
};

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const getCurrencySymbol = (code: string) => {
  switch (code) {
    case "PEN":
      return "S/";
    case "USD":
      return "$";
    default:
      return "";
  }
};

export const getDocumentTypeDesc = (code: string) => {
  switch (code) {
    case "03":
      return "Boleta";
    case "01":
      return "Factura";
    case "07":
      return "Nota de Crédito";
    case "08":
      return "Nota de Débito";
    default:
      return "";
  }
};

export const getDocumentStatusDescription = (code: string) => {
  switch (code) {
    case "0":
      return "Pendiente de envío";
    case "1":
    case "3":
      return "Autorizado";
    case "2":
      return "Anulado";
    case "4":
      return "No autorizado";
    case "5":
      return "Pendiente de baja";
    case "-1":
      return "Erróneo";
    case "-2":
      return "Rechazado";
    default:
      return "";
  }
};

export const getEmailStatusDesc = (code: number) => {
  switch (code) {
    case 1:
      return "ENVIADO";
    case 2:
      return "RECIBIDO";
    case 3:
      return "LEÍDO";
    case -1:
      return "ERRÓNEO";
    case -2:
      return "RECHAZADO";
    default:
      return "";
  }
};

export const getCreditNoteReason = (code: string) => {
  switch (code) {
    case "01":
      return "Anulación de la Operación";
    case "02":
      return "Anulación por error en el RUC";
    case "03":
      return "Corrección por error en la descripción";
    case "04":
      return "Descuento global";
    case "05":
      return "Descuento por Item";
    case "06":
      return "Devolución total";
    case "07":
      return "Devolución parcial";
    default:
      return "";
  }
};

export const getDebitNoteReason = (code: string) => {
  switch (code) {
    case "01":
      return "Intereses por mora";
    case "02":
      return "Aumento en el valor";
    case "03":
      return "Penalidades/ otros conceptos";
    case "11":
      return "Ajustes de operaciones de exportación";
    case "12":
      return "Ajustes afectos al IVAP";
    default:
      return "";
  }
};

export const getReceiverFullAddress = (objAddress: any) => {
  let address = objAddress.address_line;
  let regCity: RegExp = /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$/;
  if (objAddress.department && regCity.test(objAddress.department)) {
    address += `, ${objAddress.department}`;
  }
  if (objAddress.province && regCity.test(objAddress.province)) {
    address += `, ${objAddress.province}`;
  }
  if (objAddress.district && regCity.test(objAddress.district)) {
    address += `, ${objAddress.district}`;
  }
  return address;
};

export const numberWithCommas = (num: number) => {
  if (!num) return "0.00";
  let parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  parts[1] = parts[1] === undefined ? "00" : parts[1].length === 1 ? `${parts[1]}0` : parts[1];
  return parts.join(".");
};

export const parseDecimalNumber = (num: string) => {
  if (!num.includes(".")) {
    return `${num}.00`;
  } else {
    let parts = num.split(".");
    return parts[1].length === 1 ? `${parts[0]}.${parts[1]}0` : num;
  }
};

export const incrementSequential = (s: string) => {
  var [left, right = "0"] = s.split(/(\d*$)/),
    length = right.length;
  return left + (+right + 1).toString().padStart(length, "0");
};

export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getUnidadMedida = (code: string) => {
  const unidad = measureList.find((u) => u.code === code);
  return unidad ? unidad.display : code;
};

export const getUnidadMedidaDescripcion = (code: string) => {
  const unidad = measureList.find((u) => u.code === code);
  return unidad ? unidad.description : code;
};

/*
 * Funcionalidades para generar números en letras
 * */

function Unidades(num: number) {
  switch (num) {
    case 1:
      return "UN";
    case 2:
      return "DOS";
    case 3:
      return "TRES";
    case 4:
      return "CUATRO";
    case 5:
      return "CINCO";
    case 6:
      return "SEIS";
    case 7:
      return "SIETE";
    case 8:
      return "OCHO";
    case 9:
      return "NUEVE";
  }

  return "";
}

function Decenas(num: number) {
  let decena = Math.floor(num / 10);
  let unidad = num - decena * 10;
  switch (decena) {
    case 1:
      switch (unidad) {
        case 0:
          return "DIEZ";
        case 1:
          return "ONCE";
        case 2:
          return "DOCE";
        case 3:
          return "TRECE";
        case 4:
          return "CATORCE";
        case 5:
          return "QUINCE";
        default:
          return "DIECI" + Unidades(unidad);
      }
    case 2:
      switch (unidad) {
        case 0:
          return "VEINTE";
        default:
          return "VEINTI" + Unidades(unidad);
      }
    case 3:
      return DecenasY("TREINTA", unidad);
    case 4:
      return DecenasY("CUARENTA", unidad);
    case 5:
      return DecenasY("CINCUENTA", unidad);
    case 6:
      return DecenasY("SESENTA", unidad);
    case 7:
      return DecenasY("SETENTA", unidad);
    case 8:
      return DecenasY("OCHENTA", unidad);
    case 9:
      return DecenasY("NOVENTA", unidad);
    case 0:
      return Unidades(unidad);
  }
}

function DecenasY(strSin: string, numUnidades: number) {
  if (numUnidades > 0) return strSin + " Y " + Unidades(numUnidades);

  return strSin;
}

function Centenas(num: number) {
  let centenas = Math.floor(num / 100);
  let decenas = num - centenas * 100;

  switch (centenas) {
    case 1:
      if (decenas > 0) return "CIENTO " + Decenas(decenas);
      return "CIEN";
    case 2:
      return "DOSCIENTOS " + Decenas(decenas);
    case 3:
      return "TRESCIENTOS " + Decenas(decenas);
    case 4:
      return "CUATROCIENTOS " + Decenas(decenas);
    case 5:
      return "QUINIENTOS " + Decenas(decenas);
    case 6:
      return "SEISCIENTOS " + Decenas(decenas);
    case 7:
      return "SETECIENTOS " + Decenas(decenas);
    case 8:
      return "OCHOCIENTOS " + Decenas(decenas);
    case 9:
      return "NOVECIENTOS " + Decenas(decenas);
  }

  return Decenas(decenas);
}

function Seccion(num: number, divisor: number, strSingular: string, strPlural: string) {
  let cientos = Math.floor(num / divisor);
  let resto = num - cientos * divisor;
  let letras = "";
  if (cientos > 0)
    if (cientos > 1) letras = Centenas(cientos) + " " + strPlural;
    else letras = strSingular;

  if (resto > 0) letras += "";

  return letras;
}

function Miles(num: number) {
  let divisor = 1000;
  let cientos = Math.floor(num / divisor);
  let resto = num - cientos * divisor;

  let strMiles = Seccion(num, divisor, "MIL", "MIL");
  let strCentenas = Centenas(resto);

  if (strMiles === "") return strCentenas;

  return strMiles + " " + strCentenas;
}

function Millones(num: number) {
  let divisor = 1000000;
  let cientos = Math.floor(num / divisor);
  let resto = num - cientos * divisor;

  let strMillones = Seccion(num, divisor, "UN MILLON", "MILLONES");
  let strMiles = Miles(resto);

  if (strMillones === "") return strMiles;

  return strMillones + " " + strMiles;
}

export const NumeroALetras = (num: number) => {
  var data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: Math.round(num * 100) - Math.floor(num) * 100,
  };

  var centavosString = data.centavos.toString();

  if (centavosString.length === 1) {
    centavosString = "0" + centavosString;
  }

  if (data.enteros === 0) return "CERO Y " + centavosString + "/100";
  else return Millones(data.enteros) + " Y " + centavosString + "/100";
};

export const FormasPago = {
  contado: { label: "Contado", value: "Contado" },
  credito: { label: "Crédito", value: "Credito" },
};

export const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};



export const getCuoteNumber = (length: number) => {
  const nextLength = length + 1;
  if (nextLength < 10) {
    return "Cuota00" + nextLength;
  }
  if (nextLength < 100) {
    return "Cuota0" + nextLength;
  }
  return nextLength;
};
