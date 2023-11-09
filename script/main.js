import { getUsers } from "./server.js";
import { createCard } from "./card.js";
import { openModal } from "./openModal.js";

export default async function main() {
    const main = document.querySelector(".cards");

    const data = await getUsers();

    //create cards
    data.forEach((item) => {
        createCard(item, openModal);
    });

    //search
    const inputSearch = document.getElementsByClassName("input-search")[0];
    inputSearch.addEventListener("input", (e) => {
        const inputValue = e.target.value.toLowerCase();
        const cardsArray = [...main.getElementsByClassName("data")];
        cardsArray.forEach((card) => {
            card.classList.remove("_hide");
        });
        cardsArray.forEach((card) => {
            const cardName = card
                .getElementsByClassName("name")[0]
                .getElementsByTagName("p")[0].textContent;

            if (cardName.toLowerCase().search(inputValue) === -1) {
                card.classList.add("_hide");
            }
        });
    });

    const btnSearch = document.getElementsByClassName("btn-search")[0];
    btnSearch.addEventListener("click", () => {
        const cardsArray = [...main.getElementsByClassName("data")];
        const inputValue = document
            .getElementsByClassName("input-search")[0]
            .value.toLowerCase();
        cardsArray.forEach((card) => {
            card.classList.remove("_hide");
        });
        cardsArray.forEach((card) => {
            const cardName = card
                .getElementsByClassName("name")[0]
                .getElementsByTagName("p")[0].textContent;

            if (cardName.toLowerCase().search(inputValue) === -1) {
                card.classList.add("_hide");
            }
        });
    });
}
