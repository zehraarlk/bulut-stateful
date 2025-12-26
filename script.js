// Sayfa açıldığında verileri yükle
window.onload = function() {
    listele();
};

function kaydet() {
    let note = document.getElementById('noteInput').value;
    if (note) {
        let notes = JSON.parse(localStorage.getItem('notlar') || '[]');
        notes.push(note);
        localStorage.setItem('notlar', JSON.stringify(notes));
        document.getElementById('noteInput').value = '';
        listele();
    }
}

function listele() {
    let notes = JSON.parse(localStorage.getItem('notlar') || '[]');
    let list = document.getElementById('noteList');
    list.innerHTML = notes.map(n => `<li>${n}</li>`).join('');
}
