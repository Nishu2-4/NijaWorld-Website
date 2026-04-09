/**
 * Tron (Taiwan) partner logo component.
 * Renders an inline SVG recreation of the Tron brand mark + wordmark.
 * Automatically adapts to dark/light theme via CSS classes.
 */
export function TronLogo({ className = '', size = 'md' }) {
    const sizes = {
        sm: { height: 32, wordmarkSize: 'text-sm' },
        md: { height: 48, wordmarkSize: 'text-lg' },
        lg: { height: 64, wordmarkSize: 'text-2xl' },
    };
    const s = sizes[size] || sizes.md;

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Tron T-mark icon */}
            <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: s.height, width: s.height }}
            >
                {/* Three-blade propeller/turbine mark */}
                <path
                    d="M30 8 C30 8 38 14 38 22 C38 26 36 28 34 30 L30 34 L26 30 C24 28 22 26 22 22 C22 14 30 8 30 8Z"
                    className="fill-[#1a1f2e] dark:fill-white"
                />
                <path
                    d="M14 36 C14 36 22 32 28 36 C30 38 31 40 30 42 L28 48 L22 46 C20 44 18 42 18 38 C18 36 14 36 14 36Z"
                    className="fill-[#1a1f2e] dark:fill-white"
                />
                <path
                    d="M46 36 C46 36 38 32 32 36 C30 38 29 40 30 42 L32 48 L38 46 C40 44 42 42 42 38 C42 36 46 36 46 36Z"
                    className="fill-[#1a1f2e] dark:fill-white"
                />
                {/* Teal accent bar */}
                <rect
                    x="33" y="24" width="12" height="3.5" rx="1.75"
                    fill="#2DD4A8"
                />
            </svg>

            {/* TRON wordmark */}
            <span
                className={`font-bold tracking-[0.25em] uppercase ${s.wordmarkSize} text-[#1a1f2e] dark:text-white`}
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.25em' }}
            >
                TRON
            </span>
        </div>
    );
}

export default TronLogo;
