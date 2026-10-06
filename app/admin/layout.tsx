export default function layout({children}) {
    return(
        <div>
            <div className="fixed h-screen w-[200px] bg-amber-600" >Side</div>
            <div>{children}</div>
        </div>
    )
}