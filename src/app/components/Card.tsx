type Props = {
    title: string;
    description: string;
}

export default function Card({title, description}: Props) {
    return (
        <div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 w-[500px]">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    );
}