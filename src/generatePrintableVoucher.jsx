import {
  getIDDocumentType,
  getCurrencySymbol,
  numberWithCommas,
  getDocumentStatusDescription,
  getDocumentTypeDesc,
  NumeroALetras,
  getUnidadMedida,
  getCreditNoteReason,
  getDebitNoteReason,
  getReceiverFullAddress,
} from "./util";

export const generatePrintableVoucher = (docInfo, qr) => {
  /*  let logoVoucher
    axios.get(`/api/logo/company/${docInfo.emitter_company.number}`)
    .then(res=>{
      logoVoucher=res.data.logo
     
    }) */
  console.log("over here");

  let html = `<!DOCTYPE html>
    <html
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
      xmlns="http://www.w3.org/TR/REC-html40"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style>
          <!--
           @font-face
            {font-family:"Cambria Math";
            panose-1:2 4 5 3 5 4 6 3 2 4;
            mso-font-charset:0;
            mso-generic-font-family:roman;
            mso-font-pitch:variable;
            mso-font-signature:3 0 0 0 1 0;}
          @font-face
            {font-family:Calibri;
            panose-1:2 15 5 2 2 2 4 3 2 4;
            mso-font-charset:0;
            mso-generic-font-family:swiss;
            mso-font-pitch:variable;
            mso-font-signature:-1610611985 1073750139 0 0 159 0;}
          @font-face
            {font-family:"Calibri Light";
            panose-1:2 15 3 2 2 2 4 3 2 4;
            mso-font-charset:0;
            mso-generic-font-family:swiss;
            mso-font-pitch:variable;
            mso-font-signature:-536859905 -1073732485 9 0 511 0;}
           p.MsoNormal, li.MsoNormal, div.MsoNormal
            {mso-style-unhide:no;
            mso-style-qformat:yes;
            mso-style-parent:"";
            margin-top:0cm;
            margin-right:0cm;
            margin-bottom:4.0pt;
            margin-left:0cm;
            mso-pagination:widow-orphan;
            font-size:12.0pt;
            font-family:"Calibri",sans-serif;
            mso-ascii-font-family:Calibri;
            mso-ascii-theme-font:minor-latin;
            mso-fareast-font-family:Calibri;
            mso-fareast-theme-font:minor-latin;
            mso-hansi-font-family:Calibri;
            mso-hansi-theme-font:minor-latin;
            mso-bidi-font-family:"Times New Roman";
            mso-bidi-theme-font:minor-bidi;
            mso-fareast-language:EN-US;}
          .MsoChpDefault
            {mso-style-type:export-only;
            mso-default-props:yes;
            font-family:"Calibri",sans-serif;
            mso-ascii-font-family:Calibri;
            mso-ascii-theme-font:minor-latin;
            mso-fareast-font-family:Calibri;
            mso-fareast-theme-font:minor-latin;
            mso-hansi-font-family:Calibri;
            mso-hansi-theme-font:minor-latin;
            mso-bidi-font-family:"Times New Roman";
            mso-bidi-theme-font:minor-bidi;
            mso-fareast-language:EN-US;}
          .MsoPapDefault
            {mso-style-type:export-only;
            margin-bottom:4.0pt;}
          @page WordSection1
            {size:612.0pt 792.0pt;
            margin:70.85pt 3.0cm 70.85pt 3.0cm;
            mso-header-margin:35.4pt;
            mso-footer-margin:35.4pt;
            mso-paper-source:0;}
          div.WordSection1
            {page:WordSection1;}
          -->
        </style>
        <!--[if gte mso 10]>
          <style>
            table.MsoNormalTable {
              mso-style-name: "Tabla normal";
              mso-tstyle-rowband-size: 0;
              mso-tstyle-colband-size: 0;
              mso-style-noshow: yes;
              mso-style-priority: 99;
              mso-style-parent: "";
              mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;
              mso-para-margin-top: 0cm;
              mso-para-margin-right: 0cm;
              mso-para-margin-bottom: 4pt;
              mso-para-margin-left: 0cm;
              mso-pagination: widow-orphan;
              font-size: 12pt;
              font-family: "Calibri", sans-serif;
              mso-ascii-font-family: Calibri;
              mso-ascii-theme-font: minor-latin;
              mso-hansi-font-family: Calibri;
              mso-hansi-theme-font: minor-latin;
              mso-fareast-language: EN-US;
            }
            table.MsoTableGrid {
              mso-style-name: "Tabla con cuadrícula";
              mso-tstyle-rowband-size: 0;
              mso-tstyle-colband-size: 0;
              mso-style-priority: 39;
              mso-style-unhide: no;
              border: solid windowtext 1pt;
              mso-border-alt: solid windowtext 0.5pt;
              mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;
              mso-border-insideh: 0.5pt solid windowtext;
              mso-border-insidev: 0.5pt solid windowtext;
              mso-para-margin: 0cm;
              mso-pagination: widow-orphan;
              font-size: 12pt;
              font-family: "Calibri", "sans-serif";
              mso-ascii-font-family: Calibri;
              mso-ascii-theme-font: minor-latin;
              mso-hansi-font-family: Calibri;
              mso-hansi-theme-font: minor-latin;
              mso-fareast-language: EN-US;
            }
          //   .container{
          //     display: flex;
          //     justify-content: center;
          //     align-items: center;
          //     flex-direction: column !important;
          // }
          // .ctn-flex{
          //     display: flex;
          // }
          </style>
        <![endif]-->
      </head>
    
      <body lang="ES-PE" style="tab-interval: 35.4pt; word-wrap: break-word">
      <div style="display:flex;justify-content: center;align-items:center; flex-direction: column; font-family:sans-serif">
                <div>
                <div style="width=100%;margin:auto 0;display:flex;justify-content:center; align-items:center;">
                <div style="display: block;
                margin: 0 auto;
                // max-width: 100%;
                // width: 70%;
                
                ">
                
                </div>
              
                </div>
                              <span style="font-weight: bold; font-size: 2rem; text-align:center;display:block; margin-bottom:.4rem;">
                              ${
                                docInfo.emitter_company
                                  ? `${docInfo.emitter_company.legal_name.toLocaleUpperCase()}`
                                  : `${docInfo.emitter.legal_name.toLocaleUpperCase()}`
                              }
                              </span>
                              <div style="text-align:center;">
                              <span>
                              <span style="font-weight: bold;">R.U.C.:&nbsp;</span>
                              ${
                                docInfo.emitter_company
                                  ? docInfo.emitter_company.number
                                  : docInfo.emitter.number
                              }
                              </span>
                              <span style="display:block;text-align:center;"><span style="font-weight: bold;">N°:&nbsp;</span>${
                                docInfo.serie
                              }-${docInfo.number}</span>
                              </div>
   
                          </div>
                          <div class="header-emitter container" style="display: flex;
                          justify-content: center;
                          align-items: center;
                          flex-direction: column !important;">
   
                          <div style="display: flex; text-align:center;">
                              <span>Dirección:&nbsp</span><span> ${
                                docInfo.emitter_company
                                  ? `${docInfo.emitter_company.address_line}`
                                  : `${docInfo.emitter.addresses[0].address_line}`
                              }</span>
                          </div>
                          <div style="display: flex;">
                              ${
                                docInfo.emitter_company
                                  ? `<span>${docInfo.emitter_company.province}&nbsp;-&nbsp;</span><span>${docInfo.emitter_company.department}&nbsp;-&nbsp;${docInfo.emitter_company.district}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELF:&nbsp;</span><span>${docInfo.emitter_company.phone_number}</span>`
                                  : ""
                              }
                    </div>
              </div>
              <div style="margin-bottom: .6rem;margin-top:.5rem;display:flex;justify-content: center;align-items:center; flex-direction: column">
                  <span style="font-weight: bold;font-size:1.35rem;">${getDocumentTypeDesc(
                    docInfo.document_type
                  ).toLocaleUpperCase()}
                   ELECTRÓNICA&nbsp;&nbsp;${docInfo.serie}-${
    docInfo.number
  }</span>
                   </div>
                   <div style="width:100%;display:flex;justify-content: start;align-items:start; flex-direction: column; margin-bottom:.6rem;";>
                <span>FECHA DE EMISIÓN:&nbsp</span>
                <span>DIRECCIÓN FISCAL:&nbsp;${
                  docInfo.receiver.addresses[0].address_line
                }</span>
                <span>${
                  docInfo.receiver.number_type === "6"
                    ? "RUC"
                    : "IDENTIFICACIÓN"
                }:&nbsp; ${docInfo.receiver.number}</span>
                <span>CLIENTE:&nbsp;${docInfo.receiver.legal_name}</span>
                  </div>
                </div>
          <table class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              border-collapse: collapse;
              border: none;
              mso-yfti-tbllook: 1184;
              mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;
              mso-border-insideh: none;
              mso-border-insidev: none;
            "
          >
          <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
          <td
                width="66"
                valign="top"
                style="
                  width: 49.15pt;
                  border-left: none;
                  border-right: none;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  border-bottom: double windowtext 1.5pt;
                  border-right: double windowtext 1.5pt;
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm;">CANT.</p>
              </td>
              <td
                width="716"
                valign="top"
                style="
                  width: 35cm;
                  border-left: none;
                  border-right: none;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  border-bottom: double windowtext 1.5pt;
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm;">DESCRIPCIÓN</p>
              </td>
              <td
                width="60"
                valign="top"
                style="
                  width: 7cm;
                  border-left: none;
                  border-right: none;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  border-bottom: double windowtext 1.5pt;
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm">V. UNIT.</p>
              </td>
              <td
                width="60"
                valign="top"
                style="
                  width: 7cm;
                  border-left: none;
                  border-right: none;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  border-bottom: double windowtext 1.5pt;
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm">DSCTO</p>
              </td>
              <td
                width="85"
                valign="top"
                style="
                  width: 63.75pt;
                  border-left: none;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  border-bottom: double windowtext 1.5pt;
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm">TOTAL</p>
              </td>
            </tr>`;

  html += docInfo.products.map((item) => {
    return `<tr style="mso-yfti-irow: 1">
        <td
                width="66"
                valign="top"
                style="
                  width: 49.15pt;
                  border: none;
                  mso-border-top-alt: double windowtext 1.5pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  border-right: double windowtext 1.5pt;
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm">${parseInt(
                  `${item.quantity}`
                )}&nbsp;${getUnidadMedida(item.measure)}</p>
              </td>
              <td
                width="416"
                valign="top"
                style="
                  width: 11cm;
                  border: none;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  mso-border-top-alt: double windowtext 1.5pt;
   
                "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm">${
                  item.description
                }</p>
              </td> <td
              width="60"
              valign="top"
              style="
                width: 11cm;
                border: none;
                padding: 0cm 5.4pt 0cm 5.4pt;
                mso-border-top-alt: double windowtext 1.5pt;
              "
            >
              <p class="MsoNormal" style="margin-bottom: 0cm">${parseFloat(
                `${item.unit_price}`
              ).toFixed(2)}</p>
            </td> <td
            width="60"
            valign="top"
            style="
              width: 11cm;
              border: none;
              mso-border-top-alt: double windowtext 1.5pt;
              padding: 0cm 5.4pt 0cm 5.4pt;
   
            "
          >
            <p class="MsoNormal" style="margin-bottom: 0cm">${parseFloat(
              `${item.discount}`
            ).toFixed(2)}</p>
          </td>
              <td
                width="85"
                valign="top"
                style="
                  width: 63.75pt;
                  border: none;
                  mso-border-top-alt: double windowtext 1.5pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  "
              >
                <p class="MsoNormal" style="margin-bottom: 0cm">${
                  item.unit_price > 0 ? item.price : "0.00"
                }</p>
              </td>
            </tr>`;
  });

  html += `</table>
          
          <p class="MsoNormal" style="margin-top: 1rem;">
            <span style="color: white; mso-color-alt: windowtext">SON: </span>${NumeroALetras(
              docInfo.total_value
            )}<o:p></o:p>
          </p>
    
          <p class="MsoNormal"><o:p>&nbsp;</o:p></p>
    
          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              margin-left: 320.6pt;
              border-collapse: collapse;
              mso-yfti-tbllook: 1184;
              mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;
              mso-border-insideh: none;
              mso-border-insidev: none;
   
              // margin-right:0;
              width: 40%;
              "
          >
            <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes; margin-left:1rem;" >
              <td width="100" valign="top" style=""width: 110pt; padding: 0cm 5.4pt 0cm 5.4pt">
                <p class="MsoNormal" style="margin-bottom: 0cm;padding-left:5.4pt">SUBTOTAL</p>
              </td>
              <td width="100" valign="top" style="width: 60pt; padding: 0cm 5.4pt 0cm 5.4pt; text-align: end;">
                <p class="MsoNormal" style="margin-bottom: 0cm">${getCurrencySymbol(
                  docInfo.currency
                )} ${docInfo.subtotal}</p>
              </td>
            </tr>
            <tr style="mso-yfti-irow: 1; margin-left:1rem;">
              <td width="100" valign="top" style="width: 110pt; padding: 0cm 5.4pt 0cm 5.4pt">
                <p class="MsoNormal" style="margin-bottom: 0cm">DCTOS</p>
              </td>
              <td width="100" valign="top" style="width: 60pt; padding: 0cm 5.4pt 0cm 5.4pt; text-align: end;">
                <p class="MsoNormal" style="margin-bottom: 0cm">${getCurrencySymbol(
                  docInfo.currency
                )} ${docInfo.total_discount}</p>
              </td>
            </tr>
            <!-- <tr style="mso-yfti-irow: 2">
              <td width="100" valign="top" style="width: 110pt;padding: 0cm 5.4pt 0cm 5.4pt">
                <p class="MsoNormal" style="margin-bottom: 0cm">OP. GRAVADA</p>
              </td>
              <td width="50" valign="top" style="width: 60pt; padding: 0cm 5.4pt 0cm 5.4pt; text-align: end;">
                <p class="MsoNormal" style="margin-bottom: 0cm">${getCurrencySymbol(
                  docInfo.currency
                )} ${docInfo.total_value}</p>
              </td>
            </tr> -->
            <tr style="mso-yfti-irow: 3; margin-left:1rem;">
              <td width="100" valign="top" style="width: 110pt; padding: 0cm 5.4pt 0cm 5.4pt">
                <p class="MsoNormal" style="margin-bottom: 0cm">I.G.V.</p>
              </td>
              <td width="50" valign="top" style="width: 60pt; padding: 0cm 5.4pt 0cm 5.4pt; text-align: end;">
                <p class="MsoNormal" style="margin-bottom: 0cm">${getCurrencySymbol(
                  docInfo.currency
                )} ${docInfo.total_igv}</p>
              </td>
            </tr>
            <tr style="mso-yfti-irow: 4; mso-yfti-lastrow: yes; margin-left:1rem;
            border-top: double windowtext 1.5pt;
            ">
              <td width="100" valign="top" style="width: 110pt;padding: 0cm 5.4pt 0cm 5.4pt;
              
            
              
              ">
                <p class="MsoNormal" style="margin-bottom: 0cm">TOTAL A PAGAR</p>
              </td>
              <td width="50" valign="top" style="width: 60pt; padding: 0cm 5.4pt 0cm 5.4pt; text-align: end;
              ">
                <p class="MsoNormal" style="margin-bottom: 0cm">${getCurrencySymbol(
                  docInfo.currency
                )} ${docInfo.total_value}</p>
              </td>
            </tr>
          </table>
          <p class="MsoNormal"><o:p>&nbsp;</o:p></p>
    
          <p class="MsoNormal" style="margin-bottom: 0cm">
            <span
              style="
                font-size: 11pt;
                font-family: 'Calibri Light', sans-serif;
                mso-ascii-theme-font: major-latin;
                mso-fareast-font-family: 'Times New Roman';
                mso-hansi-theme-font: major-latin;
                mso-bidi-theme-font: major-latin;
                mso-fareast-language: ES-MX;
              "
              ><o:p>&nbsp;</o:p></span
            >
          </p>
    
          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="567"
            style="
              width: 100%;
              border-collapse: collapse;
              mso-yfti-tbllook: 1184;
              mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;
              mso-border-insideh: none;
              mso-border-insidev: none;
            "
          >`;

  if (docInfo.notes) {
    html += `<tr>
            <td width="567" valign="bottom" style="width: 15cm; padding: 0cm 5.4pt 0cm 5.4pt">
              <p class="MsoNormal" style="margin-bottom: 0cm">
                <span
                  style="
                    font-size: 11pt;
                    font-family: 'Calibri Light', sans-serif;
                    mso-ascii-theme-font: major-latin;
                    mso-fareast-font-family: 'Times New Roman';
                    mso-hansi-theme-font: major-latin;
                    mso-bidi-theme-font: major-latin;
                    mso-fareast-language: ES-MX;
                  "
                  >Notas:&nbsp;<o:p></o:p
                ></span>
              </p>`;

    html += docInfo.notes
      .split(";?")
      .map((note) => {
        return `<p class="MsoNormal" style="margin-bottom: 0cm;">
                  <span style="font-size: 11pt; font-family: 'Calibri Light', sans-serif;">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${note}</span>
                </p>`;
      })
      .join("");

    html += `<p class="MsoNormal"><o:p>&nbsp;</o:p></p></td></tr>`;
  }

  if (docInfo.emitter_company !== null) {
    if (docInfo.emitter_company.info_extra) {
      html += `<tr>
            <td width="567" valign="bottom" style="width: 15cm; padding: 0cm 5.4pt 0cm 5.4pt">
              <p class="MsoNormal" style="margin-bottom: 0cm">
                <span
                  style="
                    font-size: 11pt;
                    font-family: 'Calibri Light', sans-serif;
                    mso-ascii-theme-font: major-latin;
                    mso-fareast-font-family: 'Times New Roman';
                    mso-hansi-theme-font: major-latin;
                    mso-bidi-theme-font: major-latin;
                    mso-fareast-language: ES-MX;
                  "
                  >Información adicional al comprobante:<o:p></o:p
                ></span>
                <span style="display:block;">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${docInfo.emitter_company.info_extra}</span>
              </p></tr>`;
    }
  }

  html += `<tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes; mso-yfti-lastrow: yes">
              <td width="667" valign="bottom" style="width:100%;">
              <div style="display:flex;justify-content:center;align-items:center;">
              ${qr ? `<img src="${qr}"/>` : ""}
              </div>
   <div style="display: flex; justify-content: center; align-items: center;flex-direction: row">
           
   
                <div style="margin:auto 0;">
                <p class="MsoNormal" style="margin-bottom: 0cm;text-align:center;">
                  <span
                    style="
                      
                      font-family: 'Calibri Light', sans-serif;
                      mso-ascii-theme-font: major-latin;
                      mso-fareast-font-family: 'Times New Roman';
                      mso-hansi-theme-font: major-latin;
                      mso-bidi-theme-font: major-latin;
                      mso-fareast-language: ES-MX;
                      text-align:center;
                      font-size:.8rem;
                    "
                    >Autorizado mediante resolución <span style="mso-spacerun: yes"> </span>Nº 034-005-0006805/SUNAT <o:p></o:p
                  ></span>
                </p>
                <p class="MsoNormal" style="margin-bottom: 0cm;text-align:center;">
                  <span
                    style="
                      font-size: 11pt;
                      font-family: 'Calibri Light', sans-serif;
                      mso-ascii-theme-font: major-latin;
                      mso-fareast-font-family: 'Times New Roman';
                      mso-hansi-theme-font: major-latin;
                      mso-bidi-theme-font: major-latin;
                      mso-fareast-language: ES-MX;
                      font-size:.8rem;
                    "
                    >Representación impresa de la FACTURA ELECTRÓNICA <o:p></o:p
                  ></span>
                </p>
                <p class="MsoNormal" style="margin-bottom: 0cm;text-align:center;">
                  <span
                    style="
                      font-size: 11pt;
                      font-family: 'Calibri Light', sans-serif;
                      mso-ascii-theme-font: major-latin;
                      mso-fareast-font-family: 'Times New Roman';
                      mso-hansi-theme-font: major-latin;
                      mso-bidi-theme-font: major-latin;
                      mso-fareast-language: ES-MX;
                      text-align:center;
                      font-size:.8rem;
   
                    " <o:p></o:p
                  >Consulte este documento en ratifika.com.pe
                  Innovación y Tecnología de Eximio S.A.C.</span>
                </p>
                
                </div>
                <div>
                <img width="100px" src="https://ratifika.com.pe/static/media/ratifikaLogo.4e3c476b.svg" alt="Ratifika" />
                </div>
            </div>
              </td>
            </tr>
          </table>
    
          <!-- <p class="MsoNormal">
            <img
              width="185"
              height="208"
              src="VOUCHER.fld/image002.png"
              align="left"
              hspace="12"
              v:shapes="Imagen_x0020_2"
            /><![endif]><span style="mso-spacerun: yes"> </span
            ><span style="mso-spacerun: yes">     </span>
          </p> -->
    
          <p class="MsoNormal"><o:p>&nbsp;</o:p></p>
   
        </div>
        </div>
      </body>
    </html>`;

  return html;
};
