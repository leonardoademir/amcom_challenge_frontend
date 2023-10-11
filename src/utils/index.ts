export const formatCurrency = (value: number): string => {
  // Check if the input is a valid number
  if (typeof value !== 'number' || isNaN(value)) {
    return 'Invalid input';
  }

  // Format the number as currency in Brazilian Real (R$)
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2, // Ensure two decimal places
  });

  return formattedValue;
};

export const formatDate = (datetimeString: string): string => {
  const date = new Date(datetimeString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
