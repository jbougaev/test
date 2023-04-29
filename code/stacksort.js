function sortStack(stack) {
    stack = sort(stack);
    return stack;
}

function sort(stack) {
    if (stack.length === 0) {
        return stack;
    }
    const top = stack.pop();
    sort(stack);
    insert(stack, top);
    return stack;
}

function insert(stack, el) {
    if (stack.length === 0 || stack[stack.length - 1] <= el) {
        stack.push(el);
        return;
    }
    const top = stack.pop();
    insert(stack, el);
    stack.push(top);
}

console.log(sortStack([-5, -12]));