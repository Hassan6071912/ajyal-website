document.addEventListener("DOMContentLoaded", loadEvents);

function loadEvents() {
    let events = JSON.parse(localStorage.getItem("events")) || [];
    let eventsList = document.getElementById("events-list");
    eventsList.innerHTML = "";  

    events.forEach((event, index) => {
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <a href="register.html" class="btn">سجل الآن</a>
            <button onclick="deleteEvent(${index})" class="delete-btn">حذف</button>
        `;
        eventsList.appendChild(eventDiv);
    });
}

function addEvent() {
    let title = document.getElementById("event-title").value;
    let description = document.getElementById("event-description").value;

    if (title.trim() === "" || description.trim() === "") {
        alert("يرجى إدخال عنوان ووصف الفعالية!");
        return;
    }

    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push({ title, description });
    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("event-title").value = "";
    document.getElementById("event-description").value = "";

    loadEvents();
}

function deleteEvent(index) {
    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));

    loadEvents();
}

document.addEventListener("DOMContentLoaded", function() {
    let isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin === "true") {
        document.getElementById("adminPanel").style.display = "block"; // إظهار لوحة الإدارة
    }
});

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "login.html"; // تحويل إلى تسجيل الدخول بعد تسجيل الخروج
}
