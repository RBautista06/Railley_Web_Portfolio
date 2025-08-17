import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom"; // <-- useLocation here
import ThemeSwatcher from "./ThemeSwatcher";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Programming", to: "/programming" },
  { name: "Editing", to: "/editing" },
  { name: "About", to: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavLinks() {
  const location = useLocation(); // <-- get current URL path

  return (
    <Disclosure as="nav" className="shadow-xl bg-base-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-base-content/70 hover:bg-base-300 hover:text-base-content focus:ring-2 focus:ring-primary focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo + Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="./img/graphics/ZENITHLOGO_WHITE.png"
                className="h-4 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.to; // <-- compare paths
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      aria-current={isCurrent ? "page" : undefined}
                      className={classNames(
                        isCurrent
                          ? "bg-primary text-primary-content"
                          : "text-base-content/70 hover:bg-base-300 hover:text-base-content",
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      )}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeSwatcher />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <DisclosurePanel className="sm:hidden bg-base-100">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.to;
            return (
              <Link to={item.to} key={item.name}>
                <DisclosureButton
                  as="a"
                  aria-current={isCurrent ? "page" : undefined}
                  className={classNames(
                    isCurrent
                      ? "bg-primary text-primary-content"
                      : "text-base-content/70 hover:bg-base-300 hover:text-base-content",
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors"
                  )}>
                  {item.name}
                </DisclosureButton>
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
