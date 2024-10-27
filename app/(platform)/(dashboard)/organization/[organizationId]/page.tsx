import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./board";

export default async function OrganizationIdPage() {
    const boards = await db.board.findMany()

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
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <div className="space-y-2">
                {boards.map((board) => (
                    <Board
                        key={board.id}
                        title={board.title}
                        id={board.id}
                    />
                ))}
            </div>
        </div>
    )
}