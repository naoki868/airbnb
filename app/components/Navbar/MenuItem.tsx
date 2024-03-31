'use client'
interface MenuItem{
    onClick: () => void;
    label: string;
}
const MenuItem:React.FC<MenuItem> = ({ onClick, label }: MenuItem) => {
    
    return (
        <div
            onClick={onClick}
        className="px-4 py-3 hover:bh-neutral-300 transition font-emibold"
        >
            { label }
        </div>
    )
}

export default MenuItem