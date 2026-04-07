import { useRef, useEffect, useCallback } from 'react';

/* ─── Helpers ─────────────────────────────────────────────────────────── */
function exec(cmd, value = null) {
    document.execCommand(cmd, false, value);
}

/* ─── Toolbar button ──────────────────────────────────────────────────── */
function Btn({ title, active, onClick, children }) {
    return (
        <button
            type="button"
            title={title}
            onMouseDown={(e) => { e.preventDefault(); onClick(); }}
            className={[
                'px-2.5 py-1 rounded text-xs font-semibold select-none transition-all',
                active
                    ? 'bg-[#00c896]/15 text-[#00c896] ring-1 ring-[#00c896]/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5',
            ].join(' ')}
        >
            {children}
        </button>
    );
}

function Sep() {
    return <span className="w-px h-5 bg-white/10 mx-1 shrink-0" />;
}

/* ─── Dropdown ────────────────────────────────────────────────────────── */
function Dropdown({ label, options, onSelect }) {
    return (
        <select
            onMouseDown={(e) => e.stopPropagation()}
            onChange={(e) => { onSelect(e.target.value); e.target.value = ''; }}
            defaultValue=""
            className="text-xs bg-transparent text-gray-400 hover:text-white border border-white/10 rounded px-1.5 py-1 cursor-pointer outline-none hover:border-white/25 transition-all"
        >
            <option value="" disabled>{label}</option>
            {options.map(({ label: l, value: v }) => (
                <option key={v} value={v}>{l}</option>
            ))}
        </select>
    );
}

/* ─── Main Editor ─────────────────────────────────────────────────────── */
export default function RichTextEditor({ value, onChange, placeholder = 'Start writing your article…' }) {
    const editorRef = useRef(null);
    const lastHtml = useRef('');
    const composing = useRef(false);

    // Sync external value (edit mode loads saved content)
    useEffect(() => {
        if (!editorRef.current) return;
        if (value !== lastHtml.current) {
            editorRef.current.innerHTML = value || '';
            lastHtml.current = value || '';
        }
    }, [value]);

    const emit = useCallback(() => {
        if (!editorRef.current) return;
        const html = editorRef.current.innerHTML;
        const clean = (html === '<br>' || html === '') ? '' : html;
        if (clean !== lastHtml.current) {
            lastHtml.current = clean;
            onChange(clean);
        }
    }, [onChange]);

    const format = useCallback((cmd, val = null) => {
        editorRef.current?.focus();
        exec(cmd, val);
        setTimeout(emit, 0);
    }, [emit]);

    // ── Escape blockquote on Enter ────────────────────────────────────────
    // When cursor is inside a <blockquote> and the user presses Enter,
    // we break out by inserting a <p> after the blockquote.
    const handleKeyDown = useCallback((e) => {
        if (e.key !== 'Enter') return;

        const sel = window.getSelection();
        if (!sel || !sel.rangeCount) return;

        // Walk up the DOM to find if we're inside a blockquote
        let node = sel.getRangeAt(0).startContainer;
        let blockquote = null;
        while (node && node !== editorRef.current) {
            if (node.nodeName === 'BLOCKQUOTE') { blockquote = node; break; }
            node = node.parentNode;
        }
        if (!blockquote) return;

        // Check if caret is at the very end of the blockquote
        const range = sel.getRangeAt(0);
        const endRange = document.createRange();
        endRange.selectNodeContents(blockquote);
        endRange.collapse(false); // collapse to end
        const atEnd = range.compareBoundaryPoints(Range.END_TO_END, endRange) >= 0;
        if (!atEnd) return;

        // Prevent the default Enter (which would add a line inside the blockquote)
        e.preventDefault();

        // Insert a new <p> after the blockquote and move the caret into it
        const newP = document.createElement('p');
        newP.innerHTML = '<br>';
        blockquote.insertAdjacentElement('afterend', newP);

        const newRange = document.createRange();
        newRange.setStart(newP, 0);
        newRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(newRange);

        setTimeout(emit, 0);
    }, [emit]);

    const headingOptions = [
        { label: 'Heading 2', value: 'h2' },
        { label: 'Heading 3', value: 'h3' },
        { label: 'Paragraph', value: 'p' },
    ];

    const fontSizeOptions = [
        { label: 'Small',   value: '2' },
        { label: 'Normal',  value: '3' },
        { label: 'Large',   value: '4' },
        { label: 'X-Large', value: '5' },
    ];

    return (
        <div className="rte-wrapper">
            {/* ── Toolbar ── */}
            <div className="rte-toolbar">
                {/* Headings / paragraph */}
                <Dropdown
                    label="Style"
                    options={headingOptions}
                    onSelect={(v) => format('formatBlock', v)}
                />

                <Sep />

                {/* Font size */}
                <Dropdown
                    label="Size"
                    options={fontSizeOptions}
                    onSelect={(v) => format('fontSize', v)}
                />

                <Sep />

                {/* Bold */}
                <Btn title="Bold (Ctrl+B)" onClick={() => format('bold')}>
                    <strong>B</strong>
                </Btn>

                {/* Italic */}
                <Btn title="Italic (Ctrl+I)" onClick={() => format('italic')}>
                    <em>I</em>
                </Btn>

                <Sep />

                {/* Lists */}
                <Btn title="Bullet List" onClick={() => format('insertUnorderedList')}>• List</Btn>
                <Btn title="Numbered List" onClick={() => format('insertOrderedList')}>1. List</Btn>

                <Sep />

                {/* Blockquote */}
                <Btn title="Blockquote" onClick={() => format('formatBlock', 'blockquote')}>" Quote</Btn>
                <Btn title="Exit quote — convert current block back to paragraph" onClick={() => format('formatBlock', 'p')}>↩ Exit</Btn>

                <Sep />

                {/* Undo / Redo */}
                <Btn title="Undo (Ctrl+Z)" onClick={() => format('undo')}>↺</Btn>
                <Btn title="Redo (Ctrl+Y)" onClick={() => format('redo')}>↻</Btn>
            </div>

            {/* ── Editable area ── */}
            <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                className="rte-body"
                data-placeholder={placeholder}
                onInput={() => { if (!composing.current) emit(); }}
                onCompositionStart={() => { composing.current = true; }}
                onCompositionEnd={() => { composing.current = false; emit(); }}
                onKeyDown={handleKeyDown}
                onBlur={emit}
            />
        </div>
    );
}
