import { Component } from '@angular/core';
import { PaymentRequestNGWallet } from 'ng-wallet/lib/payment-request/payment-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  paymentRequest: PaymentRequestNGWallet = {
    versionAPIApple: 2,
    typePaymentMethod: 'CARD',
    allowedAuthMethods: [
      'PAN_ONLY', 'CRYPTOGRAM_3DS'
    ],
    allowedCardNetworks: [
      'VISA', 'ELO'
    ],
    typeTokenization: 'PAYMENT_GATEWAY',
    gateway: 'example',
    gatewayMerchantId: 'exampleGatewayMerchantId',
    merchantId: '12345678901234567890',
    merchantName: 'Demo Merchant',
    appleMerchant: '/authorizeMerchant',
    merchantCapabilities: ['SUPPORTS_3DS'],
    info: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '20.00',
      currencyCode: 'USD',
      countryCode: 'US',
      subTotalPrice: '5.00',
      items: [
        {
          label: 'Beer',
          price: '1.99',
          quantity: 1
        },
        {
          label: 'Cheeseburger',
          price: '3.99',
          quantity: 1
        }
      ],
      taxes: [
        {
          label: 'Taxes',
          amount: '6.00'
        }
      ],
      discount: {
        label: 'Discount',
        amount: '3.44'
      }
    }
}
}
