class Saludo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idioma: true,
    };
    this.cambiarIdioma = this.cambiarIdioma.bind(this);
  }

  cambiarIdioma() {
    let idiomaActual = this.state.idioma;
    console.log("idioma actual" + idiomaActual);
    this.setState({ idioma: !idiomaActual });
  }

  render() {
    return this.state.idioma ? (
      <div class="col-12 col-md-7 text-light align-baseline">
        <h2 class="display-4 ml-3 ml-sm-2 align-baseline ">
          {this.props.hola}
        </h2>
        <div clase="col-12 col-sm-6">{this.props.textoSP}</div>
        <div class="col-3 d-none d-md-block mr-1 mr-md-2">
          <img src="img/profile-pic.png" width="250" min-width="50"></img>
        </div>
        <div class="col-12 col-md-7 text-light align-baseline  ">
          <button
            class="btn btn-outline-primary mt-2 mb-2"
            type="button"
            onChange={this.cambiarIdioma}
          >
            Cambiar idioma
          </button>
        </div>
      </div>
    ) : (
      <div class="col-12 col-md-7 text-light align-baseline">
        <h2 class="display-4 ml-3 ml-sm-2 align-baseline ">{this.props.hi}</h2>
        <div clase="col-12 col-sm-8">{this.props.textoEN}</div>
        <div class="col-3 d-none d-md-block mr-1 mr-md-2">
          <img src="img/profile-pic.png" width="250" min-width="50"></img>
        </div>
        <button
          class="btn btn-outline-primary mt-2 mb-2"
          type="button"
          onChange={this.cambiarIdioma}
        >
          Change Lenguage
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Saludo
    hola="Hola, soy Pablo Riveiro"
    textoSP="
            Estudié y me recibí para dedicarme a la comunciación, y lo hice...
            Trabajé muchos años en los medios de comunicación como productor,
            camarógrafo o editor, y hasta guionista, fueron años muy
            emocionantes, pero hace 3 años, decidí hacer un viaje al futuro y
            volver a una pasión que desde niño me movía... poder ser programador
          "
    hi="Hi, I'm Pablo Riveiro"
    textoEN="
            I studied and graduated to dedicate myself to communication, and I did...
            I worked many years in the media as a producer,
            cameraman or editor, and even a scriptwriter, those were very
            exciting, but 3 years ago, I decided to take a trip to the future and
            return to a passion that moved me since I was a child... to be a programmer
          "
  />,
  document.getElementById("saludo")
);
