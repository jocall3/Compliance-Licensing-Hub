export const parseISO = (dateString: string): Date => {
  if (!dateString) return new Date();
  return new Date(dateString);
};

export const isPast = (date: Date): boolean => {
  return new Date() > date;
};

export const isFuture = (date: Date): boolean => {
  return new Date() < date;
};

export const addMonths = (date: Date, months: number): Date => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
};

export const addDays = (date: Date, days: number): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

export const format = (date: Date, formatStr: string): string => {
  if (isNaN(date.getTime())) return 'Invalid Date';

  const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = date.getDate();
  const m = monthsShort[date.getMonth()];
  const y = date.getFullYear();
  const H = date.getHours().toString().padStart(2, '0');
  const M = date.getMinutes().toString().padStart(2, '0');
  const monthNum = (date.getMonth() + 1).toString().padStart(2, '0');
  const dayNum = d.toString().padStart(2, '0');

  if (formatStr === 'yyyy-MM-dd') {
      return `${y}-${monthNum}-${dayNum}`;
  }
  if (formatStr === 'MMM d, yyyy') {
      return `${m} ${d}, ${y}`;
  }
  if (formatStr === 'MMM d, yyyy HH:mm') {
      return `${m} ${d}, ${y} ${H}:${M}`;
  }
  if (formatStr === 'MMM yyyy') {
      return `${m} ${y}`;
  }
  
  return date.toLocaleDateString();
};
