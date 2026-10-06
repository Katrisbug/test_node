export default async function page({searchParams}) {
    const {search} = await searchParams
    return(
        <div>Alunos {search}</div>
    )
}