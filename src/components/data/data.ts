import { Products } from "../../interfaces/Products.interface";


let getProducts = async () => {
    let url: any = await fetch("./src/components/data/data.json");
    let data: Products[] = await url.json();
    return data;
};

export { getProducts };