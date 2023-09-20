function Subtitle({ bold, italic }) {
  return (
    <div className="flex flex-row">
      <div className="m-1 font-bold min-w-max">{bold}</div>
      <div className="m-1 italic ml-0 min-w-max">{italic}</div>
    </div>
  );
}

export default Subtitle;
