export function Form(props) {
  return (
    <form onSubmit={props.handleOnSubmit}>
      <input type="text" name="title" />
      <br></br>
      <input type="text" name="description" />
      <br></br>
      <input type="file" name="picture" />
      <br></br>
      <button type="submit">Guardar</button>
    </form>
  );
}
