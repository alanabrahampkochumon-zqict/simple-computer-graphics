function Selector({ pages, selected }: { pages: string[]; selected: string }) {
    return (
        <ul className="inline-flex gap-0 p-1.5 self-end color-surface-secondary rounded-full">
            {pages.map((page) => (
                <li className="color-content-tertiary ps-5 pe-5 pt-3 pb-3 rounded-full">
                    {page}
                </li>
            ))}
        </ul>
    );
}

export default Selector;
