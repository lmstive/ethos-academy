export function waLink(phoneIntl: string, msg: string) {
  const text = encodeURIComponent(msg);
  return `https://wa.me/${phoneIntl}?text=${text}`;
}

// atalhos com os dois contatos
export const WAPP = {
  paulo: (msg: string) => waLink("5545998461866", msg),
  jeff: (msg: string) => waLink("5545998112079", msg),
};
