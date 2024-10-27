import { deleteBoard } from "@/actions/delete-board"
import { Button } from "@/components/ui/button"

interface BoardProps {
    title: string,
    id: string
}

export function Board({
    title,
    id
}: BoardProps) {
    const deleteBoardWithID = deleteBoard.bind(null, id)

    return (
        <form action={deleteBoardWithID} className="flex items-center gap-x-2">
            <p>
                Board title: {title}
            </p>
            <Button variant={'destructive'} size={'sm'}>
                Delete
            </Button>
        </form>
    )
}