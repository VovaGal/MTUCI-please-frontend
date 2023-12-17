import { render, screen } from "@testing-library/react";
import { LoginModal } from "../pages/Home/LoginModalComponent.jsx";

test("renders LoginModal component", () => {
  render(<LoginModal />);
  const linkElement = screen.getByText(/You need an account to play!/i);
  expect(linkElement).toBeInTheDocument();
});
