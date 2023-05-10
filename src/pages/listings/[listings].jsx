 import ClientOnly from "@/componentes/ClientOnly";
 import EmptyState from "@/componentes/EmptyState";
 import Container from "@/componentes/Container";
 import ListingHead from "@/componentes/listings/ListingHead";
 import ListingInfo from "@/componentes/listings/ListingInfo";
import { useRouter } from 'next/router';
// import ListingClient from "./ListingClient";
const currentUser = "6459f03985450376d4063c766"
const listingData = [
  {
    id:"6459f03985450376d4063c71" ,
    category: "Beach",
    location: {
      value: "AI",
      label: "Anguilla",
      flag: "🇦🇮",
      latlng: ["18.25", "-63.16666666"],
      region: "Americas",
    },
    guestCount:  "1",
    roomCount: "1",
    bathroomCount:"1",
    imageSrc:
      "https://media.istockphoto.com/id/864482100/photo/luxury-holiday-island-villa-home-exterior-with-infinity-pool.jpg?s=612x612&w=0&k=20&c=YnV1WWhsXFWsK_0kbwWgrqWBdzJAO2I0vBPHPLav5UY=",
    price: "1902",
    title: "new home",
    description: "feel like home",
  },
  {
    id:"6459f03985450376d4063c72" ,
    category: "Beach",
    location: {
      value: "AI",
      label: "Anguilla",
      flag: "🇦🇮",
      latlng: ["18.25", "-63.16666666"],
      region: "Americas",
    },
    guestCount:  "1",
    roomCount: "1",
    bathroomCount:"1",
    imageSrc:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    price: "1902",
    title: "new home",
    description: "feel like home",
  }, 
  {
    id:"6459f03985450376d4063c73" ,
    category: "Beach",
    location: {
      value: "AI",
      label: "Anguilla",
      flag: "🇦🇮",
      latlng: ["18.25", "-63.16666666"],
      region: "Americas",
    },
    guestCount:  "1",
    roomCount: "1",
    bathroomCount:"1",
    imageSrc:
      "https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=",
    price: "1902",
    title: "new home",
    description: "feel like home",
  },
  {
    id:"6459f03985450376d4063c74" ,
    category: "Beach",
    location: {
      value: "AI",
      label: "Anguilla",
      flag: "🇦🇮",
      latlng: ["18.25", "-63.16666666"],
      region: "Americas",
    },
    guestCount:  "1",
    roomCount: "1",
    bathroomCount:"1",
    imageSrc:
      "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
    price: "1902",
    title: "new home",
    description: "feel like home",
  }, 
  {
    id:"6459f03985450376d4063c75" ,
    category: "Beach",
    location: {
      value: "AI",
      label: "Anguilla",
      flag: "🇦🇮",
      latlng: ["18.25", "-63.16666666"],
      region: "Americas",
    },
    guestCount:  "1",
    roomCount: "1",
    bathroomCount:"1",
    imageSrc:
      "https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I=",
    price: "1902",
    title: "new home",
    description: "feel like home",
  }, 
  {
    id:"6459f03985450376d4063c76" ,
    category: "Beach",
    location: {
      value: "AI",
      label: "Anguilla",
      flag: "🇦🇮",
      latlng: ["18.25", "-63.16666666"],
      region: "Americas",
    },
    guestCount:  "1",
    roomCount: "1",
    bathroomCount:"1",
    imageSrc:
      "https://media.istockphoto.com/id/530578690/photo/island-villa.jpg?s=612x612&w=0&k=20&c=ZD7aw-Tp6HBYEjlE4UovAhY0n6XW72hcb2D69dC04uA=",
    price: "1902",
    title: "new home",
    description: "feel like home",
  },
  {
    id:"6459f03985450376d4063c79",
    category: "Pools",
    location: {
        value: "AX",
        label: "Åland Islands",
        flag: "🇦🇽",
        latlng: [
            60.116667,
            19.9
        ],
        region: "Europe"
    },
    guestCount: 1,
    roomCount: 4,
    bathroomCount: 1,
    imageSrc: "https://res.cloudinary.com/dflno6ta8/image/upload/v1683623819/yma7gy3ducffspan4e21.jpg",
    price: "1098",
    title: "768",
    description: "987yuh"
}
];
const ListingPage = () => {
  const router = useRouter();
  console.log(router.query)
 const {listings} = router.query;
  console.log({listings})
  const listing = listingData.find(listing => listing.id === listings);
console.log(listing)
  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
       <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
    <ListingHead  title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.location}
            id={listing.id}
            currentUser={currentUser}/>
               <ListingInfo
              user={listing.user}
              category={listing.category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.location}
            />
            </div>
            </Container>
    </ClientOnly>
  );
};
 
export default ListingPage;
