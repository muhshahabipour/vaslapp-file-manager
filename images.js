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
        id: 0,
        name: '/ali',
        isDirectory: true,
        data: [{
            id: 11111,
            name: `user11111`,
            linkHost: faker.image.image(),
            linkPath: ''
        }]
    })

    for (let i = 1; i < 20; i++) {
        data.images.directoryInfo.data.push({
            id: i,
            name: `user${i}`,
            linkHost: faker.image.image(),
            linkPath: ''
        })
    }


    return data
}