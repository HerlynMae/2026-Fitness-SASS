var slider = tns({
  container: ".homeClass__slider",
  items: 3,
  speed: 200,
  gutter: 0,
  slideBy: "page",
  autoplay: true,
  navPosition: "bottom",
  controls: false,
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
