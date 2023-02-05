import axios from "axios";

async function deleteUser (userId, setUserData, URL) {
    const FETCHED_DATA = await axios ({
        url: URL,
        method: "DELETE",
        data: {
            userId: userId
        },
    });
    setUserData(FETCHED_DATA.data.data)
}

export {deleteUser} 