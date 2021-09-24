import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Conta from "./Conta";

describe("Componente de conta", () => {
  it("Exibir o saldo da conta como valor monetário", () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId("saldo-conta");

    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Chama a função de realizar transação, quando o botão é clicado", () => {
    const funcaoRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

    const valor = screen.getByTestId("valor");

    fireEvent.change(valor, { target: { value: 1 } });
    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  });
});

describe("Componente de saldo da conta", () => {
  it("O Snapshot do componente deve permanecer sempre o mesmo", () => {
    const { container } = render(<Conta saldo={100} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
