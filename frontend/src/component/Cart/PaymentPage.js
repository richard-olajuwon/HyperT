import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios'; // for making the API call
import Payment from './Payment';

const PaymentPage = () => {
  const [stripeApiKey, setStripeApiKey] = useState(null);

  useEffect(() => {
    // Fetch the Stripe public key from the backend
    async function getStripeApiKey() {
        try {
          const { data } = await axios.get("/api/v1/stripeapikey");
          setStripeApiKey(data.stripeApiKey);
        } catch (error) {
          console.error('Error fetching Stripe API Key');
        }
    }
    getStripeApiKey();
  }, []);

  
  if (!stripeApiKey) {
    return <div>Loading...</div>;
  }

  return (
    <Elements stripe={loadStripe(stripeApiKey)}>
        <Payment/>
    </Elements>
  );
};

export default PaymentPage;
