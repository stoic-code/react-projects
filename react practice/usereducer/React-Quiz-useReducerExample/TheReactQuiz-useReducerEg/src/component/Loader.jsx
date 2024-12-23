import "../App.css";
function Loader() {
  return (
    <div>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <p>Loading...</p>
    </div>
  );
}

export default Loader;
