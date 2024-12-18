import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Fareen Waheed's Environmental Engineering Blog`}</title>
        <meta
          name="description"
          content="Explore insights and experiences from Fareen Waheed, a dedicated Environmental Engineer with extensive experience in waste management, design, and sustainability. Stay updated with the latest in environmental engineering."
        />
        <meta
          name="keywords"
          content="Environmental Engineering, Waste Management, Sustainability, NESPAK, DIC, ASHRAE, Career Insights"
        />
        <meta name="author" content="Fareen Waheed" />
        <meta
          property="og:title"
          content="Fareen Waheed's Environmental Engineering Blog"
        />
        <meta
          property="og:description"
          content="Explore insights and experiences from Fareen Waheed, a dedicated Environmental Engineer with extensive experience in waste management, design, and sustainability. Stay updated with the latest in environmental engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fareenwaheed.com" />
        <meta property="og:image" content="/images/profile" />
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Drive</h3>
      </main>
    </>
  );
}
