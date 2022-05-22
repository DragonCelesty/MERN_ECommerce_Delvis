const products = [
  {
    slug: "1",
    title: "Product 1",
    price: 100,
    image: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 1",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "2",
    title: "Product 2",
    price: 200,
    image: "https://picsum.photos/id/238/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 2",
    smallDescription: "lorem ipsum dolor sit amet",
  },

  {
    slug: "3",
    title: "Product 3",
    price: 300,
    image: "https://picsum.photos/id/239/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 3",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "4",
    title: "Product 4",
    price: 400,
    image: "https://picsum.photos/id/236/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 4",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "5",
    title: "Product 5",
    price: 500,
    image: "https://picsum.photos/id/235/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 5",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "6",
    title: "Product 1",
    price: 100,
    image: "https://picsum.photos/id/234/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 1",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "7",
    title: "Product 2",
    price: 200,
    image: "https://picsum.photos/id/233/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 2",
    smallDescription: "lorem ipsum dolor sit amet",
  },

  {
    slug: "8",
    title: "Product 3",
    price: 300,
    image: "https://picsum.photos/id/232/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 3",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "9",
    title: "Product 4",
    price: 400,
    image: "https://picsum.photos/id/231/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 4",
    smallDescription: "lorem ipsum dolor sit amet",
  },
  {
    slug: "10",
    title: "Product 5",
    price: 500,
    image: "https://picsum.photos/id/230/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.",
    category: "category 1",
    smallTitle: "Product 5",
    smallDescription: "lorem ipsum dolor sit amet",
  },
];

export default products;
