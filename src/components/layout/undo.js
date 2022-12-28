export function UndoLeft(props) {
  return(
    <svg
    id="Desfazer"
    data-name="Desfazer ação"
    width= {props.width}
    height="32"
    viewBox="0 0 33.14 32"
  >
    <path
      className={props.className}
      id="rotate-left-solid"
      d="M18.321,45.677h-.607A1.71,1.71,0,0,1,16,43.963V34.821a1.715,1.715,0,0,1,2.928-1.214L21.9,36.578a16,16,0,1,1-.071,22.7,2.288,2.288,0,1,1,3.235-3.235,11.428,11.428,0,1,0,.071-16.233l2.935,2.942a1.715,1.715,0,0,1-1.214,2.928Z"
      transform="translate(-16 -31.962)"
    />
  </svg>
  );
}

export function UndoRight({width,className}) {
  return(
    <svg
    id="Refazer"
    data-name="Refazer ação"
    width= {width}
    height="30.3"
    viewBox="0 0 31.379 30.3"
  >
    <path
      className={className}
      id="rotate-right-solid"
      d="M61.156,44.948h.575a1.619,1.619,0,0,0,1.623-1.623V34.669a1.624,1.624,0,0,0-2.773-1.15l-2.813,2.813a15.149,15.149,0,1,0,.068,21.491,2.166,2.166,0,0,0-3.063-3.063,10.821,10.821,0,1,1-.068-15.371l-2.779,2.786a1.624,1.624,0,0,0,1.15,2.773Z"
      transform="translate(-31.975 -31.962)"
    />
  </svg>
  );
}
