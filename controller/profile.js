const faker = require('faker')

module.exports = (req, res, next) => {
  const dummyDesc = faker.lorem.paragraph()
  const description =
    dummyDesc.length > 140 ? dummyDesc.slice(0, 140) + '...' : dummyDesc

  const dummyTitle = faker.lorem.sentence()
  const title =
    dummyTitle.length > 82 ? dummyTitle.slice(0, 82) + '...' : dummyTitle
  const page = req.query.page || 1

  const data = {
    rows: [],
    name: faker.name.findName(),
    nim: 16651021,
    thumbnail: faker.image.avatar(),
    page
  }

  for (let index = 0; index < 4; index++) {
    data.rows.push({
      date: faker.date.past(),
      title,
      name: faker.name.findName(),
      description,
      thumbnail: faker.image.avatar()
    })
  }

  res.render('profile', data)
}
