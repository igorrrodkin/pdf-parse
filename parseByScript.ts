import fs from 'fs'
import pdf from 'pdf-parse'

export const parsePdf = async () => {
    const buffer = fs.readFileSync('./OR-J9J4S8ZB4TPC_1694692626152_0.pdf');
    const data = await pdf(buffer);

    const text = data.text
    return text
}

parsePdf().then(res => console.log(res))