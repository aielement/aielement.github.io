
const userName = "aielement";

export async function GetMyNotePost() {
    const noteResponse = await fetch(`https://note.com/api/v2/creators/${userName}/contents?kind=note&page=1`)
    const noteJson = await noteResponse.json()

    return noteJson['data']['contents'].map((content) => {
        return {
            title: content['name'],
            url: content['noteUrl'],
            publishAt: content['publishAt'],
            site: "note"
        }
    });
}
