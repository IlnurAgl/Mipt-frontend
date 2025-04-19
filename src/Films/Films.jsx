import Card from "./Card";
import Types from "./Types";

export default function Films(props) {
  const [types, setTypes] = useState(0);
    return (
      <div className="Films">
        <h1>Films</h1>
        <Card />
        <Types types={types}/>
      </div>
    );
  }
  