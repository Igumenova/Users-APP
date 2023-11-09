import { getById } from "./server.js";
export const createCard = (item, openModal) => {
    const main = document.querySelector(".cards");
    const card = document.createElement("div");
    card.classList.add("data");
    card.id = item.id;

    const textFields = document.createElement("div");
    textFields.classList.add("data__text-fields");

    const name = document.createElement("div");
    name.classList.add("data__text", "name");
    name.innerHTML = `<p>${item.info.name}</p>`;
    textFields.appendChild(name);

    const date = document.createElement("div");
    date.classList.add("data__text", "date");
    date.innerHTML = `<p>${item.date}</p>`;
    textFields.appendChild(date);

    const login = document.createElement("div");
    login.classList.add("data__text", "login");
    login.innerHTML = `<p>${item.info.login}</p>`;
    textFields.appendChild(login);

    const password = document.createElement("div");
    password.classList.add("data__text", "password");
    password.innerHTML = `<p>${item.info.password}</p>`;
    textFields.appendChild(password);

    const buttons = document.createElement("div");
    buttons.classList.add("data__buttons");

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn-edit");
    btnEdit.innerHTML =
        '<img src="./img/edit.svg" class="img-svg" type="button">';
    buttons.appendChild(btnEdit);

    //button edit
    btnEdit.addEventListener("click", async () => {
        const userInfo = await getById(item.id);
        openModal(userInfo);
    });

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-del");
    btnDelete.innerHTML =
        '<img src="./img/delete_forever.svg"  class="img-svg" type="button">';
    buttons.appendChild(btnDelete);

    card.appendChild(textFields);
    card.appendChild(buttons);

    main.appendChild(card);
};
