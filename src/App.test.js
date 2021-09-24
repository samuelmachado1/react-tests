import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./app";

// Teste de Componente -  Testando o componente <App/>
describe("Componente principal", () => {
  describe("Quando abro o app do Banco", () => {
    it("O nome é exibido", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });
    it("O saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });
    it("O campo valor é exibido com nº 0 por default", () => {
      render(<App />);
      const valor = screen.getByTestId("valor");

      expect(screen.getByText("Valor:")).toBeInTheDocument();
      expect(valor.textContent).toBe("");
    });
    it("O botão de realizar transação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  // Teste de função - Realizo o teste da função calcularNovoSaldo
  describe("Quando eu realizo uma transação", () => {
    it("que é um saque, o valor vai diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };

      const novoSaldo = calcularNovoSaldo(valores, 150);

      expect(novoSaldo).toBe(100);
    });

    it("que é um depósito, o valor vai aumentar", () => {
      const valores = {
        transacao: "deposito",
        valor: 10,
      };

      const novoSaldo = calcularNovoSaldo(valores, 90);

      expect(novoSaldo).toBe(100);
    });
    it("que é um saque, a transação deve ser realizada", () => {
      render(<App />);

      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: "10.00" } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});
