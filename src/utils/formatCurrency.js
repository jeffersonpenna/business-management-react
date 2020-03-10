export default function formatCurrency(value, region = 'en-US') {
  const hashCurrent = {
    'en-US': 'USD',
    'pt-BR': 'BRL',
    'pt-PT': 'EUR',
  };

  const valueFormatted = new Intl.NumberFormat(region, {
    style: 'currency',
    currency: hashCurrent[region] || 'USD',
  });

  return valueFormatted.format(value);
}
