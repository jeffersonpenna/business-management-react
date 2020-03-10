export default function formatAddress({
  street,
  number,
  complement,
  neighborhood,
  zipcode,
  city,
  state,
}) {
  let address = `${street}, ${number}`;
  address += complement ? `, ${complement}` : '';
  address += `, ${neighborhood}, ${zipcode}, ${city}-${state}`;

  return address;
}
