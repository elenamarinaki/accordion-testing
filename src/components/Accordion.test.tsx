// import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

import Accordion from "./Accordion";

describe("Accordion component", () => {
  it("renders with title", () => {
    // Given
    const title = "Fruits";
    const accordionElement = (
      <Accordion title={title}>
        <div></div>
      </Accordion>
    );

    // When
    render(accordionElement);

    // Then
    const accordionTitle = screen.getByText(new RegExp(title, "i"));
    expect(accordionTitle).toBeDefined();
  });

  it("should be closed by default", () => {
    // Given
    const accordionElement = (
      <Accordion title="Fruits">
        <ul>
          <li>Strawberries</li>
          <li>Kiwis</li>
          <li>Peaches</li>
        </ul>
      </Accordion>
    );

    // When
    render(accordionElement);

    // Then
    const listElement = screen.queryByText(/Kiwis/i);
    expect(listElement).toBeNull();
  });

  // it("should open on clicking the + button", () => {
  //   render(
  //     <Accordion title="Fruits">
  //       <ul>
  //         <li>Strawberries</li>
  //         <li>Bananas</li>
  //       </ul>
  //     </Accordion>
  //   );
  //   const plusButton = screen.getByText(/\+/i);
  //   fireEvent.click(plusButton);
  //   expect(screen.getByText(/Bananas/i)).toBeDefined();
  // });

  it("should open on clicking anywhere between the title and the + (them included)", () => {
    // Given
    const accordionElement = (
      <Accordion title="Tasks">
        <ul>
          <li>Reading</li>
          <li>Cleaning</li>
        </ul>
      </Accordion>
    );

    // When
    render(accordionElement);

    // Then
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText(/Reading/i)).toBeDefined();
  });

  it("should provide scroll option if content is more than 300px high", () => {
    // Given
    const maxHeight = "300px";
    const accordionElement = (
      <Accordion title="Long paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor
          convallis odio, a vehicula turpis laoreet non. In hac habitasse platea
          dictumst. Pellentesque ultricies a eros et rhoncus. Nunc varius lacus
          ut felis ultricies blandit. Proin feugiat consectetur est, vitae
          dictum ipsum. Vestibulum blandit, orci id lobortis aliquam, quam lacus
          euismod ex, eget tristique ante diam vel dui. Phasellus in tempor
          erat. Aliquam erat volutpat. In nec tortor velit. Phasellus feugiat
          ante nec nulla tempor, eu aliquam est placerat. Pellentesque quis
          lacus consequat, tristique ex vel, dignissim nunc. Nulla ac est
          consectetur, mattis ante nec, viverra magna. Nulla sit amet mattis
          diam. Sed placerat imperdiet nisl eget ultricies. Nam ut enim id justo
          lacinia rhoncus scelerisque sit amet turpis. Quisque vel euismod elit.
          Donec dapibus elit ipsum, quis rutrum ligula vulputate non.
          Suspendisse a dignissim odio, in molestie tellus. Maecenas purus
          tellus, aliquam at velit vel, efficitur tristique metus. Donec porta
          in lectus non porttitor. Nulla et ultrices velit, quis hendrerit dui.
          Phasellus dui eros, ultrices a nisl quis, facilisis suscipit libero.
          Donec volutpat dapibus leo. Duis eu tempor urna, et sodales nisl.
          Curabitur semper vitae ante a ullamcorper. Etiam a aliquet est, vel
          ornare est.
        </p>
      </Accordion>
    );

    // When
    render(accordionElement);

    // Then
    const titleButton = screen.getByText(/Long paragraph/i);
    fireEvent.click(titleButton);
    // const lastFewWords = screen.getByText(/vel ornare est./i);
    // expect(lastFewWords).toBeInTheDocument();
    const AccordionChildren = screen.getByTestId(/children/i);
    const computedStyle = getComputedStyle(AccordionChildren);
    expect(computedStyle.maxHeight).toBe(maxHeight);
    expect(computedStyle.overflowY).toBe("auto");
  });

  it("has proper accessibility attributes", () => {
    // Given
    const accordionElement = (
      <Accordion title="Tasks">
        <ul>
          <li>Reading</li>
          <li>Cleaning</li>
        </ul>
      </Accordion>
    );

    // When
    render(accordionElement);

    // Then
    // Find the accordion toggle button
    const button = screen.getByRole("button");
    // Check that the button has the correct aria-expanded attribute
    expect(button).toHaveAttribute("aria-expanded", "false");
    // Check that the button has the correct aria-controls attribute
    const contentId = button.getAttribute("aria-controls");
    expect(contentId).toBeTruthy();
  });
});
