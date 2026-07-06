export const paypalDonateUrl = process.env.NEXT_PUBLIC_PAYPAL_DONATE_URL?.trim() || "";

export const donationsEnabled = paypalDonateUrl.length > 0;
