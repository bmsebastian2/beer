if (screen.width < 820) {
  //   window.open(
  //     "myPopupAd.html",
  //     "My Popup Window",
  //     "height=350,width=350,status=no,toolbar=no,menubar=no"
  //   );
  //   window.scrollTo(0, 1);
  function abreSinNavegacion() {
    open(
      "index.html",
      "principal",
      "location=no,menubar=no,status=no,toolbar=no"
    );
    cerrar();
  }

  function cerrar() {
    var ventana = window.self;
    ventana.opener = window.self;
    ventana.close();
  }
  abreSinNavegacion();
}
