import { server } from "../services/axios";
import { mockedData } from "./mockData";


describe("Axios", () => {
  it("should be defined", () => {
    expect(server).toBeDefined();
  });
  
  it("should be a function", () => {
    expect(typeof server).toBe("function");
    });

it("should be called with the correct url and params with mocked return", async () => {
    const url = "/planets";
    const params = { page: 2 };
    const spy = jest.spyOn(server, "get").mockResolvedValue(mockedData);
    await server.get("/planets", { params });
    expect(spy).toHaveBeenCalledWith(url, { params });
    spy.mockRestore()
    }
    );
it("should return a list of planets", async () => {
    const url = "/planets";
    const params = { page: 1 };
    const spy = jest.spyOn(server, "get");
    const response = await server.get(url, {
        params,
      })
    expect(spy).toHaveBeenCalledWith(url, { params });    
    expect(response).toBeDefined();
    expect(response.data.results).toEqual(mockedData.results)
    spy.mockRestore()
    }, 5000
    );

it("should return a list of planets with the correct properties", async () => {
    const url = "/planets";
    const params = { page: 1 };
    const spy = jest.spyOn(server, "get");
    const response = await server.get("/planets", { params });
    expect(spy).toHaveBeenCalledWith(url, { params });    
    expect(response.data.results).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
    expect(response.data.results[0]).toHaveProperty("name");
    expect(response.data.results[0]).toHaveProperty("climate");
    expect(response.data.results[0]).toHaveProperty("terrain");
    expect(response.data.results[0]).toHaveProperty("surface_water");
    expect(response.data.results[0]).toHaveProperty("population");
    expect(response.data.results[0]).toHaveProperty("residents");
    expect(response.data.results[0]).toHaveProperty("films");
    expect(response.data.results[0]).toHaveProperty("created");
    expect(response.data.results[0]).toHaveProperty("edited");
    expect(response.data.results[0]).toHaveProperty("url");
    }, 5000
    );
}   );
// Compare this snippet from src/context/usePlanets.ts: