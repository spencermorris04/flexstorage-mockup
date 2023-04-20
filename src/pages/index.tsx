import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, ChevronDownIcon, BanknotesIcon } from '@heroicons/react/20/solid'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Find a Location', href: '#', current: false },
  { name: 'Size Guide', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Payments', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const locations = [
  {
    name: 'Corinth',
    address: '327 South Tate Street, Corinth, MS 38834',
    phoneNumber: '(662) 808-7867',
    paymentUrl: 'https://rental-center.storedge.com/?companyId=53bddf73-ca06-4c34-8184-a7ec2c7956b9&facilityId=aa5216cf-3d21-4684-bd95-3ea244e4ccb0#/login',
    unitsUrl: 'https://www.flexstorage.com/ms/self-storage-corinth.php?target=allsizes&',
    imageUrl: 'https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg',
    bgImg: 'corinth-image',
  },
  {
    name: 'Lake Keowee',
    address: '3376 Walhalla Hwy, Six Mile, SC 29682',
    phoneNumber: '(864) 477-3051',
    paymentUrl: 'https://rental-center.storedge.com/?companyId=53bddf73-ca06-4c34-8184-a7ec2c7956b9&facilityId=7f101aa1-b24a-4927-8cdc-15d762f14125#/login',
    unitsUrl: 'https://www.flexstorage.com/sc/storage-lake-keowee.php?target=allsizes&',
    imageUrl: 'https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg',
    bgImg: 'corinth-image',
  },
  {
    name: 'Canton',
    address: '7222 Cumming Highway, Canton, GA 30115',
    phoneNumber: '(678) 932-1762',
    paymentUrl: 'https://rental-center.storedge.com/?companyId=53bddf73-ca06-4c34-8184-a7ec2c7956b9&facilityId=9f5870cc-9c99-441b-a7fd-d64cd06d8a8c#/login',
    unitsUrl: 'https://www.flexstorage.com/sc/self-storage-seneca.php?target=allsizes&',
    imageUrl: 'https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg',
    bgImg: 'corinth-image',
  },
  {
    name: 'Seneca',
    address: '640 Business Park Dr, Seneca, SC 29678',
    phoneNumber: '(864) 528-8887',
    paymentUrl: 'https://rental-center.storedge.com/?companyId=53bddf73-ca06-4c34-8184-a7ec2c7956b9&facilityId=95eed22b-d48c-436b-9d5d-3f5a7bdd2d91#/login',
    unitsUrl: 'https://www.flexstorage.com/ms/self-storage-corinth.php?target=allsizes&',
    imageUrl: 'https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg',
    bgImg: 'corinth-image',
  },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Flex Storage | Self Storage</title>
        <meta name="description" content="Self Storage by Flex Storage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full bg-gray-100">
      <div className="min-h-full">
        <Popover as="header" className="bg-gradient-to-r pt-3 from-blue-300 to-indigo-400 pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto mb-3 max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 lg:static">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-10 w-auto"
                        src="/flexlogolong.png"
                        alt="flexstorage"
                      />
                    </a>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-800'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-800">
                        <PhoneIcon className="block pb-1.5 h-8 w-8  stroke-slate-300 stroke-2 hover:fill-slate-200" aria-hidden="true" />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right text-center rounded-md bg-blue-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  (678) 932-1762
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 text-sm'
                                  )}
                                >
                                  Call Us
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block shadow-sm h-10 w-10" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                  
                </div>
                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                  <div className="grid grid-cols-3 items-center gap-8">
                    <div className="col-span-2">
                      <nav className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-100',
                              'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div>
                      <div className="mx-auto w-full max-w-md">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <input
                            id="mobile-search"
                            className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                    >
                      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="pb-2 pt-3">
                          <div className="flex items-center justify-between px-4 ml-1">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src="/flexlogo.png"
                                alt="Your Company"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Home
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              About
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Find a Location
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Size Guide
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Contact Us
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Payments
                            </a>
                          </div>
                        </div>
                        <div className="pb-2 pt-4">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                              <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <span className="sr-only">View notifications</span>
                              <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 flex-col items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                    {/* Search */}
                  <div className="">
                    <div className="">
                      <label htmlFor="desktop-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-gray-600 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="desktop-search"
                          className="block w-full rounded-md border-1 border-gray-500 bg-white/20 py-1.5 pl-10 pr-3 text-gray-600 placeholder:text-gray-600 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="Search for a location"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>  
                    </div>
                  </div>
                </section>
              </div>
              <div className="rounded-lg bg-gray-800">
              <ul role="list" className="grid bg-gray-100 grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:hidden">
                {locations.map((location) => (
                  <li
                    key={location.name}
                    className="col-span-1 flex flex-col divide-y bg-corinth-image rounded-lg text-center shadow-md"
                  >
                    <div className="flex flex-1 flex-col p-8 bg-blue-50/80">
                      <h3 className="mt-6 text-4xl font-bold subpixel-antialiased text-blue-950">{location.name}</h3>
                      <dl className="mt-1 flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dt className="sr-only">Role</dt>
                        <dd className="">
                        <div className="flex flex-1">
                          <a
                            href={`tel:${location.phoneNumber}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                          >
                            {location.phoneNumber}
                          </a>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            {location.address}
                        </span>

                        </dd>
                      </dl>
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x bg-gray-100 rounded-md">
                        <div className="flex w-0 flex-1">
                          <a
                            href={`${location.paymentUrl}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-300"
                          >
                            Make a Payment
                          </a>
                        </div>
                        <div className="flex w-0 flex-1">
                          <a
                            href={`${location.unitsUrl}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-300"
                          >
                            Available Units
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">{/* Your content */}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
              <span className="block sm:inline">&copy; 2023 Flex Storage</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
    </>
  );
};

export default Home;
