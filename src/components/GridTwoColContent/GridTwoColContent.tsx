import Style from "./GridTwoColContent.module.scss";

type GridTwoColContentProps = {
  columns: {
    id: number;
    title: string;
    content: string;
  }[];
};

const GridTwoColContent = ({ columns }: GridTwoColContentProps) => {
  return (
    <div className={Style.GridTwoColContentWrapper}>
      <div className="row">
        {columns &&
          columns.map((item) => (
            <div key={item.id} className={`${"col-sm-6"} ${Style.GridTwoCol}`}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridTwoColContent;
