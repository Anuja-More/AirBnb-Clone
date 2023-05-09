// import getCurrentUser from "@/actions/getCurrentUser";
// import getListingById from "@/actions/getListingById";
import ClientOnly from "@/componentes/ClientOnly";
import EmptyState from "@/componentes/EmptyState";

import {listings, currentUser} from "../index"
// import ListingClient from "./ListingClient";


const ListingPage = ({ params }) => {

  // const listing = await getListingById(params);
  // const currentUser = await getCurrentUser();

  if (!listings) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listings}
        // reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;