export default {
    name: 'communicationBoard',
    type: 'document',
    title: 'Communication Board',
    fields: [
        {
            name: 'type',
            title: 'Communication Board Folder Type',
            type: "reference",
            to: [
                {
                    type: "communicationBoardFolders",
                },
            ],

        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },

    ]
}