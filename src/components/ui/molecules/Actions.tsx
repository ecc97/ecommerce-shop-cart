import React from "react";

interface ActionsButtonsProps {
    children: React.ReactNode
}

export default function ActionsButtons({ children }: ActionsButtonsProps) {
    return (
        <div>
            {children}
        </div>
    )
}