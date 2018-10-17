const faker = require('faker')

module.exports = (req, res) => {
  const page = Number(req.query.page || 1)
  const dummyDesc = faker.lorem.paragraph()
  const description =
    dummyDesc.length > 140 ? dummyDesc.slice(0, 140) + '...' : dummyDesc

  const dummyTitle = faker.lorem.sentence()
  const title =
    dummyTitle.length > 82 ? dummyTitle.slice(0, 82) + '...' : dummyTitle

  const data = {
    rows: [],
    page
  }
  for (let index = 0; index < 10; index++) {
    data.rows.push({
      date: faker.date.past(),
      title,
      name: faker.name.findName(),
      description,
      thumbnail: faker.image.avatar()
    })
  }
  res.render('explore', data)
}
