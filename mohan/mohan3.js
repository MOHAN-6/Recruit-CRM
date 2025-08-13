document.addEventListener("DOMContentLoaded", (mohan) => {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".tab-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.section).classList.add("active");
    });
  });

  document.getElementById("quickSearch").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll("main ul li").forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });
});