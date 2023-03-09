export function drawText(ctx, input) {
    ctx.font = "20px Arial";
    ctx.fillText('Last key: ' + input.lastKey, 10, 20);
}