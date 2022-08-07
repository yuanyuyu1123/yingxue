import { v4 as uuidv4} from "uuid";
//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const gueUUID = () => {
    //先从本地存储获取uuid（看下本地存储是否有）
    let uuid_koken = localStorage.getItem("UUIDTOKEN");
    //    如果没有
    if (!uuid_koken) {
        //我生成游客身份
        uuid_koken = uuidv4();
        //本地存储一次
        localStorage.setItem("UUIDTOKEN", uuid_koken);
    }
    return uuid_koken;
};