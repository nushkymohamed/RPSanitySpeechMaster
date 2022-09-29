export default {
    name: 'communicationBoardFolders',
    type: 'document',
    title: 'Communication Board Folders',
    fields: [
        {
            name: 'folder_name',
            type: 'string',
            title: 'Folder Name'
        },
        {
            name: 'homeImage',
            type: 'image',
            title: 'Home Image'
        },
        {
            name: 'name',
            type: "array",
            of: [{ type: "string" }],
            title: 'Name'
        },
        {
            name: 'image',
            type: "array",
            of: [{ type: "image" }],
            title: 'Images'
            // kk
        },
    ]
}