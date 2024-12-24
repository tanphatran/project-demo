import React from "react";
import Image from "next/image";

export const Logo = () => {
    return (
        <div>
            <Image src="/logo.svg" alt="logo" width={60} height={60} />
        </div>
    );
};
