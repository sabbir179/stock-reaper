/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Cards from '../componets/cards/cards'

import Link from "next/link";
import Review from '../componets/Review/Review';



export default function Home() {
  return (
    <div className=" " >
      <Head>
        <title>Welcome to Stock Reaper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap" rel="stylesheet" />
      </Head>
      {/* <Image÷  src="/image/banner3.jpg" width= {1900} height= {300} /> */}
       <img  className="banner " src="/image/banner3.jpg" width= {1900} height= {300} />
      <Cards />
      
      <Link href="#">
            <a className= "btn" > Subscription </a>
        </Link>

      <Review />

      </div>
  )
}
