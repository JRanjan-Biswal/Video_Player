import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import BingeList from '../Components/BingeList';
import SocialSection from '../Components/SocialSection';
import Footer from '../Components/Footer';
import InfoBox from '../Components/InfoBox';
// index file
export default function Home({ data }) {
  return (
    <>
      <Navbar data={data.attributes.nav_section} />
      <HeroSection data={data.attributes.banner} />
      <InfoBox></InfoBox>
      <BingeList data={data.attributes.videoSection} />
      <SocialSection data={data.attributes.social_feed} />
      <Footer data={data.attributes.Footer} />
    </>
  );
}

export async function getStaticProps() {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const response = await fetch(url);

  // Parse the JSON
  const data = await response.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { data: data },
  };
}
