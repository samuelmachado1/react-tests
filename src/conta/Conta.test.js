import React from "react";
import { render } from "@testing-library/react";
import Conta from "./Conta";

describe("Componente de saldo da conta", () => {
  it("O Snapshot do component deve permanecer sempre o mesmo", () => {
    const { container } = render(<Conta saldo="100" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
