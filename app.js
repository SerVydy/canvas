
const figura_1 = () => {
    const canvas = document.getElementById("canvas_1");
    const context = canvas.getContext("2d");
    
    const path1 = new Path2D();     // первый путь
    path1.moveTo(20, 100);
    path1.lineTo(140, 10);
    path1.lineTo(260, 100);
    path1.closePath();    //  закрываем путь
    context.strokeStyle = "blue";
    context.stroke(path1);
}

const figura_1_fill = () => {
    const canvas = document.getElementById("canvas_1_fill");
    const context = canvas.getContext("2d");
    
    const path1 = new Path2D();     // первый путь
    path1.moveTo(20, 100);
    path1.lineTo(140, 10);
    path1.lineTo(260, 100);
    path1.closePath();    //  закрываем путь
    context.fillStyle = "blue";
    context.fill(path1);
}

const figura_2 = () => {
    const canvas = document.getElementById("canvas_2");
    const context = canvas.getContext("2d");
    
    const path2 = new Path2D();     // первый путь
    path2.moveTo(20, 10);
    path2.lineTo(140, 100);
    path2.lineTo(260, 10);
    path2.closePath();    //  закрываем путь
    context.strokeStyle = "red";
    context.stroke(path2);
}

const figura_2_fill = () => {
    const canvas = document.getElementById("canvas_2_fill");
    const context = canvas.getContext("2d");
    
    const path2 = new Path2D();     // первый путь
    path2.moveTo(20, 10);
    path2.lineTo(140, 100);
    path2.lineTo(260, 10);
    path2.closePath();    //  закрываем путь
    context.fillStyle = "red";
    context.fill(path2);
}

const check = () => {
    const div_1 = document.querySelector('#figura_1')
    const items_1 = div_1.querySelectorAll('canvas')
    const div_2 = document.querySelector('#figura_2')
    const items_2 = div_2.querySelectorAll('canvas')

    div_1.addEventListener('click', () => {
        for (const item of items_1) {
            item.classList.toggle('active')
        }
        for (const item of items_2) {
            item.classList.toggle('active')
        }
    })

    div_2.addEventListener('click', () => {
        for (const item of items_1) {
            item.classList.toggle('active')
        }
        for (const item of items_2) {
            item.classList.toggle('active')
        }
    })
}

figura_1()
figura_2()
figura_1_fill()
figura_2_fill()
check()