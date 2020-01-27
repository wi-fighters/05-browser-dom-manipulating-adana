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
  container.setAttribute('class', 'book-list')

  const authors = books.map(author => author.author.split(' ').reverse().join(', '));
  console.log(authors);
  authors.sort();

  books.forEach(book => {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'book card list-unstyled d-flex justify-content-between');

    const liImg = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', book.img);
    img.setAttribute('class', 'book book-cover')

    const link = document.createElement('a');
    link.setAttribute('href', book.img);
    link.setAttribute('target', '_blank');

    const liTitle = document.createElement('li');
    liTitle.setAttribute('class', 'pt-3 px-3')
    const title = document.createTextNode(book.title);
    console.log(title);

    const liAuthor = document.createElement('li');
    liAuthor.setAttribute('class', 'pb-3 px-3 h6 text-muted small')
    const author = document.createTextNode(book.author.split(' ').reverse().join(', '));

    const liButton = document.createElement('li');
    liButton.setAttribute('class', 'border-top bg-light p-3 d-flex justify-content-end')
    const status = document.createElement('button');
    status.setAttribute('class', 'btn btn-success btn-sm py-0 px-1 rounded-1')
    const statusText = () => {
      if (book.alreadyRead === true) {
        return "Read";
      } else {
        status.setAttribute('class', 'btn btn-dark btn-sm py-0 px-1 rounded-1');
        return "To read";
      }
    }


    status.append(statusText());
    liButton.append(status);
    liAuthor.append(author);
    liTitle.append(title);
    link.append(img);
    liImg.append(link);
    ul.append(liImg, liTitle, liAuthor, liButton);
    container.prepend(ul);
  });

  main.append(container);
})();