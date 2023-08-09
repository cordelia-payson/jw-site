function Subtitle({ bold, italic }) {
  return (
    <div className="flex flex-row">
      <div className="m-1 font-bold">{bold}</div>
      <div className="m-1 italic ml-0">{italic}</div>
    </div>
  );
}

export default Subtitle;
