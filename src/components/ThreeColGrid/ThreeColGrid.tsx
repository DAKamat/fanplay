import Style from "./ThreeColGrid.module.scss";

type ColHeadingAndDescriptionsProps = {
  columns: {
    id: number;
    title: string;
    content: string;
  }[];
};

const ThreeColGrid = ({ columns }: ColHeadingAndDescriptionsProps) => {
  return (
    <div className={Style.ThreeColGridWrapper}>
      <div className="row">
        {columns &&
          columns.map((item) => (
            <div
              key={item.id}
              className={`${"col-sm-4"} ${Style.ThreeColGridCol}`}
            >
              <h3 className="SpaceGroteskBold">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ThreeColGrid;
