import Logo from "./Logo";
import Selector from "./Selector";

function Header({ pages }: { pages: PageRoute[] }) {
    return (
        <header className="color-surface-primary ps-20 pe-20 pt-6 pb-6 shadow-xs">
            <div className="flex">
                <Logo />
                <div className="w-full self-center flex justify-end">
                    <Selector pages={pages} />
                </div>
            </div>
        </header>
    );
}

export default Header;
