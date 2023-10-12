export async function getApi() {
    try {
        const data = await fetch('https://rickandmortyapi.com/api/episode').then(res => res.json() )
        /* console.log(data); */
        return data

    } catch (error) {
        console.log(error)
    }
}