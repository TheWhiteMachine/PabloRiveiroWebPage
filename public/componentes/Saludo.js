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
      <div className="container text-light">
        <div className="row d-flex flex-row">
          <h2 className="col-md-8 text text-light display-4">
            {this.props.hola}
          </h2>
          <div className="col-md-8 d-flex ml-2 ml-md-2 mb-3 mb-md-3 ">
            {this.props.textoSP}
          </div>
          <div className="col-3 d-none d-md-flex mr-1 mr-md-2">
            <img src="img/profile-pic.png" width="260" min-width="50"></img>
          </div>
        </div>
        <div className="col-12 col-md-7 text-light align-baseline  ">
          <button
            className="btn btn-outline-primary mt-2 mb-2"
            type="button"
            onClick={this.cambiarIdioma}
          >
            Change language
          </button>
        </div>
      </div>
    ) : (
      <div className="container text-light">
        <div className="row d-flex flex-row">
          <h2 className="col-md-8 text text-light display-4">
            {this.props.hi}
          </h2>

          <div className="col-md-8 d-flex ml-2 ml-md-2 mb-3 mb-md-3 ">
            {this.props.textoEN}
          </div>
          <div className="col-3 d-none d-md-flex">
            <img src="img/profile-pic.png" width="260" min-width="50"></img>
          </div>
          <div className="col-12 col-md-7 text-light align-baseline  ">
            <button
              className="btn btn-outline-primary mt-2 mb-2"
              type="button"
              onClick={this.cambiarIdioma}
            >
              Cambiar Lenguaje
            </button>
          </div>
        </div>
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
