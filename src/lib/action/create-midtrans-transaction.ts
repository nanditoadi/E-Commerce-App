"use server";

// @ts-expect-error
import midtransClient from "midtrans-client";
import { nanoid } from "nanoid";

export const createMidtransTransaction = async (
  grossAmount: number,
  firstName: string,
  email: string,
  phone: string,
) => {
  // Create Snap API instance
  let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const orderId = nanoid();

  let parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: grossAmount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: firstName,
      // last_name: "pratama",
      email: email,
      phone: phone,
    },
  };

  const transaction: object = await snap.createTransaction(parameter);

  return transaction;
};
