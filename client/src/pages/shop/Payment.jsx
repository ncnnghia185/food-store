import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  const [cart] = useCart();
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const totalPrice = parseFloat(cartTotal.toFixed(2));
  return (
    <div className="max-width-screen-2xl container mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={totalPrice} />
      </Elements>
    </div>
  );
};

export default Payment;
