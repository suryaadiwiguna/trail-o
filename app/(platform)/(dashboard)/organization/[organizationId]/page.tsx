import { db } from "@/lib/db"

export default function OrganizationIdPage() {
    async function createBoard(formData: FormData) {
        "use server"

        const title = formData.get("title") as string

        await db.board.create({
            data: {
                title
            }
        })

    }

    return (
        <div>
            <form action={createBoard}>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board title"
                    className="border-gray-400 border rounded-sm p-1 px-2"
                />
            </form>
        </div>
    )
}