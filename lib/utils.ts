export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const clsx = (...values: Array<string | false | undefined | null>) => {
  return values.filter(Boolean).join(' ');
};
