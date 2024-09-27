import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <div>
            <Image src={'/assest/logo.png'} alt="logo" width={50} height={50} />
        </div>
    )
}

export default Logo;


