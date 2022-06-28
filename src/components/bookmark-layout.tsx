import Head from 'next/head';
import Link from 'next/link';
import { getYear } from 'date-fns';

export default function BookmarkLayout({ data, year, onlyThisWeek = false }) {
  const weeks = Object.keys(data).sort((a, b) => parseInt(b) - parseInt(a));

  return <>Çok yakında Sizlerler</>;
}
