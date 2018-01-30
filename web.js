var points = [
    [
        [60, 50],
        [20, 50],
        [10, 40],
        [20, 30],
        [30, 50]
    ],
    [
        [30, 10],
        [50, 20],
        [60, 30],
        [70, 40],
        [80, 50]
    ],
    [
        [20, 50],
        [30, 40],
        [40, 30],
        [50, 20],
        [60, 10]
    ]
];


var colors = ['black', 'blue', 'green'];
var ele = document.getElementById("firstCan");
if (ele.getContext) {
    var ctx = ele.getContext('2d');
    ctx.strokeRect(0, 0, 600, 300);
    points.forEach((element, i, array) => {
        setTimeout(() => {
            ctx.beginPath();
            ctx.moveTo(0, 100);
            ctx.strokeStyle = colors[i];
            for (let index = 0; index < element.length; index++) {
                ctx.lineTo(element[index][0], element[index][1]);
            }
            ctx.stroke();
        }, i * 3000);
    });
}