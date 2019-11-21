export default class ProductsService {

    _apiBase = 'https://my-json-server.typicode.com/RuslanVahapov/vending-machine';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getProducts() {
        const res = await this.getResource(`/products/`);
        return res;
    }

    async getMoney() {
        const res = await this.getResource(`/money/`);
        return res;
    }

}