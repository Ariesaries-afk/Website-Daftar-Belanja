let nomor = 0;

function tambahBelanja() {
    let item = document.getElementById("item").value;
    let jumlah = document.getElementById("jumlah").value;
    let status = document.getElementById("status").value;

    if (item === "" || jumlah === "" || Number(jumlah) <= 0) {
        alert("Silakan isi data dengan benar!");
        return;
    }

    nomor++;

    let tabel = document.getElementById("daftarBelanja");
    let baris = tabel.insertRow();

    baris.innerHTML = `
        <td>${nomor}</td>
        <td>${item}</td>
        <td>${jumlah}</td>
        <td>
            <select onchange="ubahStatus(this)">
                <option value="Belum Dibeli"
                ${status === "Belum Dibeli" ? "selected" : ""}>
                Belum Dibeli</option>

                <option value="Sudah Dibeli"
                ${status === "Sudah Dibeli" ? "selected" : ""}>
                Sudah Dibeli</option>
            </select>
        </td>
        <td>
            <button class="hapus" onclick="hapusBarang(this)">
                Hapus
            </button>
        </td>
    `;

    document.getElementById("item").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("status").value = "Belum Dibeli";
}

function ubahStatus(select) {
    select.value = select.value;
}

function hapusBarang(button) {
    button.parentElement.parentElement.remove();

    let tabel = document.getElementById("daftarBelanja");

    for (let i = 0; i < tabel.rows.length; i++) {
        tabel.rows[i].cells[0].innerText = i + 1;
    }

    nomor = tabel.rows.length;
}