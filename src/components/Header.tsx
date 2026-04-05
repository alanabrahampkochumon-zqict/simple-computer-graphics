import Logo from "./Logo";

function Header() {
    return (
        <header className="color-surface-primary ps-20 pe-20 pt-6 pb-6 shadow-xs">
            <div>
                <Logo />
            </div>
        </header>
    );
}

export default Header;
