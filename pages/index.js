import { getPosts } from '../utils/mdx-utils';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import Footer from '../components/Footer';
import Image from 'next/image';

function Services() {
  return (
    <div className=" bg-gray-800">
      <section className="container py-24 mx-auto md:px-6">
        <div className="flex flex-wrap">
          <div className="flex items-center justify-center content-center w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
            <h3 className="text-3xl text-white font-semibold">Services</h3>
          </div>
          <div className="flex w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
            <div className="flex w-1/4 flex-col justify-center items-center">
              <div className="mb-4">
                <Image width="100px" height="100px" src="/scissors.png" />
              </div>
              <p className="text-xl font-bold text-white">Haircut</p>
            </div>
            <div className="flex w-1/4 flex-col justify-center items-center">
              <div className="mb-4">
                <Image width="100px" height="100px" src="/shaver.png" />
              </div>
              <p className="text-xl font-bold text-white">Shave</p>
            </div>
            <div className="flex w-1/4 flex-col justify-center items-center">
              <div className="mb-4">
                <Image width="100px" height="100px" src="/beard.png" />
              </div>
              <p className="text-xl font-bold text-white">Beard Style</p>
            </div>

            <div className="flex w-1/4 flex-col justify-center items-center">
              <div className="mb-4">
                <Image width="100px" height="100px" src="/full-cut.png" />
              </div>
              <p className="text-xl font-bold text-white">Hair Style</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Testimonial() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
            <Image
              width={1}
              height={1}
              layout="responsive"
              className="mb-6 rounded-lg shadow-lg dark:shadow-black/20"
              src="/bibi-drew.jpeg"
            />
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
            <h5 className="mb-6 text-xl font-semibold">Anna Maria Doe</h5>
            <ul className="list-inside mb-6 flex justify-center space-x-4 md:justify-start">
              <a href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio est ab iure inventore dolorum consectetur? Molestiae
              aperiam atque quasi consequatur aut? Repellendus alias dolor ad
              nam, soluta distinctio quis accusantium!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
      <main>
        <Hero />
        <Testimonial />
        <Services />
      </main>
      <Footer />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
