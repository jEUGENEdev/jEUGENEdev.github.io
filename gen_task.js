function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(function() {
    $("#generate").mouseenter(function() {
        $(this).animate({backgroundColor: "#C79500"}, 140);
        return false;
    }).mouseout(function() {
       $(this).animate({backgroundColor: "#FFFFFF"}, 140);
       return false;
    }).on('click', async function () {
        let num = document.getElementById("task-number");
        if (num.value !== "") {
            let response = await fetch('https://kompege.ru/api/v1/task/number/' + num.value);
            if (response.ok) {
                let json = await response.json();
                let randTask = await json[getRandomArbitrary(0, json.length)];
                let block = document.getElementById("task");
                let head = document.createElement('a');
                head.style = "font-size: 36px";
                head.innerText = "Задание номер " + num.value;
                let text = document.createElement('div');
                text.innerHTML = randTask["text"];
                block.innerHTML = "";
                block.append(head, text);
                if(randTask.files !== undefined) {
                    let files = randTask.files;
                    let divFiles = document.createElement("div");
                    for (let i = 0; i < files.length; i++) {
                        let file = document.createElement("a");
                        file.style = "margin-right: 1vw";
                        file.innerText = files[i].name;
                        file.download = files[i].name;
                        file.href = "https://kompege.ru" + files[i].url;
                        divFiles.append(file);
                    }
                    block.append(divFiles);
                }
                let answ = document.createElement("button");
                answ.innerText = "Ответ";
                answ.style = "width: 4vw";
                block.append(answ);
                answ.onclick = function() {
                    let key = document.createElement("a");
                    key.innerText = randTask.key;
                    block.append(key);
                };
            } else
                window.location.reload();
        }
        else
            alert("Введите номер задачи");
    });

    $("#task-number").on("input", function() {
        let num = Number(this.value);
        if(num < 1 || num > 27) {
            this.value = "";
            alert('Превышен числовой диапазон заданий!');
        }
        return false;
    });
});
