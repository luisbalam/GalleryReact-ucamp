export function Gallery(props) {
  return (
    <div>
      {props.images.map((image) => {
        return (
          <div key={image.title}>
            <p>Description: {image.description}</p>
            <p>Title: {image.title}</p>
            <img src={`${process.env.REACT_APP_API}${image.uri}`} />
          </div>
        );
      })}
    </div>
  );
}
