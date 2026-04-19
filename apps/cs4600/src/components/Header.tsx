import Menu from "../assets/icon/menu.svg?react"
import Logo from "./Logo";
import Selector from "./Selector";

function Header({ pages }: { pages: PageRoute[] }) {
    return (
        <header className="color-surface-primary ps-8 pe-8 xl:ps-20 xl:pe-20 pt-6 pb-6 shadow-xs flex gap-4 items-center justify-between">
            <Logo />
            <div className="self-center hidden lg:flex justify-end">
                <Selector pages={pages} />
            </div>
            {/* TODO: Fix the menu icon */}
            <div className="block lg:hidden">
                <Menu height={48} />
            </div>
        </header>
    );
}

export default Header;
