const form = document.getElementById("form");
const txtarea = document.getElementById("txtarea");
const section = document.getElementById("section");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newMsg = txtarea.value.trim();

    if (!newMsg) {
        return;
    }

    generateTemplate(newMsg);

    txtarea.value = "";
});

const generateTemplate = (e) => {
    const htmlTemplate = `
        <article class="article">
            <p id="edit-msg">${e}</p>
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Deletar</button>
        </article>
    `;

    section.innerHTML += htmlTemplate;
};

section.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        e.target.parentElement.remove();
    } 
});

section.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-edit")) {
        document.getElementById("edit-msg").contentEditable = true;
    }
});

