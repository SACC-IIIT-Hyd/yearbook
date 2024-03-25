import Link from "next/link"
// import PreviousMap from "postcss/lib/previous-map"

type Props = {
    topic: string,
    page: string | undefined,
    prevPage: string | null
    nextPage: string | null,
}

export default function Photofooter({ topic, page, prevPage, nextPage}: Props) {
    if(!prevPage && !nextPage) return 
    const pageNums: number[] = []

    if(prevPage && nextPage) {
        for (let i= parseInt(prevPage)+1;i<parseInt(nextPage);i++) {
            pageNums.push(i)
        }
    }

    const nextPageArea = nextPage 
        ? (
            <Link href={`/results/${topic}/${nextPage}`} className=
            {!prevPage ? "mx-auto" : ""} >
                {!prevPage ? "more" : null} &gt;&gt;&gt;
            </Link>
        )
    : null

    const prevPageArea = prevPage 
        ? (
            <>
                <Link href={`/results/${topic}/${prevPage}`} 
                className={!prevPage ? "mx-auto" : ""} >
                    &lt;&lt;&lt; {!prevPage ? "back" : null} 
                </Link>

                {pageNums.map(num => (
                    page && num === parseInt(page)
                        ? num
                        : (
                            <Link href={`/results/${topic}/${num}`} className="underline" >{num}</Link>
                        )
                ))}

            </>
        )
    : null

    return (
        <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto text-white">
            {prevPageArea}
            {nextPageArea}
        </footer>
    )
}