"use client"
import PuffLoader from "react-spinners/PuffLoader";

export default function LoadingSpinner() {
    return (
        <div className="h-[280px] flex items-center justify-center">
            <PuffLoader color="#3f6ff5" />
        </div>
    );
}
