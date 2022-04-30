import Head from "next/head";
import Link from "next/link";
import { getYear } from "date-fns";

export default function BookmarkLayout({ data, year, onlyThisWeek = false }) {
  const weeks = Object.keys(data).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <>
      <Head>
        <title>Bookmark - Adem ilter</title>
      </Head>

      <div className="c-small">
        {weeks.map((date) => (
          <div key={date} className="mt-20">
            <h4
              className="
              text-2xl text-zinc-400
              dark:text-zinc-500"
            >
              {date}. Hafta, {year}
            </h4>
            <div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
              {data[date].map((item) => {
                return <>{item.url}</>;
              })}
            </div>
          </div>
        ))}

        {onlyThisWeek && (
          <div className="mt-16">
            <Link href={`/bookmarks/${getYear(new Date())}`}>
              <a
                className="py-3 px-4 bg-zinc-50 border border-zinc-200 rounded
              dark:bg-zinc-800 dark:border-zinc-700"
              >
                Tüm listeyi görüntüle →
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
