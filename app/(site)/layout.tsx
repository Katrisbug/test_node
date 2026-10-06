export default function layout() {
    return(
        <div>
            <header className="bg-black">header</header>
            <div>{children}</div>
            <footer>footer</footer>
        </div>
    )
}