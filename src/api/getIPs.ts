export const getIPs = async (ip?: string) => {
  const response = await fetch(`https://ipwho.is/${ip ?? ''}`);
  const data = await response.json();
  return data;
};
