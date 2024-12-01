import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export default function Form() {
    const initialState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(createBoard, initialState)

    return (
        <form action={dispatch}>
            <input
                id="title"
                name="title"
                required
                placeholder="Enter a board title"
                className="border-black border p-1"
            />
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}