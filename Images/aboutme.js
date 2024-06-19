function changeContent(imagePath, stickerPath, description) {
    document.getElementById('main-image').src = imagePath;
    document.getElementById('sticker').src = stickerPath;
    document.getElementById('description').innerText = description;
}
