import { redactUser, getById } from "./server.js";

export const openModal = (item) => {
    const modal = document.querySelector(".modal");
    const inputs = modal.getElementsByClassName("modal__input");

    modal.classList.add("_active");
    modal
        .getElementsByClassName("modal__id")[0]
        .getElementsByTagName("p")[0].textContent = item.id;

    //cancel button
    modal.getElementsByClassName("cancel")[0].addEventListener("click", () => {
        modal.classList.remove("_active");
        //clear inputs
        for (let input of inputs) {
            input.value = "";
        }
    });

    //save button
    modal.getElementsByClassName("save")[0].addEventListener(
        "click",
        async () => {
            const newData = {
                info: {
                    name:
                        inputs[0].value !== ""
                            ? inputs[0].value
                            : item.info["name"],
                    login:
                        inputs[1].value !== ""
                            ? inputs[1].value
                            : item.info["login"],
                    password:
                        inputs[2].value !== ""
                            ? inputs[2].value
                            : item.info["password"],
                },
            };

            //clear inputs
            for (let input of inputs) {
                input.value = "";
            }
            modal.classList.remove("_active");

            //add new info to card
            await redactUser(item.id, newData);
            const editedCard = document.getElementById(item.id);
            const newItem = await getById(item.id);

            editedCard
                .getElementsByClassName("name")[0]
                .getElementsByTagName("p")[0].textContent =
                newItem.info["name"];
            editedCard
                .getElementsByClassName("login")[0]
                .getElementsByTagName("p")[0].textContent =
                newItem.info["login"];
            editedCard
                .getElementsByClassName("password")[0]
                .getElementsByTagName("p")[0].textContent =
                newItem.info["password"];
        },
        { once: true }
    );

    //close modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove("_active");
            //clear inputs
            for (let input of inputs) {
                input.value = "";
            }
        }
    };

    //swipe
    const modalContent = modal.getElementsByClassName("modal-content")[0];
    let touchstartY = 0;
    let touchendY = 0;

    modalContent.addEventListener(
        "touchstart",
        (e) => {
            touchstartY = e.changedTouches[0].screenY;
        },
        { passive: true }
    );

    modalContent.addEventListener("touchend", (e) => {
        touchendY = e.changedTouches[0].screenY;
        if (touchstartY < touchendY) {
            modal.classList.remove("_active");
            touchstartY = 0;
            touchendY = 0;

            //clear inputs
            for (let input of inputs) {
                input.value = "";
            }
        }
    });
};
