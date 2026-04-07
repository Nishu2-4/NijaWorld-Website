export default function PlaceholderSection({ title, icon, description }) {
    return (
        <div className="p-6 flex items-center justify-center min-h-[60vh]">
            <div className="text-center max-w-sm">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto mb-5">
                    <span className="text-4xl">{icon}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-500 text-sm mb-6">{description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00c896]/25 text-[#00c896] text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c896] animate-pulse" />
                    Coming soon
                </div>
            </div>
        </div>
    );
}
