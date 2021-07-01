Vue.config.devtools = true;

new Vue({
  el: "#box",
  data: {
    contactsList: [
      {
        name: "Michele",
        avatar: "avatar_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "avatar_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "",
            status: "",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "",
            status: "",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "avatar_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "",
            status: "",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "",
            status: "",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "avatar_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Michele",
        avatar: "avatar_5",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Michele",
        avatar: "avatar_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Michele",
        avatar: "avatar_7",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "",
            status: "",
          },
        ],
      },
      {
        name: "Michele",
        avatar: "avatar_8",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "",
            status: "",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "",
            status: "",
          },
        ],
      },
    ],
  },
  methods: {
    pfp: (img) => 'img/' + img + '.jpg'
  },
});
