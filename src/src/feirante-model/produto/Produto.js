class Produto {
  #nome;

  constructor(nome) {
    if (typeof nome !== "string") {
      throw new TypeError("Produto não informado");
    }

    const nomeTrim = nome.trim();

    if (nomeTrim.length <= 3) {
      throw new TypeError("Nome do produto deve ser ter mais de três letras");
    }

    this.#nome = nomeTrim;
  }

  get nome() {
    return this.#nome;
  }

  valueOf() {
    return this.#nome;
  }

  toString() {
    return this.#nome;
  }

  toJSON() {
    return this.#nome;
  }
}

module.exports = Produto;
