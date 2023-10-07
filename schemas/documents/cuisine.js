export default {
    title: 'Cuisine',
    name: 'cuisine',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Chinese Name',
            name: 'chineseName',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}