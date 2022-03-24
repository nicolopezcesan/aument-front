import { PUBLIC_PATH } from "../constants/routes";

export const getImagePath = (image: string) => {
    const path = `${PUBLIC_PATH}/images/${image}`;
    return path;
}