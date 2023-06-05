let employeeManager = [];
const getDataField = document.getElementById("dataShow");

document.getElementById("employeeData").addEventListener("submit", (e) => {
  e.preventDefault();
  totalSalary();
  showEmployeeData();

  getDataField.style.display = "";
});

function totalSalary() {
  const nameInput = document.getElementById("employeeName");
  const employeeName = nameInput.value;

  const dailySalaryInput = document.getElementById("dailySalary");
  const dailySalary = dailySalaryInput.value;

  const totalWorkDayInput = document.getElementById("totalWorkDay");
  const totalWorkDay = totalWorkDayInput.value;

  const getTotalSalary = sumSalary(dailySalary, totalWorkDay);

  const employeeData = employeeDataGrouping(
    employeeName,
    dailySalary,
    totalWorkDay,
    getTotalSalary
  );

  employeeManager.push(employeeData);

  console.log(employeeManager);
  nameInput.value = "";
  dailySalaryInput.value = "";
  totalWorkDayInput.value = "";

  return;
}

function employeeDataGrouping(
  employeeName,
  dailySalary,
  totalWorkDay,
  totalSalary
) {
  return {
    employeeName,
    dailySalary,
    totalWorkDay,
    totalSalary,
  };
}

function sumSalary(dailySalary, totalWorkDay) {
  return dailySalary * totalWorkDay;
}

console.log(employeeManager);

function showEmployeeData() {
  for (let i = 0; i < employeeManager.length; i++) {
    let employee = employeeManager[i];

    let employeeName = employee.employeeName;
    let dailySalary = employee.dailySalary;
    let totalWorkDay = employee.totalWorkDay;
    let totalSalary = employee.totalSalary;

    alert(
      `Total gaji bulanan Sdr.${employeeName} dengan gaji harian sebesar: Rp. ${dailySalary} dan jumlah hari kerja sebanyak:${totalWorkDay} hari adalah ${totalSalary}`
    );
  }
}

function closeTable() {
  getDataField.style.display = "none";
}
