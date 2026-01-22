const API_KEY = "54251425-bbebdb07f184131f8f3aa46d2";
let page = 1;
const per_page = 9;
const listEl = document.querySelector(".list");
const btnEl = document.querySelector(".btn");

function getPictureApi() {
    return fetch(
        `https://pixabay.com/api/?key=${API_KEY}&page=${page}&per_page=${per_page}`
    ).then(res => res.json());
}
getPictureApi().then((res) => createImages(res.hits))


function createImages(arr) {
    const item = arr.map(({ largeImageURL, tags }) => {
        return `<li>
      <img src="${largeImageURL}" alt="${tags}" />
    </li>`}).join("");
    listEl.insertAdjacentHTML("beforeend", item);
}

btnEl.addEventListener("click", onClick)

function onClick() {
    page += 1;
    getPictureApi().then((res) => createImages(res.hits))
}