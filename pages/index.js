import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Searchbar from '../components/Searchbar'
import MyCountries from '../components/MyCountries'

export const getStaticProps = async() => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: {
      mydata: data,
      myname: "Arijit"
    }
  }
}
export default function Home({mydata, myname}) {
  //console.log(mydata, myname);
  return (
    <div>
      <h1 className={styles.heading}>Country Info</h1>
      <Searchbar />
      <MyCountries countries={mydata}/>
    </div>
  )
}
