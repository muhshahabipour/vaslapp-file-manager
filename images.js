const faker = require("faker");


module.exports = () => {
    const data = {
        images: {
            status: 1,
            code: 200,
            msg: "دریافت اطلاعات با موفقیت",
            directoryInfo: {
                data: []
            }

        }
    }

    data.images.directoryInfo.data.push({
        id: '/' + faker.random.word(),
        name: '/' + faker.random.word(),
        isDirectory: true
    })

    for (let i = 1; i < 7; i++) {
        data.images.directoryInfo.data.push({
            id: i,
            name: `user${i}`,
            linkHost: faker.image.image(),
            linkPath: ''
        })
    }


    return data
}