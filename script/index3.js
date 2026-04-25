const shareBtn = document.getElementById("shareBtn");
const savedBtn = document.getElementById("saveBtn");

const roomFeatureBtn = document.getElementById("Featured");
const room1Btn = document.getElementById("Room1");
const room2Btn = document.getElementById("Room2");

let saved = false;
savedBtn.addEventListener('click', ()=> {
    const textSpan = savedBtn.querySelector(".savetext");
    const icon = savedBtn.querySelector(".saveicon");
    if (saved == false) {
        savedBtn.style.background = "var(--red)";
        savedBtn.style.color = "#ffffff";
        icon.style.filter = "invert(100%)";
        textSpan.textContent = "Saved";
        saved = true;
    }
    else {
        savedBtn.style.backgroundColor = "#ffffff";
        savedBtn.style.color = "#000000";
        icon.style.filter = "invert(0%)";
        textSpan.textContent = "Save";
        saved = false;
    }
})

let selectedRoomId = null;

document.querySelector('.room-table').addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-select');
    if (!btn) return;

    const row = btn.closest('tr');

    if (row.classList.contains('selected-row')) {
        row.classList.remove("selected-row");
        btn.classList.remove("is-selected");
        btn.style.backgroundColor = "var(--blue)"
        btn.textContent = "Select";
        selectedRoomId = null;
    }
    else {
        document.querySelectorAll('.room-table tr').forEach(tr => {
            tr.classList.remove('selected-row');
            const otherBtn = tr.querySelector(".btn-select");
            if (otherBtn) {
                otherBtn.style.backgroundColor = "var(--blue)"
                otherBtn.classList.remove("is-selected");
                otherBtn.textContent = "Select";
            }
        });
        row.classList.add('selected-row');
        btn.classList.add("is-selected");
        btn.textContent = "Picked";
        btn.style.backgroundColor = "var(--red)"
        selectedRoomId = row.id;
    }
});