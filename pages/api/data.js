import axios from "axios";
import { api_url } from "../../utils/url"


export async function getItems(table) {

    const res = await axios.get(`${api_url}/${table}`);
    return res.data;

}


export async function getItem(table, id) {

    const res = await axios.get(`${api_url}/${table}/${id}`);
    return res.data;

}