export const calculateAmount = (amount, scale) => {
  return (amount * Math.pow(10, -scale)).toFixed(scale);
}

export const getMonetizationTag = () => {
  return document.querySelector('meta[name="monetization"]');
}

export const removeMonetizationTag = () => {
  return document.querySelector('meta[name="monetization"]').remove();
}

export const stopMonetization = () => {
  return removeMonetizationTag();
}