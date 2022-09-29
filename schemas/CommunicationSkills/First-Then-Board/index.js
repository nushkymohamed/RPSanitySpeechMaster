export default {
    name: 'first-then-Board',
    type: 'document',
    title: 'First Then Board',
    fields: [
        {
            name: 'tasks',
            type: "reference",
            to: [
                {
                    type: "first-then-Board-Tasks",
                },
            ],
            title: 'Tasks'
        },
        {
            name: 'rewards',
            type: "reference",
            to: [
                {
                    type: "first-then-Board-Rewards",
                },
            ],
            title: 'Rewards'
        }

    ],
}