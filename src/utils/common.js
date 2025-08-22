// date formate dd-mm-yyyy
export const dateFormate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

export const calculatePlanEndDate = (startDateStr, planType) => {
  const months = +planType.replace(/\D/g, "");
  const date = new Date(startDateStr);

  date.setMonth(date.getMonth() + months);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T23:59`;
};

export const calculatePlanEndDateWithTotalDays = (startDateStr, planType) => {
  const months = +planType.replace(/\D/g, "");
  const date = new Date(startDateStr);

  date.setMonth(date.getMonth() + months);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Map of fixed plan durations
  const planDaysMap = {
    1: 30,
    2: 60,
    3: 90,
    4: 120,
    5: 150,
    6: 180,
    7: 210,
    8: 240,
    9: 270,
    10: 300,
    11: 330,
    12: 365,
  };

  const totalDays = planDaysMap[months] || 0;

  return {
    endDate: `${year}-${month}-${day}T23:59`,
    totalDays,
  };
};
