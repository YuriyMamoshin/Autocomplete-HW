import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Autocomplete from "../src/app/components/autocomplete";
global.fetch = jest.fn(() => Promise.resolve({ data: [] }));

const renderElementWithClient = (element, client) => {
  return render(
    <QueryClientProvider client={client}>{element}</QueryClientProvider>
  );
};

describe("<Autocomplete /", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    fetch.mockClear();
  });

  it("should render Autocomplete component", () => {
    const { asFragment } = renderElementWithClient(
      <Autocomplete />,
      queryClient
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call API when there more than three characters provided", async () => {
    renderElementWithClient(<Autocomplete />, queryClient);
    const input = screen.getByPlaceholderText("Type your request");

    fireEvent.change(input, { target: { value: "cats and dogs" } });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });
  });

  it("should not call API when there less than three characters provided", async () => {
    renderElementWithClient(<Autocomplete />, queryClient);
    const input = screen.getByPlaceholderText("Type your request");

    fireEvent.change(input, { target: { value: "ca" } });

    await waitFor(() => {
      expect(fetch).not.toHaveBeenCalled();
    });
  });
});
