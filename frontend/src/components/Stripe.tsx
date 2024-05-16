import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const GiftPaymentForm: React.FC<{ clientSecret: string }> = ({
  clientSecret,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleGiftPayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("CardElement is not available");
      return;
    }

    try {
      setLoading(true);
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Jenny Rosen",
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        // Show error to your user
      } else {
        // Payment succeeded
        // Show a thank you message to your user
      }
    } catch (error) {
      console.error("Error occurred during payment:", error);
      // Show error to your user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CardElement />
      <button
        className="font-poppins text-white bg-primary py-2 px-4 rounded-b-xl hover:bg-secondary"
        disabled={loading}
        onClick={handleGiftPayment}
      >
        Gift
      </button>
    </div>
  );
};
export default GiftPaymentForm;
