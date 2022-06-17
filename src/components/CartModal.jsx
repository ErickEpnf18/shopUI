import { useStoreState } from "pullstate";
import { useEffect, useState } from "react";
import { generatePrintableVoucher } from "../generatePrintableVoucher";
import { CartStore } from "../store";
import { addToCart } from "../store/CartStore";
import { getCart } from "../store/Selectors";

const {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail,
  IonFooter,
  IonCol,
  IonButton,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} = require("@ionic/react");
const { close } = require("ionicons/icons");

export const CartModal = (props) => {
  const cart = useStoreState(CartStore, getCart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    // let auxTotal = "£ 45,3";
    // let auxItem = 0;
    // auxItem = parseInt(auxTotal.replace("£", ""));

    // debugger;
    cart.forEach((item) => (total += parseInt(item.price.replace("£", ""))));
    setTotalPrice(total);
  }, [cart]);

  const handleInvoice = (cart, total) => {
    console.log("Array:", cart);
    const content = `<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<title>A simple, clean, and responsive HTML invoice template</title>
	
			<style>
				.invoice-box {
					max-width: 800px;
					margin: auto;
					padding: 30px;
					border: 1px solid #eee;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
					font-size: 16px;
					line-height: 24px;
					font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
					color: #555;
				}
	
				.invoice-box table {
					width: 100%;
					line-height: inherit;
					text-align: left;
				}
	
				.invoice-box table td {
					padding: 5px;
					vertical-align: top;
				}
	
				.invoice-box table tr td:nth-child(2) {
					text-align: right;
				}
	
				.invoice-box table tr.top table td {
					padding-bottom: 20px;
				}
	
				.invoice-box table tr.top table td.title {
					font-size: 45px;
					line-height: 45px;
					color: #333;
				}
	
				.invoice-box table tr.information table td {
					padding-bottom: 40px;
				}
	
				.invoice-box table tr.heading td {
					background: #eee;
					border-bottom: 1px solid #ddd;
					font-weight: bold;
				}
	
				.invoice-box table tr.details td {
					padding-bottom: 20px;
				}
	
				.invoice-box table tr.item td {
					border-bottom: 1px solid #eee;
				}
	
				.invoice-box table tr.item.last td {
					border-bottom: none;
				}
	
				.invoice-box table tr.total td:nth-child(2) {
					border-top: 2px solid #eee;
					font-weight: bold;
				}
	
				@media only screen and (max-width: 600px) {
					.invoice-box table tr.top table td {
						width: 100%;
						display: block;
						text-align: center;
					}
	
					.invoice-box table tr.information table td {
						width: 100%;
						display: block;
						text-align: center;
					}
				}
	
				/** RTL **/
				.invoice-box.rtl {
					direction: rtl;
					font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				}
	
				.invoice-box.rtl table {
					text-align: right;
				}
	
				.invoice-box.rtl table tr td:nth-child(2) {
					text-align: left;
				}
			</style>
		</head>
	
		<body>
			<div class="invoice-box">
				<table cellpadding="0" cellspacing="0">
					<tr class="top">
						<td colspan="2">
							<table>
								<tr>
									<td class="title">
										<img src="https://www.sparksuite.com/images/logo.png" style="width: 100%; max-width: 300px" />
									</td>
	
									<td>
										Invoice #: 123<br />
										Created: January 1, 2015<br />
										Due: February 1, 2015
									</td>
								</tr>
							</table>
						</td>
					</tr>
	
					<tr class="information">
						<td colspan="2">
							<table>
								<tr>
									<td>
										Sparksuite, Inc.<br />
										12345 Sunny Road<br />
										Sunnyville, CA 12345
									</td>
	
									<td>
										Acme Corp.<br />
										John Doe<br />
										john@example.com
									</td>
								</tr>
							</table>
						</td>
					</tr>
	
					<tr class="heading">
						<td>
							Payment Method</td>
	
						<td>Check #</td>
					</tr>
	
					<tr class="details">
						<td>Check</td>
	
						<td>1000</td>
					</tr>
	
					<tr class="heading">
						<td>Item</td>
	
						<td>Price</td>
					</tr>
	
					${cart.map((item) => {
						return `
						<tr class="item">
						<td>
							<img src=${item.image} style="width: 100%; max-width: 20px" />
							&bscr;
							${item.title}
						</td>
	
						<td>
							${item.price}
							</td>
							</tr>
							`;
          })}
	
				
					<tr class="total">
						<td></td>
	
						<td>
							
							Total: ${total}</td>
					</tr>
				</table>
			</div>
		</body>
	</html>
	`;
    // generatePrintableVoucher(cart, total);
    var winPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0"
    );
    winPrint?.document.write(content);
    winPrint?.document.close();
    winPrint?.focus();
    winPrint?.print();
    winPrint.setTimeout(() => {
      if (winPrint) winPrint.close();
      // objet is eliminate
      // console.log("what:")
    }, 10000);
    // console.log("Now: ",winPrint)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
          <IonButtons slot="end" onClick={props.close}>
            <IonIcon icon={close} size="large" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow
            style={{ borderBottom: "1px solid black" }}
            className="ion-margin-bottom"
          >
            <IonItem lines="none">
              <IonLabel>
                <h1>{cart.length} products in your cart</h1>
                <IonText color="medium">
                  <h2>Review products and checkout</h2>
                </IonText>
              </IonLabel>
            </IonItem>
          </IonRow>
        </IonGrid>

        {cart.map((item, index) => (
          <IonItemSliding>
            <IonItem
              key={index}
              lines="none"
              className="ion-padding-end"
              style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
            >
              <IonThumbnail>
                <img src={item.image} alt="item" />
              </IonThumbnail>
              <IonLabel className="ion-padding-start ion-text-wrap">
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </IonLabel>
            </IonItem>
            <IonItemOption color="danger" onClick={() => addToCart(item)}>
              Remove
            </IonItemOption>
          </IonItemSliding>
        ))}
      </IonContent>

      <IonFooter
        className="ion-padding-bottom ion-padding-start ion-padding-end"
        style={{ paddingBottom: "3rem" }}
      >
        <IonRow className="ion-justify-content-between">
          <IonCol size="8">
            <h1>Total</h1>
          </IonCol>

          <IonCol size="4">
            <h1>£{totalPrice.toFixed(2)}</h1>
          </IonCol>
        </IonRow>
        <IonButton
          expand="block"
          color="dark"
          onClick={() => handleInvoice(cart, `£${totalPrice.toFixed(2)}`)}
        >
          Checkout &rarr;
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};
