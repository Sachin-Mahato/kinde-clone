"use client";
import { useState } from "react";
import Image from "next/image";
import KindeIcon from "./KindeIcon";
import SmallKindeIcon from "./SmallKindeIcon";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div kui-dropdown="true">
            <button
                className="l-app-header__menu-button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={toggleMenu}
            >
                Menu
            </button>
            <a
                className="l-app-header__help-center-link"
                href="https://docs.kinde.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Docs
            </a>
            <a
                className="kui-button kui-button--primary kui-button--icon-leading kui-button--size-default kui-util-button-stateless-1 kui-button--specialised-button-upgrade"
                href="admin/cx/_:nav&m:upgrade::_:submenu&s:plan_selection"
            >
                <span className="kui-button__icon-leading">
                    <KindeIcon />
                </span>
                <span className="kui-button__text">Upgrade</span>
            </a>
            <div className={`kui-dropdown-container ${isOpen ? "show" : ""}`}>
                <button
                    className="kui-dropdown-trigger"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="kui-avatar">
                        <Image
                            className="kui-avatar__image"
                            src="https://avatars.githubusercontent.com/u/93040506?v=4"
                            alt="Sachin Mahato avatar"
                            width={40}
                            height={40}
                        />
                    </span>
                </button>
                {isOpen && (
                    <div className="kui-dropdown">
                        <div className="l-app-header__user-menu">
                            <span className="kui-avatar">
                                <Image
                                    className="kui-avatar__image"
                                    src="https://avatars.githubusercontent.com/u/93040506?v=4"
                                    alt="Sachin Mahato avatar"
                                    width={40}
                                    height={40}
                                />
                            </span>
                            <div className="l-app-header__user-menu-name kui-util-truncate-text">
                                <div className="kui-util-type-subhead-1">
                                    Sachin Mahato
                                </div>
                                <a
                                    className="kui-util-type-body-caption"
                                    href="mailto:sachin333777@outlook.com"
                                >
                                    sachin333777@outlook.com
                                </a>
                            </div>
                        </div>
                        <nav aria-label="User menu">
                            <ul>
                                <li>
                                    <a
                                        className="kui-dropdown-menu__item"
                                        href="https://app.kinde.com/account/cx/_:nav&m:manage_business&org_code:org_85036a1337868f85::_:submenu&s:list"
                                    >
                                        Account details
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="kui-dropdown-menu__item"
                                        href="/admin-logout"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}
