const TIME_ZONE = "Asia/Bangkok";
const now = new Date();

export default {
  date: now.toLocaleDateString("en-CA", { timeZone: TIME_ZONE }),
  year: Number(now.toLocaleDateString("en-US", { timeZone: TIME_ZONE, year: "numeric" })),
};
