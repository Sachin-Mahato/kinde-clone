import React from "react";

const BusinessEnvironmentLinks = () => {
    return (
        <nav className="min-h-screen grid grid-cols-[var(--gutter)_var(--sidebar-width)_3rem_1fr_var(--gutter)] grid-rows-[var(--header-height)_var(--header-gap)_1fr_calc(var(--gutter)+3rem)] bg-white text-gray-800 font-inter">
            <dl className="c-business-environment-links">
                <div>
                    <dt className="font-medium text-sm">Business</dt>
                    <dd>
                        <div
                            className="kui-dropdown-container"
                            data-kui-dropdown="true"
                        >
                            <button
                                className="kui-dropdown__button kui-dropdown__button-with-down-chevron"
                                type="button"
                                id="id_dropdown_id_header_business_button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span className="kui-dropdown-trigger__text kui-util-button-stateless-1">
                                    Sachin dev
                                </span>
                                <span className="kui-dropdown__down-chevron-icon">
                                    <svg
                                        className="kinde-icon kinde-icon-size-small"
                                        fill="none"
                                        aria-hidden="true"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="m6 9 6 6 6-6"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="kui-util-hide-visually">
                                    Open menu
                                </span>
                            </button>
                            <div
                                className="kui-dropdown kui-dropdown--left kui-dropdown--menu kui-dropdown--bottom"
                                id="id_dropdown_id_header_business_content"
                                hidden={true}
                            >
                                <a
                                    className="kui-dropdown__action"
                                    href="https://app.kinde.com/account/cx/_:nav&amp;m:manage_business&amp;org_code:org_85036a1337868f85::_:submenu&amp;s:list"
                                >
                                    Switch business
                                </a>
                            </div>
                        </div>
                    </dd>
                </div>
                <div>
                    <dt className="font-medium text-sm">Environment</dt>
                    <dd>
                        <div
                            className="kui-dropdown-container"
                            data-kui-dropdown="true"
                        >
                            <button
                                className="kui-dropdown__button kui-dropdown__button-with-down-chevron"
                                type="button"
                                id="id_dropdown_id_header_environment_button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span className="kui-dropdown-trigger__text kui-util-button-stateless-1">
                                    Production
                                </span>
                                <span className="kui-dropdown__down-chevron-icon">
                                    <svg
                                        className="kinde-icon kinde-icon-size-small"
                                        fill="none"
                                        aria-hidden="true"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="m6 9 6 6 6-6"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="kui-util-hide-visually">
                                    Open menu
                                </span>
                            </button>
                            <div
                                className="kui-dropdown kui-dropdown--left kui-dropdown--menu kui-dropdown--bottom"
                                id="id_dropdown_id_header_environment_content"
                                hidden={true}
                            >
                                <a
                                    className="kui-dropdown__action"
                                    href="/admin/cx/_:nav&amp;m:environments::_:submenu&amp;s:list"
                                >
                                    Switch environment
                                </a>
                            </div>
                        </div>
                    </dd>
                </div>
            </dl>
        </nav>
    );
};

export default BusinessEnvironmentLinks;
