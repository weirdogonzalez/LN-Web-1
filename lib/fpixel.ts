declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const fire = (...args: unknown[]) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
};

export const trackViewContent = (contentName: string) =>
  fire("track", "ViewContent", { content_name: contentName });

export const trackInitiateCheckout = () => fire("track", "InitiateCheckout");

export const trackLead = () => fire("track", "Lead");

export const trackCompleteRegistration = () => fire("track", "CompleteRegistration");

export const trackSubscribe = (value: number) =>
  fire("track", "Subscribe", { value, currency: "BDT", predicted_ltv: String(value * 12) });

export const trackContact = () => fire("track", "Contact");
