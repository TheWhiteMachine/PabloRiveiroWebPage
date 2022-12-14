class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "d-non",
      foto: 1,
    };

    this.Modal = this.Modal.bind(this);
  }

  Modal(opcion) {
    if (opcion == 1) this.setState({ foto: 1 });
    else if (opcion == 2) this.setState({ foto: 2 });
    else if (opcion == 3) this.setState({ foto: 3 });
    let displayNow = this.display;
    this.setState({ display: !displayNow });
  }

  Render() {
    <button className="btn btn-outline-light btn-sm mt-2 shadow-sm m-md-2">
      agrandar
    </button>;
    if (this.state.foto == 1) {
      return (
        <div
          class="modal fade bd-example-modal-sm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <img src={"img/" + this.props.foto1}></img>
            </div>
          </div>
        </div>
      );
    } else if (this.state.foto == 2) {
      return (
        <div
          class="modal fade bd-example-modal-sm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <img src={"img/" + this.props.foto2}></img>
            </div>
          </div>
        </div>
      );
    } else if (this.state.foto == 3) {
      return (
        <div
          class="modal fade bd-example-modal-sm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <img src={"img/" + this.props.foto3}></img>
            </div>
          </div>
        </div>
      );
    }
  }
}
ReactDOM.render(
  <Modals foto1="fotocamara.jpg" foto2="standup.jpg" foto3="fotopablo1.jpg" />,
  document.getElementById("modal")
);
