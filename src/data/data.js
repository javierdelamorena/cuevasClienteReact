




export const data = async (id) => {
    var idAnuncio = id;
    const response = await fetch('https://cuevas-de-ayllon.com/anuncio');
    const data = await response.json();

    if (data.video_anuncio != null) {
        // if (data.video_anuncio.slice((data.video_anuncio.lastIndexOf(".") - 1 >>> 0) + 2) === "mp4") {


        $('#idFoto' + idAnuncio).append('<div class="embed-responsive embed-responsive-21by9"><video class="embed-responsive-item"   style=" margin: 10px; border-radius: 8px;width: 100%;height: 100%;" src="/uploadsAnuncios/' + data.video_anuncio + '" controls autoplay ></video></div>');

        $('#idBoton' + idAnuncio).hide();
    }
    // }
    else if (data.audio_anuncio != null) {
        // if (data.audio_anuncio.slice((data.video_anuncio.lastIndexOf(".") - 1 >>> 0) + 2) === "mp3") {


        $('#idFoto' + idAnuncio).append('<div class="embed-responsive embed-responsive-21by9">' +
            '<audio class="embed-responsive-item"   style=" margin: 10px; border-radius: 8px;width: 100%;"  controls autoplay>' +
            '<source src="/uploadsAnuncios/' + data.audio_anuncio + '" type="audio/ogg">' +
            '<source src="/uploadsAnuncios/' + data.audio_anuncio + '" type="audio/mpeg">' +
            '</audio></div>');

        $('#idBoton' + idAnuncio).hide();
    }
    // }

    else if (data.foto_anuncio != null) {
        $('#idFoto' + idAnuncio).append('<img class="img-thumbnail"  style=" margin: 10px; border-radius: 8px;" src="/uploadsAnuncios/' + data.foto_anuncio + '"  />');

        $('#idBoton' + idAnuncio).hide();
    } else {
        $('#idFoto' + idAnuncio).html('<p style="text-align:center;">Este anuncio no tiene imagen que mostrar</p>');
        $('#idBoton' + idAnuncio).hide();
    }

};





