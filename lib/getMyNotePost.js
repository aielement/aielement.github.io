
const userName = "aielement";

export async function GetMyNotePost() {
    const noteResponse = await fetch(`https://note.com/api/v2/creators/${userName}/contents?kind=note&page=1`)
    const noteJson = await noteResponse.json()

    const allNotePostData = noteJson['data']['contents'].map((content) => {
        return {
            name: content['name'],
            noteUrl: content['noteUrl'],
            publishAt: content['publishAt']
        }
    });

    return allNotePostData.sort(
        function (a, b) {
            const aDate = new Date(a.publishAt).getTime()
            const bDate = new Date(b.publishAt).getTime()
            return bDate - aDate
        }
    );
}
