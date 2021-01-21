import Stripe from 'stripe';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { STRIPE_URL } from '../../constants/routes/urls';
import StripeService from '../../usecases/ports/StripeService';
import { stripeError } from '../../utils';

const CUSTOMER_URL = `${STRIPE_URL}customers`;
const CHARGES_URL = `${STRIPE_URL}charges`;
type Headers = {
  'Content-Type': string;
  Authorization: string;
};

export default class StripeServiceImpl implements StripeService {
  headers: Headers;

  constructor(stripeSecretKey: string) {
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${stripeSecretKey}`,
    };
  }

  createCustomer = async (token: Stripe.Token): Promise<Stripe.Customer> => {
    const params = new URLSearchParams({ source: token.id });

    return axios
      .post(CUSTOMER_URL, params, { headers: this.headers })
      .then((response: AxiosResponse<Stripe.Customer>) => {
        const { data } = response;
        return data;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  };

  updateCustomer = async (
    customerId: string,
    token: Stripe.Token,
  ): Promise<Stripe.Customer> => {
    const params = new URLSearchParams({ source: token.id });

    return axios
      .post(`${CUSTOMER_URL}/${customerId}`, params, { headers: this.headers })
      .then((response: AxiosResponse<Stripe.Customer>) => {
        const { data } = response;
        return data;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  };

  deleteCustomer = async (
    customerId: string,
    cardId: string,
  ): Promise<void> => {
    const DELETE_URL = `${CUSTOMER_URL}/${customerId}/sources/${cardId}`;

    await axios
      .delete(DELETE_URL, { headers: this.headers })
      .catch((error: AxiosError) => {
        throw error;
      });
  };

  chargeCustomer = async (
    customerId: string,
    amountInJPY: number,
  ): Promise<Stripe.Charge> => {
    const params = new URLSearchParams({
      amount: amountInJPY.toString(),
      currency: 'jpy',
      customer: customerId,
      description: `Purchased points worth ¥${amountInJPY}`,
    });

    return axios
      .post(`${CHARGES_URL}`, params, { headers: this.headers })
      .then((response: AxiosResponse<Stripe.Charge>) => {
        const { data } = response;

        return data;
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          throw {
            ...error,
            message: stripeError(error.response.data.error.type),
          };
        }

        throw error;
      });
  };

  // STRIPE API NOTE: Not sure why it's not working

  // createCustomer = async (token: stripe.Token): Promise<Stripe.Customer> => {
  //   console.log('CREATING CARD WITHOUT CUSTOMERID');
  //   try {
  //     const customer = await this.stripe.customers.create({
  //       source: token.id,
  //     });
  //     console.log('CUSTOMER:', customer);
  //     return customer;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // updateCustomer = async (
  //   customerId: string,
  //   token: stripe.Token,
  // ): Promise<Stripe.Customer> => {
  //   console.log('CREATING CARD WITH CUSTOMERID');
  //   try {
  //     const customer = await this.stripe.customers.update(customerId, {
  //       source: token.id,
  //     });
  //     console.log('CUSTOMER:', customer);
  //     return customer;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
}
