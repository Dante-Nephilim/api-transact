export interface CardProps {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{props.title}</h1>
                <img alt="product" src={props.image} />
                <h2>{props.price}</h2>
                <p>{props.description}</p>
                <strong>{props.category}</strong>
                <p>{props.id}</p>
            </div>
        </div>
    );
}