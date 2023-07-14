const page = () => {
    if (typeof window !== "undefined") {
        // Client-side-only code
        const code = new URL(window.location.href);
        console.log(code);
    }
    return (
        <div>
            groupname
        </div>
    );
};

export default page;