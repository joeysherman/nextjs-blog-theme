import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Hero from '../components/Hero';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
      <main className="flex justify-center w-full">
        <Hero />
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
