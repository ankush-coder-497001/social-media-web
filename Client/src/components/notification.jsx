import { Link } from "react-router-dom";
import NotiCard from "./notifiCard";
import { useContext, useEffect, useState } from "react";
import { MYcontext } from "./contex";


const NotificationBar = ()=>{



  return(
    <>
<div class="fixed top-0 right-0 h-screen w-[300px] bg-[#000814] text-[#a9def9] p-6 overflow-y-auto">
  <div class="mb-8">
  <div class="flex items-center mt-5 justify-between px-4 py-3 border-b border-[#a9def9]">
      <h2 class="text-lg font-semibold">Notifications</h2>
      <Link class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-[#a9def9]" 
      to="/mainpage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span class="sr-only">Close</span>
      </Link>
    </div>
  </div>
  <div class="grid gap-4">
<NotiCard  ></NotiCard>
  </div>
</div>
    </>
  )
}

export default NotificationBar;