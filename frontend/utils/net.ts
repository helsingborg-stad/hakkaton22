async function getIPFromAmazon(): Promise<string> {
  const res = await fetch("https://checkip.amazonaws.com/");
  return res.text();
}

export const getIP = getIPFromAmazon;
