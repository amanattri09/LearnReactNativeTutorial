import axios from "axios";
import getFirstAlbumTitle from "./realapicall";

jest.mock("axios")

it("return the title of the first albumj", async () => {
    axios.get.mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                title: "My First Album",
            },
            {
                userId: 1,
                id: 2,
                title: "Album: The Sequel",
            },
        ],
    });
    const title = await getFirstAlbumTitle();
    expect(title).toEqual("My First Album")

})
