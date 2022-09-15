import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  HomeIcon,
  PresentationChartLineIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import Logo from "../Components/Logo/Logo";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Graph", href: "/graph", icon: PresentationChartLineIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  return (
    <>
      <div className="h-screen bg-gray-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <Logo />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            location.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              location.pathname === item.href ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 flex-shrink-0 h-6 w-6",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 bg-gray-700 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Stephan Tromer</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <Logo />
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      location.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    )}
                  >
                    <item.icon
                      className={classNames(
                        location.pathname === item.href ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6",
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 bg-gray-700 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Stephan Tromer</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div>
              <div className="bg-white shadow">
                <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                  <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div className="min-w-0 flex-1">
                      {/* Profile */}
                      <div className="flex items-center">
                        <img
                          className="hidden h-16 w-16 rounded-full sm:block"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 rounded-full sm:hidden"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                              Welcome, Stephan Tromer
                            </h1>
                          </div>
                          <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                            <dt className="sr-only">Company</dt>
                            <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                              <BuildingOffice2Icon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              ABN AMRO
                            </dd>
                            <dt className="sr-only">Account status</dt>
                            <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                              <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                              Verified account
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4"></div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8 py-4 sm:py-6">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
