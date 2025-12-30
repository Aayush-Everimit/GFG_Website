export default function Card({ children }) {
    return (
        <div className="card interactive hover:border-white/40">
            {children}
        </div>
    );
}
