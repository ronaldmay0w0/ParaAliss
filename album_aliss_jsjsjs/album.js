new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/Noche.jpg",
          img2: "images/cat 3.jpg",
          img3: "images/Alis_tomadnodfoto.jpg",
          title: "Tierno",
          isOpen: false
        },
        {
          img1: "images/Foto_random_Xd.jpg",
          img2: "images/juntos_noche.jpg",
          img3: "images/yo_sincontetxoXD.jpg",
          title: "^^ fotos random :3",
          isOpen: false,
          
        },
        {
          img1: "images/Alis_fotorandom.png",
          img2: "images/Luna_borroso.jpg",
          img3: "images/foto_juntos.png",
          title: "demasiado random sjsjs^^ :3",
          isOpen: false,
        },
        {
          img1: "images/frase1.jpg",
          img2: "images/frase3.png",
          img3: "images/luna_dormida.jpg",
          title: "Extras",
          isOpen: false,
        },
        {
          img1: "images/frase2.jpg",
          title: "Te amo^^",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});





