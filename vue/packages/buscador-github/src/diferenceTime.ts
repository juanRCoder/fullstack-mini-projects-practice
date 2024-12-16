export const differenceTime = (pastDate: string | Date): string => {
  const now = new Date();
  const past = new Date(pastDate);

  const differenceInMilliseconds = now.getTime() - past.getTime();

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Aproximadamente
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} ${years === 1 ? "year" : "years"}`;
  if (months > 0) return `${months} ${months === 1 ? "mount" : "mounts"}`;
  if (weeks > 0) return `${weeks} ${weeks === 1 ? "week" : "weeks"}`;
  if (days > 0) return `${days} ${days === 1 ? "day" : "days"}`;
  if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  if (minutes > 0) return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
};
