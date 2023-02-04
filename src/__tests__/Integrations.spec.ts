import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
import HomeView from "@/views/HomeView.vue";

describe("suite App", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  describe("suite App", () => {
    it("should render title of page", () => {
      const { getByText } = render(HomeView);
      getByText(/a story./i);
    });
    it("should render Places, Characters and items", () => {
      const { getByText } = render(HomeView);
      getByText(/Characters/i);
      getByText(/Places/i);
      getByText(/Items/i);
    });
    it("should render btn Generate a story", async () => {
      const { getByText } = render(HomeView);
      const button = getByText("Generate a story");

      await fireEvent.click(button);
    });
  });
});
