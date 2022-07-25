function Modall(props) {
    return (  <div><button  type="button" className="btn btn-primary w-50 mt-3 fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
    submit
  </button>

  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Welcome</h5>
        </div>
        <div className="modal-body" >
        {props.children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </div> );
}

export default Modall;