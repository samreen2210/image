

let currentImageIndex = 0;
const images = [
    "https://expertphotography.b-cdn.net/wp-content/uploads/2019/10/unique-photo-low-angle-view-of-street.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/64fc77b93d9abb399e1a5641/Artistic-close-up-of--a-beautiful-black-woman-/960x0.jpg?height=920&width=711&fit=bounds",
    "https://thumbs.dreamstime.com/b/businessman-red-umbrella-others-unique-different-concept-business-man-red-umbrella-others-unique-different-119333394.jpg",
    "https://cdn.shopify.com/s/files/1/0076/3147/0662/files/Food_Photography___How_to_Take_Unique_and_Creative_Food_Photos_11.jpg?v=1661151189",
    "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/535b071f-a943-404b-a4ee-fcc19646f9cf/52.jpg",
    "https://www.fruitsmith.com/pub/media/mageplaza/blog/post/s/e/seedless_fruits.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tXI5DjxldBskR-Y9KnVPDqIbq1FSHr0-WhJbCqdbNKAu_pn1TbnXluGr7ujLWfl2AuU&usqp=CAU",
    "https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg?w=200&h=200&c=crop",
    "https://static.vecteezy.com/system/resources/previews/032/838/015/non_2x/tranquil-scene-green-meadow-flowing-water-blossoms-reflect-natural-beauty-generated-by-ai-photo.jpg"
];

function openFullImg(src) {
    document.getElementById('fullimg').src = src;
    document.getElementById('fullimgBox').style.display = 'flex';
    currentImageIndex = images.indexOf(src);
}

function closeFullImg() {
    document.getElementById('fullimgBox').style.display = 'none';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('fullimg').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('fullimg').src = images[currentImageIndex];
}
