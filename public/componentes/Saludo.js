class Saludo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idioma: true,
    };
  }

  cambiarIdioma(event) {
    let valorIdioma = event.target.value;
    this.setState({
      valor: valorIdioma,
    });
  }

  render() {
    let idioma = "";
    if (this.sate.idioma) {
      idioma = false;
    } else {
      idioma = true;
    }
    return (
      <div>
        <h2 class="display-4 ml-3 ml-sm-2 align-baseline ">{this.props.hi}</h2>
        <div clase="col-12 col-sm-8">{this.props.texto}</div>
        <button
          type="button"
          class="btn btn-outline-secundary"
          data-bs-toggle="button"
          autocomplete="off"
          onchange={cambiarIdioma}
        >
          Idioma
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Saludo
    idioma={true}
    hi="Hola, soy Pablo Riveiro"
    texto="
            Estudié y me recibí para dedicarme a la comunciación, y lo hice...
            Trabajé muchos años en los medios de comunicación como productor,
            camarógrafo o editor, y hasta guionista, fueron años muy
            emocionantes, pero hace 3 años, decidí hacer un viaje al futuro y
            volver a una pasión que desde niño me movía... poder ser programador
          "
  />,
  document.getElementById("saludo")
);

ReactDOM.render(
  <Saludo
    idioma={false}
    hi="Hi, I'm Pablo Riveiro"
    texto="
            I studied and graduated to dedicate myself to communication, and I did...
            I worked many years in the media as a producer,
            cameraman or editor, and even a scriptwriter, those were very
            exciting, but 3 years ago, I decided to take a trip to the future and
            return to a passion that moved me since I was a child... to be a programmer
          "
  />,
  document.getElementById("saludo ingles")
);
