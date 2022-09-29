export default {
    name: 'comprehensionBuilding',
    type: 'document',
    title: 'Comprehension Building',
    fields: [
        {
            name: 'level',
            type: 'string',
            title: 'Level'
        },
        {
            name: 'activity',
            type: 'string',
            title: 'Activity'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'story',
            type: "array",
            of: [{ type: "string" }],
            title: 'Story'
        },
        {
            name: 'questions',
            type: "array",
            of: [{ type: "string" }],
            title: 'Questions'
        },
        {
            name: 'answers',
            type: "array",
            of: [{ type: "string" }],
            title: 'Answers'
        },
        {
            name: 'correct_answers',
            type: "array",
            of: [{ type: "string" }],
            title: 'Correct Answers'
        }
    ]
}