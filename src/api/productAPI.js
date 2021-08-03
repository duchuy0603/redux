import axiosClient from "./instance";

export const getAll = () => {
  const url = "/";
  return axiosClient.get(url);
};

export const remove = (id) => {
    const url = `/${id}`;
    return axiosClient.delete(url);
  };
  export const add = (item) => {
    const url = `/`;
    return axiosClient.post(url,item);
  };