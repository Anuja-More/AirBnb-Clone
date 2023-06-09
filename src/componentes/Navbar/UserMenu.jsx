import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "./Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import useLoginModalStore from "@/hooks/useLoginModalStore";
import useRegisterModalStore from "@/hooks/useRegisterModal";
import useRentModal from "@/hooks/useRentModal";
const UserMenu = () => {
  const LoginModal = useLoginModalStore()
  const registerModal =  useRegisterModalStore()
  const rentModal =  useRentModal()
    const[isOpen, setOpen] = useState(false)
    const toggleOpen = useCallback(()=>{
        setOpen((value) => !value)
    },[])
    const onRent = useCallback(() => {
            rentModal.onOpen();
    }, [rentModal]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 round-full hover:bg-neutral-100
            transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
        onClick={toggleOpen}
        className="
        p-4
        md:py-1 md-px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
            <Avatar/>
        </div>
      </div>
      </div>
      {isOpen && (
        <div className="
        absolute
        rounded-xl
        shadow-md
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm">
<div className="flex flex-col cursor-pointer">
<>
<>
                <MenuItem 
                  label="My trips" 
                  onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Airbnb your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem onClick={LoginModal.onOpen} label="Login"/>
<MenuItem onClick={registerModal.onOpen} label="Sign Up"/>
              </>
</>
</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
