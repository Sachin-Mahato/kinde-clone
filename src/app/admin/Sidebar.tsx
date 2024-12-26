import Link from "next/link";
import SmallKindeIcon from "./SmallKindeIcon";

export default function Sidebar() {
    return (
        <nav
            aria-label="Main nav"
            id="main-nav"
            className="kui-main-nav"
            kui-dropdown-content="true"
        >
            <div className="kui-main-nav__business-environment-links c-main-nav__business-environment-links">
                <dl className="c-business-environment-links c-business-environment-links--stacked">
                    <div>
                        <dt className="kui-util-type-body-caption">Business</dt>
                        <dd>
                            <div
                                className="kui-dropdown-container"
                                kui-dropdown="true"
                            >
                                <button
                                    className="kui-dropdown__button kui-dropdown__button-with-down-chevron"
                                    type="button"
                                    id="id_dropdown_id_header_business_stacked_button"
                                    kui-on-click="dropdown.toggle"
                                    kui-dropdown-trigger="true"
                                    kui-dropdown-controls="id_dropdown_id_header_business_stacked_content"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="kui-dropdown-trigger__text kui-util-button-stateless-1">
                                        Sachin dev
                                    </span>
                                    <span className="kui-dropdown__down-chevron-icon">
                                        <SmallKindeIcon />
                                    </span>
                                </button>
                                <div
                                    className="kui-dropdown kui-dropdown--left kui-dropdown--menu kui-dropdown--bottom"
                                    id="id_dropdown_id_header_business_stacked_content"
                                    // hidden=""
                                    kui-dropdown-content="true"
                                >
                                    <a
                                        className="kui-dropdown__action"
                                        href="https://app.kinde.com/account/cx/_:nav&m:manage_business&org_code:org_85036a1337868f85::_:submenu&s:list"
                                    >
                                        Switch business
                                    </a>
                                </div>
                            </div>
                        </dd>
                    </div>
                    <div>
                        <dt className="kui-util-type-body-caption">
                            Environment
                        </dt>
                        <dd>
                            <div
                                className="kui-dropdown-container"
                                kui-dropdown="true"
                            >
                                <button
                                    className="kui-dropdown__button kui-dropdown__button-with-down-chevron"
                                    type="button"
                                    id="id_dropdown_id_header_environment_stacked_button"
                                    kui-on-click="dropdown.toggle"
                                    kui-dropdown-trigger="true"
                                    kui-dropdown-controls="id_dropdown_id_header_environment_stacked_content"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-testid="environment-dropdown-button"
                                >
                                    <span className="kui-dropdown-trigger__text kui-util-button-stateless-1">
                                        Production
                                    </span>
                                    <span className="kui-dropdown__down-chevron-icon">
                                        <SmallKindeIcon />
                                    </span>
                                </button>
                                <div
                                    className="kui-dropdown kui-dropdown--left kui-dropdown--menu kui-dropdown--bottom"
                                    id="id_dropdown_id_header_environment_stacked_content"
                                    // hidden=""
                                    kui-dropdown-content="true"
                                >
                                    <a
                                        className="kui-dropdown__action"
                                        href="/admin/cx/_:nav&m:environments::_:submenu&s:list"
                                    >
                                        Switch environment
                                    </a>
                                </div>
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
            <ul className="c-spacing-2x-large">
                <li className="kui-main-nav__item">
                    <Link
                        className="kui-main-nav__link kui-util-type-headline-4"
                        href="/admin/cx/_:nav&m:users::_:submenu&s:list"
                    >
                        Users
                    </Link>
                </li>
                <li className="kui-main-nav__item">
                    <Link
                        className="kui-main-nav__link kui-util-type-headline-4"
                        href="/admin/cx/_:nav&m:organizations::_:submenu&s:list"
                    >
                        Organizations
                    </Link>
                </li>
                <li className="kui-main-nav__item">
                    <Link
                        className="kui-main-nav__link kui-util-type-headline-4"
                        href="/admin/cx/_:nav&m:design::_:submenu&s:branding"
                    >
                        Design
                    </Link>
                </li>
                <li className="kui-main-nav__item">
                    <Link
                        className="kui-main-nav__link kui-util-type-headline-4"
                        href="/admin/cx/_:nav&m:billing::_:submenu&s:plans"
                    >
                        Billing
                    </Link>
                </li>
                <li className="kui-main-nav__item">
                    <Link
                        className="kui-main-nav__link kui-util-type-headline-4"
                        href="https://docs.kinde.com"
                    >
                        Docs
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
