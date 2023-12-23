export const getFormatedTime = (ms: number) => {
  const min = Math.floor(ms / 60_000);
  const sec = Math.floor((ms % 60_000) / 1000);
  const msRemaining = ms % 1000;
  const formattedMin = String(min).padStart(2, "0");
  const formattedSec = String(sec).padStart(2, "0");
  const formattedMs = String(msRemaining).padStart(3, "0");

  return `${formattedMin}:${formattedSec}:${formattedMs}`;
};
