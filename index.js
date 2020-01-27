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

// use sort method to sort array by author's last name:
const sortedBooks = books.sort(function (a, b) {
  const nameA = a.author.split(' ').reverse().join(', ');
  const nameB = b.author.split(' ').reverse().join(', ');
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
});

(() => {
  // target parent element - main:
  const main = document.querySelector('main');

  // create a div to contain all books:
  const container = document.createElement('div');
  container.setAttribute('class', 'book-list')

  // for each book create a new ul with list items and the book data:
  sortedBooks.forEach(book => {
    // create ul
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'book card list-unstyled d-flex justify-content-between');

    // create list item for book cover:
    const liImg = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', book.img);
    img.setAttribute('class', 'book book-cover')

    // create the link to the book cover:
    const link = document.createElement('a');
    link.setAttribute('href', book.img);
    link.setAttribute('target', '_blank');

    // create list item for book title:
    const liTitle = document.createElement('li');
    liTitle.setAttribute('class', 'pt-3 px-3')
    const title = document.createTextNode(book.title);
    console.log(title);

    // create list item for book author:
    const liAuthor = document.createElement('li');
    liAuthor.setAttribute('class', 'pb-3 px-3 h6 text-muted small author');
    // make author's last name appear first:
    const author = document.createTextNode(book.author.split(' ').reverse().join(', '));

    // create list item for read status:
    const liButton = document.createElement('li');
    liButton.setAttribute('class', 'border-top bg-light p-3 d-flex justify-content-end');
    //create button for read status:
    const status = document.createElement('button');
    status.setAttribute('class', 'btn btn-success btn-sm py-0 px-1 rounded-1');
    // create a function that makes the button fit the status:
    const statusText = () => {
      if (book.alreadyRead === true) {
        return "Read";
      } else {
        status.setAttribute('class', 'btn btn-dark btn-sm py-0 px-1 rounded-1');
        return "To read";
      }
    };

    // append everything:
    status.append(statusText());
    liButton.append(status);
    liAuthor.append(author);
    liTitle.append(title);
    link.append(img);
    liImg.append(link);
    ul.append(liImg, liTitle, liAuthor, liButton);
    container.append(ul);
  });

  // append final result so it appears on website:
  main.append(container);
})();