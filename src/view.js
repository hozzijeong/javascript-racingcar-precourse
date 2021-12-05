export const showRacingProcess = (object) => {
    const process = object.map(
        (element) => `${element.name} : ${"-".repeat(element.distance)}`
    );

    return `<p>${process.join("</br>")}</p>`;
};

export const showResult = (object) => {
    const winners = object.join(",");
    console.log(winners, object, "@");
    return `<p>최종우승자:<span id="racing-winners">${winners}</span></p>`;
};

export const addApp = (string) => {
    const $app = document.getElementById("app");
    $app.innerHTML += string;
};
