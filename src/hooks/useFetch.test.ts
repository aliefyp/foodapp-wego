import { describe, expect, it } from "vitest";
import { Root as FoodList } from "../types/foodList";
import useFetch from "./useFetch";

describe("useFetch", () => {
  it("should throw an error when fetch fails", async () => {
    const url = "https://example.com/404";
    const fetchData = useFetch();
    await expect(fetchData(url)).rejects.toThrowError("Failed to fetch data");
  });

  it("should return data when fetch is successful", async () => {
    const url = "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json";
    const fetchData = useFetch();
    const response = await fetchData<FoodList>(url);
    expect(response).toEqual(expect.objectContaining({ foods: expect.any(Array) }));
  });
});
