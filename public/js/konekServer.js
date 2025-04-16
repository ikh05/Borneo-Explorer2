function combineUrl(base, path) {
    if (base.endsWith('/') && path.startsWith('/')) {
        return base + path.slice(1);
    } else if (!base.endsWith('/') && !path.startsWith('/')) {
        return base + '/' + path;
    }
    return base + path;
}

function postServer(url, data, func = {}) {
    console.log(base_url);
    fetch(combineUrl(base_url, url), {
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
        if(typeof(func.berhasil) === 'function'){
            func.berhasil(result);
        }else{
            console.log("Berhasil:", result);
            alert(result.message);
        }
    })
    .catch(error => {
        if(typeof(func.gagal) === 'function'){
            func.gagal(error);
        }else{
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengirim data");
        }
    });
}

function getServer(url, data, func = {}){
    url = base_url + url
    fetch(combineUrl(base_url, url) + '?' + new URLSearchParams(data).toString(), {
        method: 'GET',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
    })
    .then(response => {
        if (!response.ok) throw new Error("Gagal kirim data");
        return response.json();
    })
    .then(result => {
        if(typeof(func.berhasil) === 'function'){
            func.berhasil(result);
        }else{
            console.log("Berhasil:", result);
            alert(result.message);
        }
    })
    .catch(error => {
        if(typeof(func.gagal) === 'function'){
            func.gagal(error);
        }else{
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengirim data");
        }
    });
}