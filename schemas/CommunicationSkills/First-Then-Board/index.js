export default {
    name: 'first-then-Board',
    type: 'document',
    title: 'First Then Board',
    fields: [
        {
            name: 'tasks',
            type: "array",
            of: [{ type: "image" }],
            title: 'Tasks'
        },
        {
            name: 'rewards',
            type: "array",
            of: [{ type: "image" }],
            title: 'Rewards'
        }

    ],
}