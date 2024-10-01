let path = 'img/'
let img = ['saludo1.jpg', 'saludo2.jpg', 'saludo3.jpg', 'saludo4.jpg']

// Lehenengo IDa 0 bihurtu (0)
let img_id = 0

// Hurrengo irudia kargatzeko funtzioa
function addImage(){
    // img_id > 3 bada (lehenengoa 0 delarik)
    if(img_id > img.length - 1){
        window.alert('Ezin dira irudi gehiago gehitu')
    } else {
        // Irudia dagoeneko erakusten ari bada
        while (document.getElementById(img_id) != null) {
            img_id++
        }

        // Irudi elementua sortu eta dokumentuan kargatu
        var image = document.createElement('img')
        image.id = img_id
        image.src = path + img[img_id]
        image.addEventListener("dblclick", function() {
            removeImage(image.id)
        })
        document.body.appendChild(image)

        // Eguneratu img_id
        img_id++
    }
}

// Irudia kentzeko funtzioa
function removeImage(id){
    
    selected_img = document.getElementById(id)
    document.body.removeChild(selected_img)

    // Aurkitu hutsik dagoen lehenengo IDa
    for (let i = 0; i < img.length; i++) {
        if(document.getElementById(i) == null){
            img_id = i
            break
        }
    }
}
