const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

// const titles = books.map(title => title.title);
// const author = books.map(author => author.author);
// const read = books.map(alreadyRead => alreadyRead.alreadyRead);
// const img = books.map(img => img.img);

(() => {
  // target parent element - ul
  // create li items - 4
  // for each li item attach one object from array of books
  const main = document.querySelector('main');
  const container = document.createElement('div');
  container.setAttribute('class', 'container')

  books.forEach(book => {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'book-list card-column');

    const liImg = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', book.img);

    const liTitle = document.createElement('li');
    const h2 = document.createElement('h2');
    const title = document.createTextNode(book.title);

    const liAuthor = document.createElement('li');
    const h3 = document.createElement('h3');
    const author = document.createTextNode(book.author);

    const liButton = document.createElement('li');
    const status = document.createElement('button');
    const statusText = () => {
      if (book.alreadyRead === true) {
        return "Read";
      } else {
        return "To read";
      }
    }
    status.append(statusText());
    liButton.append(status);
    h3.append(author);
    liAuthor.append(h3)
    h2.append(title);
    liTitle.append(h2);
    liImg.append(img);
    ul.append(liImg, liTitle, liAuthor, liButton);
    container.prepend(ul);
  });

  main.append(container);
})();