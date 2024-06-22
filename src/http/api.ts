class Api {
  baseUrl = process.env.NEXT_PUBLIC_API_URL;

  getFactById(id: string) {
    return fetch(`${this.baseUrl}/facts/${id}`)
      .then((res) => res.json())
      .then((res) => res as FactApiResponse<Fact>);
  }

  getFactsBySearchQuery(query: string, limit = 10) {
    return fetch(`${this.baseUrl}/facts/search?search=${query}&limit=${limit}`)
      .then((res) => res.json())
      .then((res) => res as FactApiResponse<Fact[]>);
  }

  getRandomFact() {
    return fetch(`${this.baseUrl}/facts/random`)
      .then((res) => res.json())
      .then((res) => res as FactApiResponse<Fact>);
  }
}

export default Api;
