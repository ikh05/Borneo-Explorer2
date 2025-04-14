function kirimServer(url, data, func) {
    console.log("ini data yang di kirm", data);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error("Gagal kirim data");
        return response.json();
    })
    .then(result => {
        if(typeof(func) === 'function'){
            func(result);
        }else{
            console.log("Berhasil:", result);
            alert(result.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim data");
    });
}
  