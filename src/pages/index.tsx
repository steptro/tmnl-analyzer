import React, { Fragment } from "react";
import Layout from "../partials/Layout";
import {
  BellAlertIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  LightBulbIcon,
  ScaleIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";

function Home() {
  const cards = [
    { name: "Alerts generated", href: "#", icon: BellAlertIcon, amount: "2304" },
    { name: "Added transactions", href: "#", icon: BanknotesIcon, amount: "3,203,202" },
    { name: "Suspicious transactions", href: "#", icon: LightBulbIcon, amount: "23" },
  ];

  const activity = [
    {
      id: 1,
      type: "comment",
      person: { name: "Eduardo Benz", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
      date: "6d ago",
    },
    {
      id: 2,
      type: "assignment",
      person: { name: "Hilary Mahy", href: "#" },
      assigned: { name: "Kristin Watson", href: "#" },
      date: "2d ago",
    },
    {
      id: 3,
      type: "tags",
      person: { name: "Hilary Mahy", href: "#" },
      tags: [
        { name: "Bug", href: "#", color: "bg-rose-500" },
        { name: "Accessibility", href: "#", color: "bg-indigo-500" },
      ],
      date: "6h ago",
    },
    {
      id: 4,
      type: "comment",
      person: { name: "Jason Meyers", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
      date: "2h ago",
    },
  ];

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Layout>
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium leading-6 text-gray-900 mb-4">Overview</h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map(card => (
              <div key={card.name} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="truncate text-sm font-medium text-gray-500">{card.name}</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 mt-8">
          <div className="flow-root">
            <h2 className="text-2xl font-medium leading-6 text-gray-900 mb-6">Recent activity</h2>
            <ul role="list" className="-mb-8">
              {activity.map((activityItem, activityItemIdx) => (
                <li key={activityItem.id}>
                  <div className="relative pb-8">
                    {activityItemIdx !== activity.length - 1 ? (
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex items-start space-x-3">
                      {activityItem.type === "comment" ? (
                        <>
                          <div className="relative">
                            <img
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                              src={activityItem.imageUrl}
                              alt=""
                            />

                            <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                              <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div>
                              <div className="text-sm">
                                <a href={activityItem.person.href} className="font-medium text-gray-900">
                                  {activityItem.person.name}
                                </a>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                              <p>{activityItem.comment}</p>
                            </div>
                          </div>
                        </>
                      ) : activityItem.type === "assignment" ? (
                        <>
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-1.5">
                            <div className="text-sm text-gray-500">
                              <a href={activityItem.person.href} className="font-medium text-gray-900">
                                {activityItem.person.name}
                              </a>{" "}
                              assigned{" "}
                              <a href={activityItem?.assigned?.href} className="font-medium text-gray-900">
                                {activityItem?.assigned?.name}
                              </a>{" "}
                              <span className="whitespace-nowrap">{activityItem.date}</span>
                            </div>
                          </div>
                        </>
                      ) : activityItem.type === "tags" ? (
                        <>
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="text-sm leading-8 text-gray-500">
                              <span className="mr-0.5">
                                <a href={activityItem.person.href} className="font-medium text-gray-900">
                                  {activityItem.person.name}
                                </a>{" "}
                                added tags
                              </span>{" "}
                              <span className="mr-0.5">
                                {activityItem?.tags?.map(tag => (
                                  <Fragment key={tag.name}>
                                    <a
                                      href={tag.href}
                                      className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                    >
                                      <span className="absolute flex flex-shrink-0 items-center justify-center">
                                        <span className={classNames(tag.color, "h-1.5 w-1.5 rounded-full")} aria-hidden="true" />
                                      </span>
                                      <span className="ml-3.5 font-medium text-gray-900">{tag.name}</span>
                                    </a>{" "}
                                  </Fragment>
                                ))}
                              </span>
                              <span className="whitespace-nowrap">{activityItem.date}</span>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
