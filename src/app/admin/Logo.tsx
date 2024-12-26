import Link from "next/link";
import KindeLogo from "./KindeLogo";

export default function Logo() {
    return (
        <div>
            <Link href="/admin" className="l-app-header__logo">
                <KindeLogo />
            </Link>
        </div>
    );
}
