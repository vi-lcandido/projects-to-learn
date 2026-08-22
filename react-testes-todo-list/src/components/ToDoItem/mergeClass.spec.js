import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
    it.each([
        { input: true, output: "todo-item completed" },
        { input: false, output: "todo-item" }
    ])("deveria retornar as classe $output quando o item for $input", 
        ({input, output}) => {
            expect(mergeClass(input)).toBe(output);
        })
})