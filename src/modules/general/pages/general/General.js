import React from "react";
import "./General.scss";
import Card from "../../components/card/Card.js";
import Image1 from "../../assets/image 1.png";

const general = () => {
  const data = [
    {
      id: 1,
      name: "Лобби",
      version: "Paper 1.17.1",
      info: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu enim, fringilla ac tincidunt quis, varius ut metus. Aliquam erat volutpat. Mauris ut vulputate nibh, fringilla consectetur dui. Vestibulum aliquam diam quis orci accumsan scelerisque. Pellentesque ultricies ex at neque iaculis, et consectetur tellus lobortis. Ut quis scelerisque ipsum. Praesent tortor felis, consectetur in ipsum vitae, venenatis elementum velit. In eget dolor urna. Nullam vehicula sodales orci sed vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim magna, porta sed ligula eu, iaculis vehicula sapien. In vehicula leo lectus, sit amet finibus ex viverra at. Pellentesque aliquet, urna quis congue tincidunt, quam sapien cursus justo, vitae venenatis neque lorem et neque. Nam interdum quis ipsum ut sollicitudin. Integer tempor, orci ut fringilla maximus, erat sapien viverra sem, at scelerisque orci ipsum vel libero.",
      image: Image1,
      to: "/lobby-server",
    },
    {
      id: 2,
      name: "Основный мир GMGame",
      version: "Paper 1.17.1",
      info: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu enim, fringilla ac tincidunt quis, varius ut metus. Aliquam erat volutpat. Mauris ut vulputate nibh, fringilla consectetur dui. Vestibulum aliquam diam quis orci accumsan scelerisque. Pellentesque ultricies ex at neque iaculis, et consectetur tellus lobortis. Ut quis scelerisque ipsum. Praesent tortor felis, consectetur in ipsum vitae, venenatis elementum velit. In eget dolor urna. Nullam vehicula sodales orci sed vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim magna, porta sed ligula eu, iaculis vehicula sapien. In vehicula leo lectus, sit amet finibus ex viverra at. Pellentesque aliquet, urna quis congue tincidunt, quam sapien cursus justo, vitae venenatis neque lorem et neque. Nam interdum quis ipsum ut sollicitudin. Integer tempor, orci ut fringilla maximus, erat sapien viverra sem, at scelerisque orci ipsum vel libero.",
      image: Image1,
      to: "/gmgame-server",
    },
    {
      id: 3,
      name: "Фермерский мир",
      version: "Paper 1.17.1",
      info: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu enim, fringilla ac tincidunt quis, varius ut metus. Aliquam erat volutpat. Mauris ut vulputate nibh, fringilla consectetur dui. Vestibulum aliquam diam quis orci accumsan scelerisque. Pellentesque ultricies ex at neque iaculis, et consectetur tellus lobortis. Ut quis scelerisque ipsum. Praesent tortor felis, consectetur in ipsum vitae, venenatis elementum velit. In eget dolor urna. Nullam vehicula sodales orci sed vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim magna, porta sed ligula eu, iaculis vehicula sapien. In vehicula leo lectus, sit amet finibus ex viverra at. Pellentesque aliquet, urna quis congue tincidunt, quam sapien cursus justo, vitae venenatis neque lorem et neque. Nam interdum quis ipsum ut sollicitudin. Integer tempor, orci ut fringilla maximus, erat sapien viverra sem, at scelerisque orci ipsum vel libero.",
      image: Image1,
      to: "/farm-server",
    },
    {
      id: 4,
      name: "Ресурсный мир",
      version: "Paper 1.17.1",
      info: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu enim, fringilla ac tincidunt quis, varius ut metus. Aliquam erat volutpat. Mauris ut vulputate nibh, fringilla consectetur dui. Vestibulum aliquam diam quis orci accumsan scelerisque. Pellentesque ultricies ex at neque iaculis, et consectetur tellus lobortis. Ut quis scelerisque ipsum. Praesent tortor felis, consectetur in ipsum vitae, venenatis elementum velit. In eget dolor urna. Nullam vehicula sodales orci sed vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim magna, porta sed ligula eu, iaculis vehicula sapien. In vehicula leo lectus, sit amet finibus ex viverra at. Pellentesque aliquet, urna quis congue tincidunt, quam sapien cursus justo, vitae venenatis neque lorem et neque. Nam interdum quis ipsum ut sollicitudin. Integer tempor, orci ut fringilla maximus, erat sapien viverra sem, at scelerisque orci ipsum vel libero.",
      image: Image1,
      to: "/resources-server",
    },
    {
      id: 5,
      name: "Креатив",
      version: "Paper 1.17.1",
      info: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu enim, fringilla ac tincidunt quis, varius ut metus. Aliquam erat volutpat. Mauris ut vulputate nibh, fringilla consectetur dui. Vestibulum aliquam diam quis orci accumsan scelerisque. Pellentesque ultricies ex at neque iaculis, et consectetur tellus lobortis. Ut quis scelerisque ipsum. Praesent tortor felis, consectetur in ipsum vitae, venenatis elementum velit. In eget dolor urna. Nullam vehicula sodales orci sed vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim magna, porta sed ligula eu, iaculis vehicula sapien. In vehicula leo lectus, sit amet finibus ex viverra at. Pellentesque aliquet, urna quis congue tincidunt, quam sapien cursus justo, vitae venenatis neque lorem et neque. Nam interdum quis ipsum ut sollicitudin. Integer tempor, orci ut fringilla maximus, erat sapien viverra sem, at scelerisque orci ipsum vel libero.",
      image: Image1,
      to: "/creative-server",
    },
  ];

  return (
    <div className="main">
      <div className="colum-1">
        <h1 className="main-title">GMGame</h1>
        <h2 className="main-info">
          Бесплатный строительно - выживательный сервер.
        </h2>
        <div className="next">
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="colum-2">
        <div className="card-container">
          {data.map((el) => {
            return (
              <Card
                key={el.id}
                name={el.name}
                version={el.version}
                info={el.info}
                image={el.image}
                to={el.to}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default general;
