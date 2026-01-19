import { render, screen } from "@testing-library/react";
import AppShell from "../app/AppShell";

describe("# AppShell", () => {
  it("renders content", () => {
    render(
      <div>
        <AppShell>
          <div>Hola</div>
        </AppShell>
      </div>
    );
    expect(screen.getByText("DER DIE DAS")).toBeInTheDocument();
    expect(screen.getByText("Hola")).toBeInTheDocument();
    expect(
      screen.getByText("©Amanda Khôl. All rights reserved")
    ).toBeInTheDocument();
  });
});
