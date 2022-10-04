import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post() {
    const [post, setPost] = useState({
        name: "",
        body: "",
    });
    const navigate = useNavigate();


function updatePost(value) {
    return setPost((prev) => {
        return {...prev, ...value};
    });
}

return (
    <div>
        <h2>This is a new post</h2>
        <form>
            <div>
                this is goodstuff
                <input />
            </div>

        </form>

    </div>

)
};