import { API } from '../references/references.js';

(function () {
    const methods = [0, 1, 2];

    console.log(API);

    switch (methods[0]) {
        case shared.PAYMENT_METHODS.BANK:
            console.log('bank');
            break;
        case shared.PAYMENT_METHODS.CARD:
            console.log('card');
            break;
        case shared.PAYMENT_METHODS.PAYPAL:
            console.log('paypal');
            break;
        case shared.PAYMENT_METHODS.VENMO:
            console.log('venmo');
            break;
    }
})();