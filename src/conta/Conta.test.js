import React from "react";
import { render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe("Componente de conta", () => {
  it("Exibir o saldo da conta como valor monetário", () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId("saldo-conta");

    expect(saldo.textContent).toBe("R$ 1000");
  });
});

describe("Componente de saldo da conta", () => {
  it("O Snapshot do componente deve permanecer sempre o mesmo", () => {
    const { container } = render(<Conta saldo={100} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
