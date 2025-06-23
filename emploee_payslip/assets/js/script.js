document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    alert(Welcome);
  } else {
    alert("Please enter both username and password.");
  }
});


  if (document.getElementById("payrollForm")) {
  document.getElementById("payrollForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const payrollData = {
      empName: document.getElementById("empName").value,
      empRole: document.getElementById("empRole").value,
      empId: document.getElementById("empId").value,
      date: document.getElementById("date").value,
      basicSalary: parseFloat(document.getElementById("basicSalary").value),
      totalSalary: parseFloat(document.getElementById("totalSalary").value),
      workingDays: parseInt(document.getElementById("workingDays").value),
      presentDays: parseInt(document.getElementById("presentDays").value),
      leaveDays: parseInt(document.getElementById("leaveDays").value),
      additions: parseFloat(document.getElementById("additions").value || 0),
      deductions: parseFloat(document.getElementById("deductions").value || 0)
    };

    localStorage.setItem("payrollData", JSON.stringify(payrollData));
    window.location.href = "./payslip.html";
  });
}


  document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(localStorage.getItem("payrollData"));

    if (data) {
      document.getElementById("empName").textContent = data.empName;
      document.getElementById("date").textContent = data.date;
      document.getElementById("empId").textContent = data.empId;
      document.getElementById("month").textContent = new Date(data.date).toLocaleString('default', { month: 'long' });
      document.getElementById("empRole").textContent = data.empRole;

      document.getElementById("empId2").textContent = data.empId;
      document.getElementById("empName2").textContent = data.empName;
      document.getElementById("basicSalary").textContent = data.basicSalary;
      document.getElementById("totalSalary").textContent = data.totalSalary;
      document.getElementById("additions").textContent = data.additions;
      document.getElementById("deductions").textContent = data.deductions;

      const totalEarnings = data.totalSalary + data.additions - data.deductions;
      document.getElementById("totalEarnings").textContent = totalEarnings.toFixed(2);
    }
  });